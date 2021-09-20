var doubleJumpThreshold = 0;
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
  var doubleJumpedBefore = false;

  this.setup = () => {
    slider = createSlider(0, 255, 0);
    slider.position(10, 10);
    slider.style('width', '80px');
  };

  /**
   * This function runs every time the scene is invoked.
   */
  this.enter = () => {
    init_player();
    init_ground();

    engine = Engine.create();
    world = engine.world;
    
    addPhysicalEntitiesToWorld(world);
  };

  /**
   * This function is the draw-loop of the scene.
   */
  this.draw = () => {
    let val = slider.value();
    doubleJumpThreshold = groundy - 25 - val;
    background(255); //white background
    Engine.update(engine);


    // controll of the player character
    if (keyIsDown(LEFT_ARROW) || keyIsDown(KEY_CODE_A))
    {
      Matter.Body.setPosition(player.body, createVector(player.body.position.x-5, player.body.position.y))
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(KEY_CODE_D)){
      //Matter.Body.setVelocity(player.body, createVector(5,0));
      Matter.Body.setPosition(player.body, createVector(player.body.position.x+5, player.body.position.y))
    }

  //   // creates illusion of camera following player
    push();
    {
      translate(width / 2 - player.body.position.x, 0, 0);
      showPhysicalEntities();
    }
    pop();
    draw_frame_gui();

    if (DEBUG) {
      const playerX = player.body.position.x + (width / 2 - player.body.position.x);
      const playerY = player.body.position.y;
      centerCircle = circle(playerX, playerY, 10);
      label = text(`(${playerX}|${playerY})`, playerX + 20, playerY);
    }
    const l = line(0, doubleJumpThreshold, 1024, doubleJumpThreshold);

    // stop scene and go back to menu if player falls down
    if (player.body.position.y > height) {
      this.sceneManager.showScene(menu);
      player = null;
      ground = null;
      entities.length = 0;
    };
  };
  
  this.keyPressed = () => {
    var pair = [player.body, ground.body];
    player.onGround = Matter.Detector.collisions([pair], engine)[0];
    if(player.onGround){
      doubleJumpedBefore = false;
    }
    if (
      (keyIsDown(UP_ARROW) || keyIsDown(KEY_CODE_W)) &&
      player.onGround) {
      console.log('jump');
      var v = createVector(0, -0.1);
      Matter.Body.applyForce(player.body, player.body.position, v);
    } else if (
      (keyIsDown(UP_ARROW) || keyIsDown(KEY_CODE_W)) &&
      !player.onGround &&
      player.body.position.y < doubleJumpThreshold &&
      !doubleJumpedBefore) {
      doubleJumpedBefore = true;
      console.log('double jump');
      var v = createVector(0, -0.05);
      Matter.Body.applyForce(player.body, player.body.position, v);aw
    }
  };
}
