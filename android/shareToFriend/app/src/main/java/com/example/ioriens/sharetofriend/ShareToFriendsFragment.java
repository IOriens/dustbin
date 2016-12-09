package com.example.ioriens.sharetofriend;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.example.ioriens.sharetofriend.mbll.ShareToFriendsMBLL;

/**
 * Created by IOriens on 09/12/2016.
 */

public class ShareToFriendsFragment extends Fragment {
    public static ShareToFriendsFragment newInstance() {
        ShareToFriendsFragment fragment = new ShareToFriendsFragment();
        return fragment;
    }

    public View onCreateView(LayoutInflater inflater,
                             @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        final View v = inflater.inflate(R.layout.fragment_share_friends_layout, container, false);

        Button shareButton = (Button) v.findViewById(R.id.share_to_friend_button);

        shareButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ShareToFriendsMBLL.shareForFriend(getActivity(), v);
            }
        });

        return v;
    }
}
