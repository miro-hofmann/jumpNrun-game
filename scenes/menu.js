function menu() {
  var tempFrameCount;

  let chamber_root = 6;
  let distX = width / chamber_root;
  let distY = height / chamber_root;

  this.loadChamber = function (num) {
    switch (num) {
      case 1:
        this.sceneManager.showScene(testChamber1_JUMP);
        break;
      case 2:
        this.sceneManager.showScene( testChamber2_DOUBLE_JUMP );
        break;
      case 3:
        this.sceneManager.showScene(testChamber3_BOX);
        break;
      case 4:
        this.sceneManager.showScene(testChamber4);
        break;
      case 5:
        this.sceneManager.showScene(testChamber5);
        break;
      case 6:
        this.sceneManager.showScene(testChamber6);
        break;
      case 7:
        this.sceneManager.showScene(testChamber7);
        break;
      case 8:
        this.sceneManager.showScene(testChamber8);
        break;
      case 9:
        this.sceneManager.showScene(testChamber9);
        break;
      case 10:
        this.sceneManager.showScene(testChamber10);
        break;
      case 11:
        this.sceneManager.showScene(testChamber11);
        break;
      case 12:
        this.sceneManager.showScene(testChamber12);
        break;
      case 13:
        this.sceneManager.showScene(testChamber13);
        break;
      case 14:
        this.sceneManager.showScene(testChamber14);
        break;
      case 15:
        this.sceneManager.showScene(testChamber15);
        break;
      case 16:
        this.sceneManager.showScene(testChamber15);
        break;

      default:
        break;
    }
  };

  this.setup = function () {
    background(150);
    tempFrameCount = frameCount;
  };
  this.draw = function () {
    background(255);
    textSize(height * pow(GRC, 7));
    textAlign('center', 'center');
    fill(255 - 255 * ((frameCount - tempFrameCount) / 100));
    text(
      'Hello ' + playerName + ',',
      width / 2,
      height * pow(GRC, 8) + height * pow(GRC, 8),
    );
    text(
      'please choose a test chamber.',
      width / 2,
      height * pow(GRC, 8) + height * pow(GRC, 6.5) + height * pow(GRC, 8),
    );
    text(
      '(by clicking it)',
      width / 2,
      height * pow(GRC, 8) +
        height * pow(GRC, 6.5) +
        height * pow(GRC, 8) +
        height * pow(GRC, 6.5),
    );

    stroke(255);
    strokeWeight(height * pow(GRC, 9));
    for (let x = 1; x < chamber_root - 1; x++) {
      for (let y = 1; y < chamber_root - 1; y++) {
        if (
          mouseX > x * distX &&
          mouseX < x * distX + distX &&
          mouseY > y * distY &&
          mouseY < y * distY + distY
        ) {
          fill(100);
        } else {
          fill(0);
        }
        rect(x * distX, y * distY, distX, distY);
        textAlign('center', 'center');
      }
    }
    noStroke();
    fill(255);
    textSize(height * pow(GRC, 6));
    text('1', (3 * distX) / 2, (3 * distY) / 2);
    textSize(height * pow(GRC, 8));
    text('JUMP', (3 * distX) / 2, (3 * distY) / 2 + height * pow(GRC, 6));

    textSize(height * pow(GRC, 6));
    text('2', (5 * distX) / 2, (3 * distY) / 2);
    textSize(height * pow(GRC, 8));
    text(
      'DOUBLE JUMP',
      (5 * distX) / 2,
      (3 * distY) / 2 + height * pow(GRC, 6),
    );

    textSize(height * pow(GRC, 6));
    text('3', (7 * distX) / 2, (3 * distY) / 2);
    textSize(height * pow(GRC, 8));
    text('BOX', (7 * distX) / 2, (3 * distY) / 2 + height * pow(GRC, 6));

    for (let x = 1; x < chamber_root - 1; x++) {
      for (let y = 1; y < chamber_root - 1; y++) {
        if (
          mouseX > x * distX &&
          mouseX < x * distX + distX &&
          mouseY > y * distY &&
          mouseY < y * distY + distY
        ) {
          fill(100);
        } else {
          fill(0);
        }
      }
    }
  };

  this.mousePressed = function () {
    let chamber;
    for (let x = 1; x < chamber_root - 1; x++) {
      for (let y = 1; y < chamber_root - 1; y++) {
        if (
          mouseX > x * distX &&
          mouseX < x * distX + distX &&
          mouseY > y * distY &&
          mouseY < y * distY + distY
        ) {
          chamber = (chamber_root - 2) * (y - 1) + x;
        } else {
          fill(0);
        }
      }
    }
    this.loadChamber(chamber);
  };
}
