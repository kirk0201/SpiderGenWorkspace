package com.example.intentexample;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private Button btn_move;
    private EditText et_id;
    private String str;
    private ImageView iv_id;
    private ListView lv_id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btn_move = findViewById(R.id.btn_move);
        et_id = findViewById(R.id.et_id);
        iv_id = findViewById(R.id.iv_id);
        lv_id = findViewById(R.id.lv_id);

        btn_move.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                str = et_id.getText().toString();
                Intent intent = new Intent(MainActivity.this, subActivity.class);
                intent.putExtra("et_text", str);
                startActivity(intent); // 액티비티 이동
            }
        });

        iv_id.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(MainActivity.this, "이미지를 클릭했습니다!", Toast.LENGTH_SHORT).show();
            }
        });

        List<String> data = new ArrayList<>();
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, data);

        lv_id.setAdapter(adapter);
        data.add("리스트뷰 1");
        data.add("리스트뷰 2");
        data.add("리스트뷰 3");
        data.add("리스트뷰 4");
        adapter.notifyDataSetChanged();

    }
}