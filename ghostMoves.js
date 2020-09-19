import { DIRECTION, OBJECT_TYPE, DIRECTIONS } from './setup';

// Primitive random movement
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;

  // Create a array from the directions object keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    // Get random key from the key array
    const key = keys[Math.floor(Math.random() * keys.length)];
    // Set the next move
    dir = DIRECTIONS[key];
    // Set next move
    nextMovePos = position + dir.movement;
  }

  return { nextMovePos, direction: dir }
}