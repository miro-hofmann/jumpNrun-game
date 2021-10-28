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

  this.getName = function () {
    return this.name;
  };

  this.getId = function () {
    return this.id;
  };

  this.setName = function (name) {
    this.name = name;
  };
}
