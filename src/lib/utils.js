import { CANVAS, GAP_TO_PLAY_SCREEN, PLAY_SCREEN } from './constants';

export const drawFrameGui = (p5) => {
  // black ...
  p5.fill(0);
  // ... rectangles at top and botton that make a frame
  //     -> action area is widescreen
  p5.rect(0, 0, CANVAS.height, GAP_TO_PLAY_SCREEN);
  p5.rect(
    0,
    GAP_TO_PLAY_SCREEN + PLAY_SCREEN.height,
    CANVAS.width,
    GAP_TO_PLAY_SCREEN,
  );
};
