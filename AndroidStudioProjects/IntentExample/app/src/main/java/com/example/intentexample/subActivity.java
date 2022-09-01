package com.example.intentexample;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class subActivity extends AppCompatActivity {

    private TextView sub_tv_id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub);

        sub_tv_id = findViewById(R.id.sub_tv_id);

        Intent intent = getIntent();
        String str = intent.getStringExtra("et_text");

        sub_tv_id.setText(str);
    }
}