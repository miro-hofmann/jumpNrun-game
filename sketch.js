////////    golden ratio        ////////////////////////////////////////////////
const golden_ratio = 1.61803398874989484820458683436563811772030917980576286213;
const small_golden_ratio = golden_ratio-1;
////////////////////////////////////////////////////////////////////////////////

////////    screen vars         ////////////////////////////////////////////////
const screen_width = 1024;
const screen_height = 768;
const play_screen_height = screen_height*small_golden_ratio;
const gap_to_play_screen = (screen_height - play_screen_height) / 2;
////////////////////////////////////////////////////////////////////////////////

////////    variables           ////////////////////////////////////////////////
// groups
var entities;
// sprites
var player;
var ground;
// physics
const gravity = 1;
// control
var jump;
////////////////////////////////////////////////////////////////////////////////

////////    functions           ////////////////////////////////////////////////
function draw_frame(){
  fill(0);
  rect(0, 0, screen_width, gap_to_play_screen);
  rect(0, gap_to_play_screen + play_screen_height, 
       screen_width, gap_to_play_screen);
}
////////////////////////////////////////////////////////////////////////////////

////////    setup               ////////////////////////////////////////////////
function setup() {
  createCanvas(screen_width, screen_height);
  background(0);

  entities = new Group();

  player = createSprite(300, 150);
  player.height = play_screen_height * pow(small_golden_ratio, 4);
  player.width = player.height*small_golden_ratio;
  player.name = "Bernd";
  player.addToGroup(entities);
  player.friction = 0.03;

  ground = createSprite(width / 2, 
                        gap_to_play_screen + 
                        play_screen_height * small_golden_ratio);
  ground.width = 900;
  ground.height = 50;
  ground.immovable = true;
  player.addToGroup(entities);
}
////////////////////////////////////////////////////////////////////////////////

////////    draw                ////////////////////////////////////////////////
function draw() {
  fill(255);
  rect(0, gap_to_play_screen, screen_width, play_screen_height);

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
  
  draw_frame();
}
////////////////////////////////////////////////////////////////////////////////
