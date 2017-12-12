// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


chrome.app.runtime.onLaunched.addListener(function() {
	
  
   /*chrome.system.display.getInfo(function display(disp){
       
       var upperY=disp[0].bounds.top>disp[1].bounds.top?disp[0].bounds.top:disp[1].bounds.top;
       var lowerY=disp[0].bounds.top<disp[1].bounds.top?disp[0].bounds.top:disp[1].bounds.top;*/
        var upperY=800;
        var lowerY=0;
      
       
        chrome.app.window.create("index.html", {
            frame: "chrome",
            left:0,
            top:lowerY,
            width: 1200,
            height: 1080
            },function(win) {
  
              //init();
               // win.fullscreen();
            }
        );
         /*chrome.app.window.create("index2.html", {
            frame: "chrome",
            left:0,
            top:upperY,
            width: 1200,
            height: 1080

        },function(win) {
           // win.fullscreen();
             init();
        });*/

       
       
  //  })
    
  
    
});