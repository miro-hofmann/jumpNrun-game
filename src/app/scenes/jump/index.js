import Matter from 'matter-js';
import React from 'react';
import Sketch from 'react-p5';
import { DEBUG } from '../../../lib/constants';
import { drawFrameGui } from '../../../lib/utils';
export const JumpSketch = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255, 130, 20);
    p5.ellipse(100, 100, 100);
    p5.ellipse(300, 100, 100);
  };

  return <Sketch setup={setup} draw={draw} />;
};
// export const JumpSketch = () => {
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(500, 400).parent(canvasParentRef);
//   };

//   const draw = (p5) => {
//     p5.background(255); //white background
//     Matter.Body.setAngle(player.body, 0);
//     p5.Engine.update(engine);

//     // so you don't slide over the floor

//     // control of the player character
//     if (p5.keyIsDown(LEFT_ARROW) || p5.keyIsDown(KEY_CODE_A)) {
//       Matter.Body.setPosition(
//         player.body,
//         createVector(player.body.position.x - 5, player.body.position.y),
//       );
//     }
//     if (p5.keyIsDown(RIGHT_ARROW) || p5.keyIsDown(KEY_CODE_D)) {
//       Matter.Body.setPosition(
//         player.body,
//         createVector(player.body.position.x + 5, player.body.position.y),
//       );
//     }

//     p5.push();
//     {
//       p5.translate(width / 2 - player.body.position.x, 0, 0);
//       p5.showPhysicalEntities();
//     }
//     p5.pop();
//     drawFrameGui(p5);

//     if (DEBUG) {
//       //   const playerX =
//       //     player.body.position.x + (width / 2 - player.body.position.x);
//       //   const playerY = round(player.body.position.y, 2);
//       //   centerCircle = circle(playerX, playerY, 10);
//       //   var xLabelText = round(playerX - (width / 2 - player.body.position.x), 2);
//       //   label = text(`(${xLabelText}|${playerY})`, playerX + 20, playerY);
//     }

//     // stop scene and go back to menu if player falls down
//     if (player.body.position.y > height) {
//       this.sceneManager.showScene(menu);
//       player = null;
//       ground = null;
//       entities.length = 0;
//     }
//   };

//   return <Sketch setup={setup} draw={draw} />;
// };
