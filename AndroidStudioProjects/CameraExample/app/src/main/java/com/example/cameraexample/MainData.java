package com.example.cameraexample;

public class MainData {

    private int rv_image;
    private String rv_name;
    private String rv_content;

    public MainData(int rv_image, String rv_name, String rv_content) {
        this.rv_image = rv_image;
        this.rv_name = rv_name;
        this.rv_content = rv_content;
    }

    public int getRv_image() {
        return rv_image;
    }

    public void setRv_image(int rv_image) {
        this.rv_image = rv_image;
    }

    public String getRv_name() {
        return rv_name;
    }

    public void setRv_name(String rv_name) {
        this.rv_name = rv_name;
    }

    public String getRv_content() {
        return rv_content;
    }

    public void setRv_content(String rv_content) {
        this.rv_content = rv_content;
    }
}
