package com.gitproject;

import android.app.Activity;
import android.content.Intent;
import android.text.TextUtils;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by dongfanggouwu-zy on 2018/1/10.
 */

public class MyIntentMoudle extends ReactContextBaseJavaModule {
    public MyIntentMoudle(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * 注意：记住getName方法中的命名名称，JS中调用需要
     *
     * @return
     */
    @Override
    public String getName() {
        return "IntentMoudle";
    }

    /**
     * 注意：startActivityFromJS方法添加RN注解(@ReactMethod)，否则该方法将不被添加到RN中
     *
     * @param name
     * @param params
     */
    @ReactMethod
    public void startActivityFromJs(String name, String params ) {
        Activity currentActivity = getCurrentActivity();
        if (null != currentActivity) {
            try {
                Class toActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity, toActivity);
                intent.putExtra("params", params);
                currentActivity.startActivity(intent);

            } catch (ClassNotFoundException e) {
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : " + e.getMessage());

            }
        }
    }

    /**
     * 从JS页面跳转到Activity界面，并且等待从Activity返回的数据给JS
     * @param className
     * @param successBack
     * @param errorBack
     */
    @ReactMethod
    public void startActivityFromJSGetResult(String className,int requestCode,Callback successBack, Callback errorBack){
        try {
            Activity currentActivity=getCurrentActivity();
            if(currentActivity!=null) {
                Class toActivity = Class.forName(className);
                Intent intent = new Intent(currentActivity,toActivity);
                currentActivity.startActivityForResult(intent,requestCode);
                //进行回调数据
                successBack.invoke(FirstActivity.mQueue.take());
            }
        } catch (Exception e) {
            errorBack.invoke(e.getMessage());
            e.printStackTrace();
        }

    }
}
