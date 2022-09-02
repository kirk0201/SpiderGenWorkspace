package com.example.intentexample;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.TextView;

public class subActivity extends AppCompatActivity {

    private TextView sub_tv_id;
    private EditText et_save;
    String saved = "File";
    private WebView wb_view;
    private String url = "https://www.naver.com";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sub);

        sub_tv_id = findViewById(R.id.sub_tv_id);
        et_save = findViewById((R.id.et_save));
        wb_view = findViewById(R.id.wb_view);

        wb_view.getSettings().setJavaScriptEnabled(true);
        wb_view.loadUrl(url);
        wb_view.setWebChromeClient(new WebChromeClient());
        wb_view.setWebViewClient(new WebViewClientClass());

        Intent intent = getIntent();
        String str = intent.getStringExtra("et_text");

        sub_tv_id.setText(str);

        SharedPreferences sharedPreferences = getSharedPreferences(saved, 0);
        String value = sharedPreferences.getString("edit", "");
        et_save.setText(value);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        SharedPreferences sharedPreferences = getSharedPreferences(saved, 0);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        String value = et_save.getText().toString();
        editor.putString("edit", value);
        editor.commit();

    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if((keyCode == KeyEvent.KEYCODE_BACK) && wb_view.canGoBack()){
            wb_view.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);

    }

    private class WebViewClientClass extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }
    }
}