/**
 * A class for the player character.
 *
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 *
 */
function Player(name, pos) {
  const vertexPoints = [
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
  PhysicalEntity.call(this, name, pos, vertexPoints);

  this.color = colors.Grey;

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
        vertex(v.x - pos.x, v.y - pos.y);
      }
    }
    endShape();

    pop();
  };

  function init_player(name) {
    if (!player) {
      const position = createVector(300, 150);
      player = new Player('test subject', position);
      player.height = play_screen_height * pow(GRC, 4);
      player.width = player.height * GRC;
      // player.addToGroup(entities);
      // player.friction = 0.03;
    }
  }
}
