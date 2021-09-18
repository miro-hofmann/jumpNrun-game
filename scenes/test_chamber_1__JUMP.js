
/**
 * This function is a scene invoked by p5.scenemanager.
 * 
 * It is a scene to test the basic movements of the character: 
 * - going left
 * - going right 
 * - jumping
 *
 * @example
 * 
 *     mgr.showScene( testChamber1_JUMP ); // if in starting sketch
 * 
 *     this.sceneManager.showScene( testChamber1_JUMP ); // if already in a scene
 * 
 */
function testChamber1_JUMP() {

  /**
   * This function runs every time the scene is invoked.
   */
  this.enter = function()
    {
    entities = new Group();
    init_player();
    init_ground();

    player.addToGroup(entities);
  }

  /**
   * This function is the draw-loop of the scene.
   */
  this.draw = function()
  {
    background(255); //white background
    
    // so you don't slide over the floor
    player.velocity.x = 0;
    
    // controll of the player character
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65))
      player.velocity.x = -5;
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68))
      player.velocity.x = 5;
    if (( keyIsDown(UP_ARROW)  || keyIsDown(87)) && 
          player.collide(ground) == true) {
      player.velocity.y -= 17;
    }
    
    // add gravity to all the entities
    for (var i = 0; i < entities.length; i++) {
      var e = entities[i];
      e.velocity.y += gravity;
    }
  
    player.collide(ground); // so the player does not fall through

    // creates illusion of camera following player
    push(); {
      translate(width/2 - player.position.x, 0, 0);
      drawSprites(); // draws all the characters, objects, etc.
    } pop();
  
    draw_frame_gui(); // draw all the p5.play sprites

    // stop scene and go back to menu if player falls down
    if(player.position.y>height){
      this.sceneManager.showScene( menu );
    }

  }
}