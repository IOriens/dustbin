package com.example.ioriens.sharetofriend.mbll;

import android.content.Context;
import android.content.Intent;
import android.view.View;

/**
 * Created by IOriens on 09/12/2016.
 */

public class ShareToFriendsMBLL {
    public static void shareForFriend(Context context, View view) {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_SUBJECT, "分享");
        String text = "以下是分享内容:\n";
        text += "https://github.com/IOriens";
        intent.putExtra(Intent.EXTRA_TEXT, text);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(Intent.createChooser(intent, "分享给好友"));
    }
}
