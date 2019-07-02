package com.xiaolaoban.blog.vojo;

public class ResponseData {
	private int code;
	private String errorMsg;
	private Object data;
	public int getCode() {
		return code;
	}
	public void setCode(int i) {
		this.code = i;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
}
