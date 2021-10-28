const KEY_CODE_W = 87;
const KEY_CODE_A = 65;
const KEY_CODE_S = 83;
const KEY_CODE_D = 68;
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
  this.enter = function () {
    init_player(playerName);
    init_ground();

    engine = Engine.create();
    world = engine.world;

    addPhysicalEntitiesToWorld(world);
  };

  /**
   * This function is the draw-loop of the scene.
   */
  this.draw = function () {
    background(255); // white background
    Matter.Body.setAngle(player.body, 0);
    Engine.update(engine);

    // so you don't slide over the floor
    // player.velocity.x = 0;
    // controll of the player character
    if (keyIsDown(LEFT_ARROW) || keyIsDown(KEY_CODE_A)) {
      Matter.Body.setPosition(
        player.body,
        createVector(player.body.position.x - 5, player.body.position.y),
      );
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(KEY_CODE_D)) {
      // Matter.Body.setVelocity(player.body, createVector(5,0));
      Matter.Body.setPosition(
        player.body,
        createVector(player.body.position.x + 5, player.body.position.y),
      );
    }

    push();
    {
      translate(width / 2 - player.body.position.x, 0, 0);
      showPhysicalEntities();
    }
    pop();
    draw_frame_gui();

    if (DEBUG) {
      const playerX =
        player.body.position.x + (width / 2 - player.body.position.x);
      const playerY = round(player.body.position.y, 2);
      centerCircle = circle(playerX, playerY, 10);
      const xLabelText = round(playerX - (width / 2 - player.body.position.x), 2);
      label = text(`(${xLabelText}|${playerY})`, playerX + 20, playerY);
    }

    // stop scene and go back to menu if player falls down
    if (player.body.position.y > height) {
      this.sceneManager.showScene(menu);
      player = null;
      ground = null;
      entities.length = 0;
    }
  };
  this.keyPressed = function () {
    const pair = [player.body, ground.body];
    player.onGround = Matter.Detector.collisions([pair], engine)[0];

    if ((keyCode == UP_ARROW || keyCode == KEY_CODE_W) && player.onGround) {
      const v = createVector(0, -0.1);
      Matter.Body.applyForce(player.body, player.body.position, v);
    }
  };
}
