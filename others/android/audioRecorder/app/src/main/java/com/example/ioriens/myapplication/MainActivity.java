package com.example.ioriens.myapplication;

import android.Manifest;
import android.annotation.TargetApi;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.media.MediaRecorder;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.widget.Button;

import java.io.File;

import android.text.format.DateFormat;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Locale;

public class MainActivity extends Activity {
    MediaRecorder mr;
    File audioFIle;
    Button record;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getPermissions();

        record = (Button) findViewById(R.id.getAudio);

        record.setOnClickListener(new BtnOnClickListener());
    }

    @TargetApi(23)
    private void getPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            ArrayList<String> permissions = new ArrayList<>();
            /***
             * 定位权限为必须权限，用户如果禁止，则每次进入都会申请
             */


            if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
                permissions.add(Manifest.permission.RECORD_AUDIO);
            }
            if (checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                permissions.add(Manifest.permission.WRITE_EXTERNAL_STORAGE);
            }
            if (permissions.size() > 0) {
                requestPermissions(permissions.toArray(new String[permissions.size()]), 127);
            }
        }
    }

    public class BtnOnClickListener implements View.OnClickListener {

        private boolean recordState = false;

        @Override
        public void onClick(View v) {

            // 文件名生成
            DateFormat df = new DateFormat();
            String fileName = df.format("yyyMMdd_mmss", Calendar.getInstance(Locale.CHINA)) + ".amr";

            if (!recordState) {

                // 路径生成
                File path = new File(Environment.getExternalStorageDirectory().getAbsoluteFile() + "/AudioRecorder/");
                if (!path.exists()) {
                    path.mkdir();
                }
                audioFIle = new File(Environment.getExternalStorageDirectory().getAbsoluteFile() + "/AudioRecorder/" + fileName);
                mr = AudioRecorderUtil.initMr(audioFIle);
                AudioRecorderUtil.MRSTart(mr);
                recordState = true;
                record.setText("停止");
            } else {
                AudioRecorderUtil.MRStop(mr);
                record.setText("录音");
                recordState = false;
                Toast.makeText(getApplicationContext(), "保存为：" + fileName, Toast.LENGTH_LONG).show();
            }

        }
    }
}
