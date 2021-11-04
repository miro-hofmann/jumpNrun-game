import React, { useEffect, useRef } from 'react';
import Sketch from 'react-p5';
import Matter from 'matter-js';

export const JumpSketch = () => {
  const player = useRef(null);
  const engine = useRef(null);

  useEffect(() => {
    player.current = {};
    engine.current = Matter.Engine;
  }, []);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255); // white background
    Matter.Body.setAngle(player.body, 0);
    p5.Engine.update(engine.current);

    p5.push();
    
      p5.translate(width / 2 - player.body.position.x, 0, 0);
      p5.showPhysicalEntities();
    
    p5.pop();
    if (player.current.body.position.y > height) {
      this.sceneManager.showScene(menu);
      player = null;
      ground = null;
      entities.length = 0;
    }
    drawFrameGui(p5);
  };

  const onKeyPressed = (keyCode) => {
    if (keyCode === p5.KEY.LEFT || keyCode === p5.KEY.A) {
      Matter.Body.setPosition(
        player.current.body,
        p5.createVector(
          player.current.body.position.x - 5,
          player.current.body.position.y,
        ),
      );
    }
    if (keyCode === p5.KEY.RIGHT || keyCode === p5.KEY.D) {
      Matter.Body.setPosition(
        player.current.body,
        p5.createVector(
          player.current.body.position.x + 5,
          player.current.body.position.y,
        ),
      );
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={onKeyPressed} />;
};

//     if (DEBUG) {
//       //   const playerX =
//       //     player.body.position.x + (width / 2 - player.body.position.x);
//       //   const playerY = round(player.body.position.y, 2);
//       //   centerCircle = circle(playerX, playerY, 10);
//       //   var xLabelText = round(playerX - (width / 2 - player.body.position.x), 2);
//       //   label = text(`(${xLabelText}|${playerY})`, playerX + 20, playerY);
//     }
