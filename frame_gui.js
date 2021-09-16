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
const GR = 1.61803398874989484820458683436563811772030917980576286213;
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
const GRC = GR - 1;
/**
 * width of the p5js canvas
 * @const {number}
 */
const screen_width = 1024;
/**
 * height of the p5js canvas
 * @const {number}
 */
const screen_height = 768;
/**
 * height of the actual playing screen (with out borders/canvas/gui)
 * @const {number}
 */
const play_screen_height = screen_height * GRC;
/**
 * height gap between canvas start and playing screen
 * @const {number}
 */
const gap_to_play_screen = (screen_height - play_screen_height) / 2;
 /**
  * This is a function draws the frame and gui
  * (not the area where the action happens)
  */
 //
 function draw_frame_gui(){
    // black ...
    fill(0);
    // ... rectangles at top and botton that make a frame
    //     -> action area is widescreen
    rect(0, 0, screen_width, gap_to_play_screen);
    rect(0, gap_to_play_screen + play_screen_height, 
         screen_width, gap_to_play_screen);
  }