package com.example.ioriens.gpstest;

import android.Manifest;
import android.app.Activity;

import android.content.pm.PackageManager;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;

import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.View;

import android.widget.Button;
import android.widget.TextView;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;


import java.util.Date;

public class MainActivity extends Activity implements View.OnClickListener {

    private TextView mTextView;
    private Button gpsBtn, amapBtn;

    private LocationManager gpsManager;
    private AMapLocationClient locationClient = null;
    private AMapLocationClientOption locationOption = new AMapLocationClientOption();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mTextView = (TextView) findViewById(R.id.text);
        gpsBtn = (Button) findViewById(R.id.gps);
        amapBtn = (Button) findViewById(R.id.amap);
        gpsBtn.setOnClickListener(this);
        amapBtn.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {


        if(checkPermission() > 0) {
            switch (v.getId()) {
                case R.id.gps:
                    if (gpsBtn.getText().toString().equals("开启GPS定位")) {
                        startGps();
                        gpsBtn.setText("停止GPS定位");
                    } else {
                        stopGps();
                        gpsBtn.setText("开启GPS定位");
                    }
                    break;
                case R.id.amap:
                    if (amapBtn.getText().toString().equals("开启高德定位")) {
                        startAmap();
                        amapBtn.setText("停止高德定位");
                    } else {
                        stopAmap();
                        amapBtn.setText("开启高德定位");
                    }
                    break;
                default:
                    break;
            }
        }

    }

    private int checkPermission() {
        MainActivity thisActivity = this;

        int MY_PERMISSIONS_REQUEST_READ_CONTACTS =  0;

        // Here, thisActivity is the current activity
        if (ContextCompat.checkSelfPermission(thisActivity,
                Manifest.permission.ACCESS_COARSE_LOCATION)
                == PackageManager.PERMISSION_GRANTED && ContextCompat.checkSelfPermission(thisActivity,
                Manifest.permission.ACCESS_FINE_LOCATION)
                == PackageManager.PERMISSION_GRANTED) {
            MY_PERMISSIONS_REQUEST_READ_CONTACTS = 1;

        } else {


            // No explanation needed, we can request the permission.
            ActivityCompat.requestPermissions(thisActivity,
                    new String[]{Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION},
                    MY_PERMISSIONS_REQUEST_READ_CONTACTS);

            Log.e("Location", "ggggggggggggg");
            // MY_PERMISSIONS_REQUEST_READ_CONTACTS is an
            // app-defined int constant. The callback method gets the
            // result of the request.
        }
        return MY_PERMISSIONS_REQUEST_READ_CONTACTS;
    }


    /**
     * 默认的定位参数
     * @since 2.8.0
     * @author hongming.wang
     *
     */
    private AMapLocationClientOption getDefaultOption(){
        AMapLocationClientOption mOption = new AMapLocationClientOption();
        mOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);//可选，设置定位模式，可选的模式有高精度、仅设备、仅网络。默认为高精度模式
        mOption.setGpsFirst(false);//可选，设置是否gps优先，只在高精度模式下有效。默认关闭
        mOption.setHttpTimeOut(30000);//可选，设置网络请求超时时间。默认为30秒。在仅设备模式下无效
        mOption.setInterval(2000);//可选，设置定位间隔。默认为2秒
        mOption.setNeedAddress(true);//可选，设置是否返回逆地理地址信息。默认是true
        mOption.setOnceLocation(false);//可选，设置是否单次定位。默认是false
        mOption.setOnceLocationLatest(false);//可选，设置是否等待wifi刷新，默认为false.如果设置为true,会自动变为单次定位，持续定位时不要使用
        AMapLocationClientOption.setLocationProtocol(AMapLocationClientOption.AMapLocationProtocol.HTTP);//可选， 设置网络请求的协议。可选HTTP或者HTTPS。默认为HTTP
        mOption.setSensorEnable(false);//可选，设置是否使用传感器。默认是false
        return mOption;
    }




    private void startAmap() {
        Log.e("Location", "startamp");

        locationClient = new AMapLocationClient(this.getApplicationContext());
        //设置定位参数
        locationClient.setLocationOption(getDefaultOption());
        // 设置定位监听
        locationClient.setLocationListener(mAMapLocationListener);
        // 启动定位
        locationClient.startLocation();
        Log.e("Location", "endamp");
    }

    private void stopAmap() {

        if(locationClient != null) {
            // 停止定位
            locationClient.stopLocation();
        }

    }

    private void startGps() {

        gpsManager = (LocationManager) getSystemService(LOCATION_SERVICE);

        String provider = gpsManager.getProvider(LocationManager.NETWORK_PROVIDER).getName();


        try {
            gpsManager.requestLocationUpdates(provider, 3000, 10, gpsListener);
        } catch (SecurityException e) {
            e.printStackTrace();
        }

    }

    private void stopGps() {

        try {
            gpsManager.removeUpdates(gpsListener);
        } catch (SecurityException e) {
            e.printStackTrace();
        }

    }

    private LocationListener gpsListener = new LocationListener() {



        @Override
        public void onLocationChanged(Location location) {
            Log.e("Location", "onLocationChanged");
            double latitude = location.getLatitude();
            double longitude = location.getLongitude();
            float speed = location.getSpeed();
            long time = location.getTime();
            String s = "latitude --->" + latitude
                    + "\nlongitude--->" + longitude
                    + "\nspeed--->" + speed
                    + "\ntime--->" + new Date(time).toString();
            mTextView.setText("GPS定位\n\n" + s);
        }

        @Override
        public void onStatusChanged(String provider, int status, Bundle extras) {
            Log.e("Location", "onStatusChanged");
        }

        @Override
        public void onProviderEnabled(String provider) {
            Log.e("Location", "onProviderEnabled");
        }

        @Override
        public void onProviderDisabled(String provider) {
            Log.e("Location", "onProviderDisabled");
        }
    };

    private AMapLocationListener mAMapLocationListener = new AMapLocationListener() {


        @Override
        public void onLocationChanged(AMapLocation location) {
            Log.e("Location", "onLocationChanged1");
            if (location != null && location.getLatitude() > 1) {
                Double geoLat = location.getLatitude();
                Double geoLng = location.getLongitude();
                String cityCode = "";
                String desc = "";
                Bundle locBundle = location.getExtras();
                if (locBundle != null) {
                    cityCode = locBundle.getString("citycode");
                    desc = locBundle.getString("desc");
                }
                Log.e("Location", "定位成功 :(" + geoLat + ", " +location.getTime()+", " + geoLat + ")");

                String str = ("定位成功 :(" + geoLat + ", " + geoLng + ")"
                        + "\n精   度：" + location.getProvider() + "\n定位时间："
                        + new Date(location.getTime()) + "\n城市编码: "
                        + cityCode + "\n位置描述: " + desc + "\n省："
                        + location.getProvince() + "\n市: " + location.getCity()
                        + "\n区（县）:" + location.getDistrict() + "\n区域编码： " + location.getAdCode()
                );
                mTextView.setText("高德定位\n\n" + str);
            } else {
                Log.e("Location", "Error Code: " + location.getErrorCode());
            }
        }


    };
}
