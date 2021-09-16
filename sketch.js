
/**
 * @file The main file of this p5js sketch.
 *
 *
 *
 * @author Miro Hofmann <miro-hofmann@posteo.org>
 * @version 0.1
 */


/** This is a setup function. */
function setup() {
  createCanvas(screen_width, screen_height);

  entities = new Group();

  /** @todo make function for this in entities.js **/
  player = createSprite(300, 150);
  player.height = play_screen_height * pow(GRC, 4);
  player.width = player.height*GRC;
  player.name = "Bernd";
  player.addToGroup(entities);
  player.friction = 0.03;

  /** @todo make function for this in entities.js **/
  ground = createSprite(width / 2, 
                        gap_to_play_screen + 
                        play_screen_height * GRC);
  ground.width = screen_width*GRC;
  ground.height = 50;
  ground.immovable = true;

  player.addToGroup(entities);
}

/** This is a draw function. */
function draw() {

  push();
  translate(width/2 - player.position.x, 0, 0);

  background(255);

  player.velocity.x = 0;
  
  if (keyIsDown(LEFT_ARROW))
    player.velocity.x = -5;
  if (keyIsDown(RIGHT_ARROW))
    player.velocity.x = 5;
  if (keyIsDown(UP_ARROW) && player.collide(ground) == true){
    player.velocity.y -= 15;
  }
  
  for (var i = 0; i < entities.length; i++) {
    var e = entities[i];
    e.velocity.y += gravity;
  }

  
  player.collide(ground);
  drawSprites();
  
  pop();

  draw_frame_gui();
}