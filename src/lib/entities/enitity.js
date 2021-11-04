import { v1 as uuidv1 } from 'uuid';
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
export class Entity {
  #name;

  #id;

  #p5;

  constructor(p5, name) {
    this.p5 = p5;
    this.this.name = name;
    this.id = uuidv1();
    window.jnr.entities.push(this);
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  setName(name) {
    this.name = name;
  }
}
