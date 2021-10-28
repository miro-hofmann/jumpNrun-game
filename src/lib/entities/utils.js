/**
 * Add all the physical entities to the matter.js world.
 */
function addPhysicalEntitiesToWorld(world) {
  for (let i = 0; i < physicalEntities.length; i++) {
    Composite.add(world, physicalEntities[i].body);
  }
}
/**
 * Draws all the physical entities on the p5.js canvas.
 */
function showPhysicalEntities() {
  for (let i = 0; i < physicalEntities.length; i++) {
    physicalEntities[i].show();
  }
}
