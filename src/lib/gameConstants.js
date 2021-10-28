/**
 *
 * GR (golden_ratio)
 *
 * The golden ratio is a great constant
 * to define proportions between elements,
 * because it is aesthetically pleasing.
 *
 * Multiply to make numbers bigger.
 *
 * @const {number}
 */
export const GR = 1.61803398874989484820458683436563811772030917980576286213;
/**
 *
 * GRC (golden_ratio_conjugate)
 *
 * The conjugate of the golden ratio
 * is used to make numbers smaller
 * by multiplikation
 *
 * @const {number}
 */
export const GRC = GR - 1;
/**
 * width of the p5js canvas
 * @const {number}
 */
export const CANVAS = { width: 1024, height: 768 };

/**
 * Dimensions  of the actual playing screen (with out borders/canvas/gui)
 */
export const PLAY_SCREEN = {
  width: CANVAS.width * GRC,
  height: CANVAS.height * GRC,
};

/**
 * height gap between canvas start and playing screen
 * @const {number}
 */
export const GAP_TO_PLAY_SCREEN = (CANVAS.height - PLAY_SCREEN.height) / 2;

/**
 * This is a function draws the frame and gui
 * (not the area where the action happens)
 */
export const GROUND_Y = GAP_TO_PLAY_SCREEN + PLAY_SCREEN.height * GRC;

export const DEBUG = false;

/**
 * physical gravity f.e. for player
 * @const {number}
 */
export const GRAVITY = 1;

/** Matter Aliasses
 * var Engine = Matter.Engine,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;
 */
