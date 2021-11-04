import Matter from 'matter-js';
import { GRC, PLAY_SCREEN } from '../gameConstants';
import { PhysicalEntity } from './physicalEntity';
import { colors } from '../uiConstants';
/**
 * A class for the player character.
 *
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 *
 */
export class Player extends PhysicalEntity {
  #color;

  #vertexPoints = [
    Matter.Vector.create(
      PLAY_SCREEN.height * GRC ** 5 * 0.5,
      PLAY_SCREEN.height * GRC ** 4 * 0.5,
    ),
    Matter.Vector.create(
      PLAY_SCREEN.height * GRC ** 5 * 0.5,
      -PLAY_SCREEN.height * GRC ** 4 * 0.5,
    ),
    Matter.Vector.create(
      -PLAY_SCREEN.height * GRC ** 5 * 0.5,
      -PLAY_SCREEN.height * GRC ** 4 * 0.5,
    ),
    Matter.Vector.create(
      -PLAY_SCREEN.height * GRC ** 5 * 0.5,
      PLAY_SCREEN.height * GRC ** 4 * 0.5,
    ),
  ];

  constructor(p5, name, position, color = colors.Grey) {
    super(p5, name, position);
    this.#color = color;
  }

  show() {
    const { angle, position } = this.getBody();

    this.p5.push();
    this.p5.translate(position.x, position.y);
    this.p5.rotate(angle);
    this.p5.noStroke();
    this.p5.fill(this.#color);
    this.p5.beginShape();

    for (let i = 0; i < this.getBody().vertices.length; i++) {
      const v = this.getBody().vertices[i];
      this.p5.vertex(v.x - position.x, v.y - position.y);
    }

    this.p5.endShape();
    this.p5.pop();
  }

  static initPlayer(name, p5) {
    const position = p5.createVector(300, 150);
    const height = PLAY_SCREEN.height * GRC ** 4;
    const width = height * GRC;
    const player = new Player(
      p5,
      name || 'test subject',
      position,
      width,
      height,
    );

    return player;
  }
}
