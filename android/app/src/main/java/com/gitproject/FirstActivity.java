package com.gitproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

public class FirstActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_first);
        init();
    }

    public void init() {
        Intent intent = getIntent();
        Bundle a = intent.getExtras();
        String param = a.getString("params");
        Toast.makeText(this, param, Toast.LENGTH_SHORT).show();
    }
}
