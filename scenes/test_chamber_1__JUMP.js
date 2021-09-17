function testChamber1_JUMP()
{

  this.mechanic = "JUMP";

  this.enter = function()
    {
    entities = new Group();
    init_player();
    init_ground();

    player.addToGroup(entities);
  }

  this.draw = function()
  {

    push(); {
      translate(width/2 - player.position.x, 0, 0);
    
      background(255);
    
      player.velocity.x = 0;
      
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65))
        player.velocity.x = -5;
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68))
        player.velocity.x = 5;
      if ((keyIsDown(UP_ARROW)  || keyIsDown(87)) && player.collide(ground) == true){
        player.velocity.y -= 15;
      }
      
      for (var i = 0; i < entities.length; i++) {
        var e = entities[i];
        e.velocity.y += gravity;
      }
    
      
      player.collide(ground);
      drawSprites();
    } pop();
  
    draw_frame_gui();

    if(player.position.y>height){
      this.sceneManager.showScene( menu );
    }

  }
}