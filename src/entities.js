/**  matter.js module aliases */
var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;
/**
  * list of all the entities
  * @const {Array}
  */
var entities = [];
/** 
 * An entity class.
 * 
 * Anything in this games world is an entity.
 * Game engines use simmilar concepts.
 * For example: 
 * The open-source game engine Godot (https://godotengine.org/)
 * uses the name "Node" for this concept.
 * 
 * @param {string} name - The name of this entity.
 * 
 */
function Entity(name) {
  this.name = name;
  this.id = entities.length + 1;

  entities.push(this);

  this.getName = function() {
    return this.name;
  }

  this.getId = function() {
    return this.id;
  }

  this.setName = function(name) {
    this.name = name;
  }

}
/**
  * list of all the physical entities
  * @const {Array}
  */
 var physicalEntities = [];
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
 function PhysicalEntity(name, pos, vertices=null, circle=false, radius=null, options=null) {
  Entity.call(this, name);

  this.body;
  if (vertices && !circle && !radius){
    this.body = Matter.Bodies.fromVertices(pos.x, pos.y, vertices, options=options);
  } else if (vertices && !circle && radius) {
    this.body = Matter.Bodies.polygon(pos.x, pos.y, vertices, radius, options=options)
  } else if (!vertices && circle && radius) {
    this.body = Matter.Bodies.circle(pos.x, pos.y, radius, options=options)
  } else {
    throw 'Something went wrong while creating a physical entity.';
  }

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    //translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(255, 0, 255);
    beginShape();
    {
      for (var i = 0; i < this.body.vertices.length; i++){
        var v = this.body.vertices[i];
        vertex(v.x, v.y);
      } 
    }
    endShape();
    pop();
  }

  physicalEntities.push(this);
}
/**
 * Add all the physical entities to the matter.js world.
 */
function addPhysicalEntitiesToWorld(world){
  for(var i = 0; i < physicalEntities.length; i++) {
    Composite.add(world, physicalEntities[i].body);
  }
} 
/**
 * Draws all the physical entities on the p5.js canvas.
 */
function showPhysicalEntities(){
  for(var i = 0; i < physicalEntities.length; i++) {
    physicalEntities[i].show();
  }
} 
/** 
 * A class for the player character.
 * 
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 * 
 */
 function Player(name, pos) {
   var vertexPoints = [
     Matter.Vector.create(play_screen_height * pow(GRC, 5) * 0.5, play_screen_height * pow(GRC, 4) * 0.5),
     Matter.Vector.create(play_screen_height * pow(GRC, 5) * 0.5, -play_screen_height * pow(GRC, 4) * 0.5),
     Matter.Vector.create(-play_screen_height * pow(GRC, 5) * 0.5, -play_screen_height * pow(GRC, 4) * 0.5),
     Matter.Vector.create(-play_screen_height * pow(GRC, 5) * 0.5, play_screen_height * pow(GRC, 4) * 0.5) 
    ]
  PhysicalEntity.call(this, name, pos, vertexPoints);

  this.color = colors.Grey;

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    beginShape();
    {
      for (var i = 0; i < this.body.vertices.length; i++){
        var v = this.body.vertices[i];
        vertex(v.x-pos.x, v.y-pos.y);
      } 
    }
    endShape();

    pop();
  }
}
/**
* the character you play
* @const {number}
*/
var player;

function init_player(name) {
  if(!player){
    var position = createVector(300, 150);
    player = new Player("test subject", position)
    player.height = play_screen_height * pow(GRC, 4);
    player.width = player.height * GRC;
    //player.addToGroup(entities);
    //player.friction = 0.03;
  }
}
/**
  * what you walk on
  * @todo should be a group
  * @const {number}
  */
  var ground;
/** 
 * A class a ground block.
 * 
 * @param {string} name - The name of this entity.
 * @param {Vector} pos - {@link Vector} : center of the physical entity on the canvas
 * 
 */
 function Ground(name, pos, width, height) {
  this.options = {
    //friction: 0,
    //restitution: 0.6,
    //angle: a,
    isStatic: true,
  };
  var vertexPoints = [
    { x:  width/2, y:  height/2 },
    { x:  width/2, y: -height/2 },
    { x: -width/2, y: -height/2 },
    { x: -width/2, y:  height/2 }
   ];
 PhysicalEntity.call(this, name, pos, vertexPoints, false, null, this.options);

 this.color = colors.Brown;

 this.show = function() {
   var pos = this.body.position;
   var angle = this.body.angle;
    
   push();
   translate(pos.x, pos.y);
   rotate(angle);
   noStroke();
   fill(this.color);
   beginShape();
   {
     for (var i = 0; i < this.body.vertices.length; i++){
       var v = this.body.vertices[i];
       vertex(v.x-this.body.position.x, v.y-this.body.position.y);
     } 
   }
   endShape();
   pop();
 }
}

function init_ground() {
  if(!ground){
    var position = createVector(width / 2, groundy+100);
    ground = new Ground("ground", position, screen_width * GRC, 250);
    //ground.width = screen_width * GRC;
    //ground.height = 50;
    //ground.immovable = true;
  }
}

/**
 * physical gravity f.e. for player
 * @const {number}
 */
 const gravity = 1;
 
 var playerName;
 
 /**
  * what you walk on
  * @todo should be a group
  * @const {number}
  */
 var ground;
 