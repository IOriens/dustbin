package com.example.ioriens.imageuploader;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Environment;
import android.os.Handler;
import android.os.Message;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MainActivity extends AppCompatActivity {
    private boolean state = false;
    public static Handler handler;
    Bitmap photo;
    String picPath;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setOnClickListener();
        handler = new Handler() {
            @Override
            public void handleMessage(Message msg) {
                if(state) {
                    Toast.makeText(MainActivity.this, "success", Toast.LENGTH_LONG).show();
                } else {
                    Toast.makeText(MainActivity.this, "failed", Toast.LENGTH_LONG).show();
                }
                super.handleMessage(msg);
            }
        };

    }

    public void setOnClickListener() {
        Button submit = (Button) findViewById(R.id.submit);
        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        UploadUtil.uploadFile(picPath, "http://172.22.20.251:8080"
                            + "/MobileGAServer/servlet/Receivefile");
                        state = true;
                        Message m = handler.obtainMessage();
                        handler.sendMessage(m);
                    }
                }).start();
            }
        });

        Button photo = (Button) findViewById(R.id.takephoto);
        photo.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View v) {
                doPhoto(v);
            }
        });
    }

    public void doPhoto(View view) {
        destoryBitmap();
        String state = Environment.getExternalStorageState();
        if(state.equals(Environment.MEDIA_MOUNTED)) {
            Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
            startActivityForResult(intent, 1);
        } else {
            Toast.makeText(MainActivity.this, "没有SD卡", Toast.LENGTH_LONG).show();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        Uri uri = data.getData();
        if (uri != null) {
            this.photo  = BitmapFactory.decodeFile(uri.getPath());
        }

        if (this.photo == null) {
            Bundle bundle = data.getExtras();
            if(bundle != null) {
                this.photo = (Bitmap) bundle.get("data");
            } else {
                Toast.makeText(MainActivity.this, "拍照失败", Toast.LENGTH_LONG).show();
                return;
            }
        }

        FileOutputStream fileOutputStream = null;
        try {
            String saveDir = Environment.getExternalStorageDirectory() + "/ImageUploader ";
            File dir = new File(saveDir);
            if(!dir.exists()) dir.mkdir();
            SimpleDateFormat t = new SimpleDateFormat("yyyyMMddssSSS");
            String filename = "MT" + (t.format(new Date())) + ".jpg";
            File file = new File(saveDir, filename);
            fileOutputStream = new FileOutputStream(file);

            this.photo.compress(Bitmap.CompressFormat.JPEG, 100, fileOutputStream);
            this.picPath = file.getPath();
            ImageView imageView = (ImageView) findViewById(R.id.imageView1);
            imageView.setImageBitmap(this.photo);


        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(fileOutputStream != null) {
                try {
                    fileOutputStream.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
//        super.onActivityResult(requestCode, resultCode, data);
    }

    private void destoryBitmap() {
        if (photo != null && !photo.isRecycled()) {
            photo.recycle();
            photo = null;
        }
    }
}
