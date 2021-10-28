function name(){
    let new_name = "";
    this.draw = function(){
      background(255);
      if(new_name == ""){
        textSize(height*pow(GRC,5));
        textAlign("center", "center")
        if(frameCount<200){
          fill(abs(255-255*(frameCount/100)));
          text("hello test subject", width/2, height/2);
        } else {
          fill(255-255*((frameCount-200)/100));
          text("what is your name?", width/2, height/2);
        }
      } else if(playerName == null) {
        textSize(height*pow(GRC,5.5));
        textAlign("center", "center")
        text(new_name, width/2, height/2);
        
      } else {
        this.sceneManager.showScene( menu );
      }

    }
    this.keyPressed = function(){   
      if(keyCode == BACKSPACE && new_name.length>0){
        new_name = new_name.slice(0,-1);
      } else if((keyCode >= 48 && keyCode<=90 || keyCode === 32) && new_name.length<20){
        new_name += key;
      } else if(keyCode === ENTER){
        playerName = new_name;
      }
    }
  }