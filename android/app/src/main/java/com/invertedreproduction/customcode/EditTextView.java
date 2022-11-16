package com.invertedreproduction.customcode;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatEditText;

public class EditTextView extends AppCompatEditText {
    public EditTextView(@NonNull Context context) {
        super(context);
        setBackgroundColor(Color.GREEN);
    }

    public EditTextView(@NonNull Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public EditTextView(@NonNull Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }
}
