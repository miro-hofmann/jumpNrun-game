import { GRC, GROUND_Y, PLAY_SCREEN } from '../gameConstants';
import { colors } from '../uiConstants';
import { PhysicalEntity } from './physicalEntity';

/**
 * A class a ground block.
 *
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 *
 */
export class Ground extends PhysicalEntity {
  #color;

  constructor(p5, name, pos, width, height, color = colors.Brown) {
    const vertexPoints = [
      { x: width / 2, y: height / 2 },
      { x: width / 2, y: -height / 2 },
      { x: -width / 2, y: -height / 2 },
      { x: -width / 2, y: height / 2 },
    ];
    super(p5, name, pos, vertexPoints, false, null, { static: true });
    this.color = color;
  }

  show() {
    const { position, angle } = this.getBody().position;

    this.p5.push();
    this.p5.translate(position.x, position.y);
    this.p5.rotate(angle);
    this.p5.noStroke();
    this.p5.fill(this.#color);
    this.p5.beginShape();

    for (let i = 0; i < this.getBody().vertices.length; i++) {
      const v = this.body.vertices[i];
      this.p5.vertex(v.x - position.x, v.y - position.y);
    }

    this.p5.endShape();
    this.p5.pop();
  }

  static initGround = (p5) => {
    const position = p5.createVector(PLAY_SCREEN.width / 2, GROUND_Y + 100);
    return new Ground(p5, 'ground', position, PLAY_SCREEN.width * GRC, 250);
  };
}
