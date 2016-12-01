package com.example.ioriens.gpstest;

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
import com.amap.api.location.AMapLocationListener;
import com.amap.api.location.LocationManagerProxy;
import com.amap.api.location.LocationProviderProxy;

import java.util.Date;

public class MainActivity extends Activity implements View.OnClickListener {

    private TextView mTextView;
    private Button gpsBtn, amapBtn;

    private LocationManager gpsManager;
    private LocationManagerProxy aMapManager;

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

    private void startAmap() {
        aMapManager = LocationManagerProxy.getInstance(this);
        aMapManager.requestLocationUpdates(LocationProviderProxy.AMapNetwork, 2000, 10, mAMapLocationListener);
    }

    private void stopAmap() {
        if (aMapManager != null) {
            aMapManager.removeUpdates(mAMapLocationListener);
            aMapManager.destroy();
        }

        aMapManager = null;
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
                    + " longitude--->" + longitude
                    + " speed--->" + speed
                    + " time--->" + new Date(time).toString();
            mTextView.setText("GPS定位\n" + s);
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
            if (location != null) {
                Double geoLat = location.getLatitude();
                Double geoLng = location.getLongitude();
                String cityCode = "";
                String desc = "";
                Bundle locBundle = location.getExtras();
                if (locBundle != null) {
                    cityCode = locBundle.getString("citycode");
                    desc = locBundle.getString("desc");
                }

                String str = ("定位成功 :(" + geoLat + ", " + geoLat + ")"
                        + "\n精   度：" + location.getProvider() + "\n定位时间："
                        + new Date(location.getTime()) + "\n城市编码: "
                        + cityCode + "\n位置描述: " + desc + "\n省："
                        + location.getProvince() + "\n市: " + location.getCity()
                        + "\n区（县）:" + location.getDistrict() + "n区域编码： " + location.getAdCode()
                );
                mTextView.setText("高德定位\n" + str);
            }
        }

        @Override
        public void onLocationChanged(Location location) {
            Log.e("Location", "onLocationChanged");

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
}
