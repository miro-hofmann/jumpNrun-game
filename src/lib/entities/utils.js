import Matter from 'matter-js';

/**
 * Add all the physical entities to the matter.js world.
 */
export const addPhysicalEntitiesToWorld = (world) => {
  for (let i = 0; i < window.jnr.physicalEntities.length; i++) {
    Matter.Composite.add(world, window.jnr.physicalEntities[i].body);
  }
};
/**
 * Draws all the physical entities on the p5.js canvas.
 */
export const showPhysicalEntities = () => {
  for (let i = 0; i < window.jnr.physicalEntities.length; i++) {
    window.jnr.physicalEntities[i].show();
  }
};
