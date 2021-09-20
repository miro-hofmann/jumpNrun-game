const KEY_CODE_W = 87;
const KEY_CODE_A = 65;
const KEY_CODE_S = 83;
const KEY_CODE_D = 68;
/**
 * This function is a scene invoked by p5.scenemanager.
 *
 * @example
 *
 *     mgr.showScene( testChamber2_DOUBLE_JUMP ); // if in starting sketch
 *
 *     this.sceneManager.showScene( testChamber2_DOUBLE_JUMP ); // if already in a scene
 *
 */
function testChamber2_DOUBLE_JUMP() {
  let slider;
  const liney = 380;
  this.setup = () => {
    slider = createSlider(0, 255, 0);
    slider.position(10, 10);
    slider.style('width', '80px');
  };

  /**
   * This function runs every time the scene is invoked.
   */
  this.enter = () => {
    entities = new Group();
    init_player();
    init_ground();

    player.addToGroup(entities);
  };

  /**
   * This function is the draw-loop of the scene.
   */
  this.draw = () => {
    let val = slider.value();
    const doubleJumpThreshold = groundy - 25 - val;
    background(255); //white background

    // so you don't slide over the floor
    player.velocity.x = 0;

    // controll of the player character
    if (keyIsDown(LEFT_ARROW) || keyIsDown(KEY_CODE_A)) {
      player.velocity.x = -5;
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(KEY_CODE_D)) {
      player.velocity.x = 5;
    } else if (
      (keyIsDown(UP_ARROW) || keyIsDown(KEY_CODE_W)) &&
      player.collide(ground) == true
    ) {
      console.log('jump');
      player.velocity.y -= 25;
    } else if (
      (keyIsDown(UP_ARROW) || keyIsDown(KEY_CODE_W)) &&
      player.collide(ground) == false &&
      player.position.y + player.height < doubleJumpThreshold
    ) {
      console.log('double jump');
      player.velocity.y -= 3;
    }

    // add gravity to all the entities
    for (var i = 0; i < entities.length; i++) {
      var e = entities[i];
      e.velocity.y += gravity;
    }

    player.collide(ground); // so the player does not fall through

    // creates illusion of camera following player
    push();
    {
      translate(width / 2 - player.position.x, 0, 0);
      drawSprites(); // draws all the characters, objects, etc.
    }
    pop();
    if (DEBUG) {
      const playerX = player.position.x + (width / 2 - player.position.x);
      const playerY = player.position.y;
      centerCircle = circle(playerX, playerY, 10);
      label = text(`(${playerX}|${playerY})`, playerX + 20, playerY);
    }
    draw_frame_gui(); // draw all the p5.play sprites
    const l = line(0, doubleJumpThreshold, 1024, doubleJumpThreshold);
    // stop scene and go back to menu if player falls down
    if (player.position.y > height) {
      this.sceneManager.showScene(menu);
    }
  };
}
