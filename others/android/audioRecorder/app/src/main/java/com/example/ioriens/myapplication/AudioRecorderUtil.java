package com.example.ioriens.myapplication;

import android.media.MediaRecorder;

import java.io.File;
import java.io.IOException;

/**
 * Created by IOriens on 04/11/2016.
 */

public class AudioRecorderUtil {
    private static MediaRecorder mr;

    public AudioRecorderUtil () {

    }

    public static MediaRecorder initMr(File audioFile) {
        // 创建录音对象
        mr = new MediaRecorder();

        // 从麦克风源进行录音
        mr.setAudioSource(MediaRecorder.AudioSource.MIC);

        // 录制声音的输出格式
        mr.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);

        // 设置声音的编码格式
        mr.setAudioEncoder(MediaRecorder.AudioEncoder.DEFAULT);

        // 设置暑出文件
        mr.setOutputFile(audioFile.getAbsolutePath());

        try {
            // 创建文件
            audioFile.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return mr;
    }

    public static void MRSTart(MediaRecorder mr) {
        // 准备录制
        try {
            mr.prepare();
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        mr.start();
    }

    public static void MRStop(MediaRecorder mr) {
        if(mr != null) {
            mr.stop();
            mr.release();
            mr = null;
        }
    }
}
