package com.invertedreproduction.customcode;

import androidx.annotation.NonNull;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

@ReactModule(name = "EditText")
public class EditTextViewManager extends SimpleViewManager<EditTextView> {
    @NonNull
    @Override
    public String getName() {
        return "EditText";
    }

    @NonNull
    @Override
    protected EditTextView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new EditTextView(reactContext);
    }
}
