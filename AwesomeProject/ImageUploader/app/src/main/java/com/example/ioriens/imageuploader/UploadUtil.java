package com.example.ioriens.imageuploader;

import android.util.Log;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.UUID;

/**
 * Created by IOriens on 18/11/2016.
 */

public class UploadUtil {
    private static final String TAG = "uploadFile";
    private static final int TIME_OUT = 50 * 1000; // 超时时间
    private static final String CHARSET = "utf-8";

    public static int uploadFile(String filePath, String requestURL) {
        int res = 0;
        String result = null;
        String BOUNDRAY = UUID.randomUUID().toString();
        String PREFIX  = "--", LINE_END = "\r\n";
        String CONTENT_TYPE = "multipart/form-data";

        try {
            URL url = new URL(requestURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setReadTimeout(TIME_OUT);
            conn.setConnectTimeout(TIME_OUT);
            conn.setDoInput(true);
            conn.setDoOutput(true);
            conn.setUseCaches(false);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Charset", CHARSET);
            conn.setRequestProperty("connection", "keep-alive");
            conn.setRequestProperty("Content-Type", CONTENT_TYPE + ";boundary=" + BOUNDRAY);


            DataOutputStream dos = new DataOutputStream(conn.getOutputStream());
            File file = new File(filePath);
            if(file != null) {
                StringBuffer sb = new StringBuffer();
                sb.append(PREFIX).append(BOUNDRAY).append(LINE_END);
                sb.append("Content-Disposition: form-data; name=\"img1" + "\";filename=\""
                    + file.getName() + "\"" + LINE_END);
                sb.append("Content-Type: application/octet-stream; charset="
                    + CHARSET + LINE_END).append(LINE_END);
                dos.write(sb.toString().getBytes());
                InputStream is = new FileInputStream(file);
                byte[] bytes = new byte[1024];
                int len = 0;
                while((len = is.read(bytes)) != -1) {
                    dos.write(bytes, 0, len);
                }
                dos.write(LINE_END.getBytes());
                is.close();
            }
            byte[] end_data = (PREFIX + BOUNDRAY + PREFIX + LINE_END).getBytes();
            dos.write(end_data);
            dos.flush();


            res = conn.getResponseCode();
            Log.e(TAG, "response code:" + res);
            if (res == 200) {
                Log.e(TAG, "request success");
                InputStream input =  conn.getInputStream();
                StringBuffer sb1 = new StringBuffer();
                int ss;
                while ((ss = input.read()) != -1) {
                    sb1.append((char) ss);
                }

                result = sb1.toString();
                Log.e(TAG, "result :" + result);
            } else {
                Log.e(TAG, "request error");
            }

        }catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return res;
    }

}
