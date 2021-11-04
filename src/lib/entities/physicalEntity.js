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
  #vertices;
  #circle;
  #radius;

  constructor(
    name,
    pos,
    vertices = null,
    circle = false,
    radius = null,
    options = null,
  ) {
    super(name);
    if (vertices && !circle && !radius) {
      this.body = Matter.Bodies.fromVertices(pos.x, pos.y, vertices, options);
    } else if (vertices && !circle && radius) {
      this.body = Matter.Bodies.polygon(
        pos.x,
        pos.y,
        vertices,
        radius,
        options,
      );
    } else if (!vertices && circle && radius) {
      this.body = Matter.Bodies.circle(
        pos.x,
        pos.y,
        radius,
        (options = options),
      );
    } else {
      throw 'Something went wrong while creating a physical entity.';
    }
    window.jnr.physicalEntities.push(this);
  }

  show() {
    const pos = this.body.position;
    const { angle } = this.body;

    push();
    // translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(255, 0, 255);
    beginShape();
    {
      for (let i = 0; i < this.body.vertices.length; i++) {
        const v = this.body.vertices[i];
        vertex(v.x, v.y);
      }
    }
    endShape();
    pop();
  }
}
