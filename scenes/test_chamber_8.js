/**
 * This function is a scene invoked by p5.scenemanager.
 *
 * @example
 * 
 *     mgr.showScene( testChamber8 ); // if in starting sketch
 * 
 *     this.sceneManager.showScene( testChamber8 ); // if already in a scene
 * 
 */
function testChamber8(){
  /**
   * This function runs every time the scene is invoked.
   */
  this.enter = function(){
  }
  
  /**
   * This function is the draw-loop of the scene.
   */
  this.draw = function(){
    background(255);
    textAlign("center", "center");
    textSize(height*pow(GRC,5));
    text("not yet implemented", width/2, height/2)
  }
  
  this.mousePressed = function(){this.sceneManager.showScene( menu );}
  this.keyPressed = function(){this.sceneManager.showScene( menu );}
  }