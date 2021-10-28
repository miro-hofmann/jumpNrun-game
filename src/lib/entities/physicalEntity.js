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
function PhysicalEntity(
  name,
  pos,
  vertices = null,
  circle = false,
  radius = null,
  options = null,
) {
  Entity.call(this, name);

  this.body;
  if (vertices && !circle && !radius) {
    this.body = Matter.Bodies.fromVertices(
      pos.x,
      pos.y,
      vertices,
      (options = options),
    );
  } else if (vertices && !circle && radius) {
    this.body = Matter.Bodies.polygon(
      pos.x,
      pos.y,
      vertices,
      radius,
      (options = options),
    );
  } else if (!vertices && circle && radius) {
    this.body = Matter.Bodies.circle(pos.x, pos.y, radius, (options = options));
  } else {
    throw 'Something went wrong while creating a physical entity.';
  }

  this.show = function () {
    const pos = this.body.position;
    const {angle} = this.body;

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
  };

  physicalEntities.push(this);
}
