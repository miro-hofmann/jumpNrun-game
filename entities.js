/**
 * physical gravity f.e. for player
 * @const {number}
 */
const gravity = 1;
/**
 * sprite group for all the things
 * @const {number}
 */
//
var entities;
/**
 * the character you play
 * @const {number}
 */
var player;

var player_name;

/**
 * what you walk on
 * @todo should be a group
 * @const {number}
 */
var ground;

function init_player() {
  player = createSprite(300, 150);
  player.height = play_screen_height * pow(GRC, 4);
  player.width = player.height * GRC;
  player.addToGroup(entities);
  player.friction = 0.03;
}

function init_ground() {
  ground = createSprite(width / 2, groundy);
  ground.width = screen_width * GRC;
  ground.height = 50;
  ground.immovable = true;
}
