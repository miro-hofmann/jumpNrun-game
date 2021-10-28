/**
 * A class a ground block.
 *
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 *
 */
function Ground(name, pos, width, height) {
  this.options = {
    // friction: 0,
    // restitution: 0.6,
    // angle: a,
    isStatic: true,
  };
  const vertexPoints = [
    { x: width / 2, y: height / 2 },
    { x: width / 2, y: -height / 2 },
    { x: -width / 2, y: -height / 2 },
    { x: -width / 2, y: height / 2 },
  ];
  PhysicalEntity.call(this, name, pos, vertexPoints, false, null, this.options);

  this.color = colors.Brown;

  this.show = function () {
    const pos = this.body.position;
    const {angle} = this.body;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    beginShape();
    {
      for (let i = 0; i < this.body.vertices.length; i++) {
        const v = this.body.vertices[i];
        vertex(v.x - this.body.position.x, v.y - this.body.position.y);
      }
    }
    endShape();
    pop();
  };

  function init_ground() {
    if (!ground) {
      const position = createVector(width / 2, groundy + 100);
      ground = new Ground('ground', position, screen_width * GRC, 250);
      // ground.width = screen_width * GRC;
      // ground.height = 50;
      // ground.immovable = true;
    }
  }
}
