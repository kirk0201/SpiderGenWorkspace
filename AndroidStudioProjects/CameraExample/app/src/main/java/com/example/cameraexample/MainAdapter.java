package com.example.cameraexample;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

    // 1. extends RecyclerView.Adapter<MainAdapter.CustomViewHolder>를 추가
    // 2. Alt + Enter로 implementation와 create class, Make 'CustomViewHolder' extends~ 를 한다

public class MainAdapter extends RecyclerView.Adapter<MainAdapter.CustomViewHolder> {

    // 3. MainData 내용을 담을 리스트를 생성
    private ArrayList<MainData> arrayList;

    // 7. Alt + Enter로 생성자 함수 생성
    public MainAdapter(ArrayList<MainData> arrayList) {
        this.arrayList = arrayList;
    }

    @NonNull
    @Override
    public MainAdapter.CustomViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
    // 8. 생명주기에서 create을 담당하는 부분
    // 9. View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.rv_item, parent,false); 뷰 생성
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.rv_item, parent,false);

    // 10. CustomViewHodler 인스턴스 생성
        CustomViewHolder holder = new CustomViewHolder(view);
    // 11. holder return
        return holder;
    }

    // 12. onBinderViewHolder 실제 추가되는 생명주기
    @Override
    public void onBindViewHolder(@NonNull MainAdapter.CustomViewHolder holder, int position) {
    // 13. arrayList에 생성된 데이터를 position으로 찾아와 데이터를 넣는다
        holder.rv_image.setImageResource(arrayList.get(position).getRv_image());
        holder.rv_name.setText(arrayList.get(position).getRv_name());
        holder.rv_content.setText(arrayList.get(position).getRv_content());

    // 14. 해당 위치에 클릭 이벤트리스너를 추가 가능
    // 15. 클릭된 아이템의 position을 받아옴
        holder.itemView.setTag(position);

    // 16. 짧게 클릭시
        holder.itemView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String curName = holder.rv_name.getText().toString();
                Toast.makeText(view.getContext(), curName, Toast.LENGTH_SHORT).show();
            }
        });
    // 17. 길게 클릭시
        holder.itemView.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                remove(holder.getAdapterPosition());
                return true;
            }
        });
    }

    // 18. item의 길이
    @Override
    public int getItemCount() {
        return (null != arrayList ? arrayList.size(): 0);
    }

    // 19. 제거 함수 생성 notify는 새로고침의 뜻 아이템이 제거된 후 새로고침을 해줘야 반영
    public void remove(int position) {
        try {
            arrayList.remove(position);
            notifyItemRemoved(position);
        } catch (IndexOutOfBoundsException ex) {
          ex.printStackTrace();
        }
    }
    // 4. Alt + Enter create constructor를 하여 생성자 함수 생성
    public class CustomViewHolder extends RecyclerView.ViewHolder {

    // 5. list_item 변수 선언
        protected ImageView rv_image;
        protected TextView rv_name;
        protected TextView rv_content;

        public CustomViewHolder(@NonNull View itemView) {
            super(itemView);
    // 6. Activity형태가 아니기 때문에 itemView를 받아와서 findViewById를 한다
            this.rv_image = itemView.findViewById(R.id.rv_image);
            this.rv_name = itemView.findViewById(R.id.rv_name);
            this.rv_content = itemView.findViewById(R.id.rv_content);


        }
    }
}
