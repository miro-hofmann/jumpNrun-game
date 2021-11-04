import Matter from 'matter-js';
import { GRC, PLAY_SCREEN } from '../gameConstants';
import { PhysicalEntity } from './physicalEntity';
/**
 * A class for the player character.
 *
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 *
 */
class Player extends PhysicalEntity {
  #vertexPoints = [
    Matter.Vector.create(
      play_screen_height * pow(GRC, 5) * 0.5,
      play_screen_height * pow(GRC, 4) * 0.5,
    ),
    Matter.Vector.create(
      play_screen_height * pow(GRC, 5) * 0.5,
      -play_screen_height * pow(GRC, 4) * 0.5,
    ),
    Matter.Vector.create(
      -play_screen_height * pow(GRC, 5) * 0.5,
      -play_screen_height * pow(GRC, 4) * 0.5,
    ),
    Matter.Vector.create(
      -play_screen_height * pow(GRC, 5) * 0.5,
      play_screen_height * pow(GRC, 4) * 0.5,
    ),
  ];
  #color;
  constructor(name, position, color = colors.Grey) {
    super(name, position);
    this.#color = color;
  }

  show() {
    const pos = this.body.position;
    const { angle } = this.body;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    beginShape();
    {
      for (let i = 0; i < this.body.vertices.length; i++) {
        const v = this.body.vertices[i];
        vertex(v.x - pos.x, v.y - pos.y);
      }
    }
    endShape();
    pop();
  }

  static initPlayer(name, p5) {
    const position = p5.createVector(300, 150);
    const height = PLAY_SCREEN.height * pow(GRC, 4);
    const width = height * GRC;
    const player = new Player(name || 'test subject', position, width, height);

    return player;
  }
}
