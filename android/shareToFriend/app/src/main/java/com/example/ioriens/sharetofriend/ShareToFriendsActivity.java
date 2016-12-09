package com.example.ioriens.sharetofriend;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class ShareToFriendsActivity extends FragmentActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        loadShareFriendsFragment();
    }

    private void loadShareFriendsFragment() {
        FragmentManager fm = getSupportFragmentManager();

        Fragment fragment = fm.findFragmentById(R.id.activity_main_share_friends_framelayout);
        if(fragment == null) {
            fragment = ShareToFriendsFragment.newInstance();
            fm.beginTransaction().add(R.id.activity_main_share_friends_framelayout, fragment).commit();
        }
    }
}
