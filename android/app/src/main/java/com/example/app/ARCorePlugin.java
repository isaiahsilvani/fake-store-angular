package com.example.app;

import android.content.Intent;
import android.util.Log;

import com.example.app.kotlin.helloar.HelloArActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ARCore")
public class ARCorePlugin extends Plugin {

  @PluginMethod()
  public void launchARActivity(PluginCall call) {
    Log.e("TEST", "Isaiah - launcArActivity");

    Intent intent = new Intent(getContext(), HelloArActivity.class);
    getContext().startActivity(intent);
  }
}
