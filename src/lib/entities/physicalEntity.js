import Matter from 'matter-js';
import { Entity } from './enitity';

/**
 * A physical entity class.
 *
 * Everything of the games world
 * your player character can touch.
 * That includes the player character itself.
 *
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 * @param {Array|Number} vertices - exact list/number of vertices
 *
 */
export class PhysicalEntity extends Entity {
  #body;

  constructor(
    p5,
    name,
    pos,
    vertices = null,
    circle = false,
    radius = null,
    options = null,
  ) {
    super(p5, name);
    if (vertices && !circle && !radius) {
      this.#body = Matter.Bodies.fromVertices(pos.x, pos.y, vertices, options);
    } else if (vertices && !circle && radius) {
      this.#body = Matter.Bodies.polygon(
        pos.x,
        pos.y,
        vertices,
        radius,
        options,
      );
    } else if (!vertices && circle && radius) {
      this.#body = Matter.Bodies.circle(pos.x, pos.y, radius, options);
    } else {
      throw new Error('Something went wrong while creating a physical entity.');
    }
    window.jnr.physicalEntities.push(this);
  }

  getBody = () => this.#body;

  show() {
    const { angle /* position */ } = this.#body;

    this.p5.push();
    // translate(position.x, position.y);
    this.p5.rotate(angle);
    this.p5.noStroke();
    this.p5.fill(255, 0, 255);
    this.p5.beginShape();

    for (let i = 0; i < this.#body.vertices.length; i++) {
      const v = this.#body.vertices[i];
      this.p5.vertex(v.x, v.y);
    }

    this.p5.endShape();
    this.p5.pop();
  }
}
