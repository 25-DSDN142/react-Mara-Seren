// ----=  HANDS  =----
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    /*
    Start drawing on the hands here
    */

    // pinchCircle(hand)
    // fill(225, 225, 0);
    // ellipse(indexFingerTipX, indexFingerTipY, 30, 30);
captainAmericaSHield(hand)
    /*
    Stop drawing on the hands here
    */
  }
}

function captainAmericaSHield(hand) {
  // Find the index finger tip and thumb tip
  // let finger = hand.index_finger_tip;

  let finger = hand.middle_finger_tip; // this finger now contains the x and y infomation! you can access it by using finger.x 
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(135,0,0);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 260);

   fill(165,165,171);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 200);

   fill(135,0,0);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 140);

   fill(0,45,92);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 80);

//star shape
push();
translate (centerX, centerY);
//rotate (frameCount * 0.05);
fill(165,165,171);
Capstary(0, 0, 40, 16, 5);
pop();



  let indexFingerTipX = hand.index_finger_tip.x;
  let indexFingerTipY = hand.index_finger_tip.y;

  //------------------------------------------------------------
  //facePart
  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      drawPoints(face)
    }
    // console.log(face);
    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */

    /*
    Start drawing on the face here
    */

    // fill(225, 225, 0);
    // ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);

    drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    drawPoints(face.lips);
    drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow);
    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}

//helper function to draw star
function Capstary (x, y, radius1, radius2, npoints){
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape ();
  for (let a = 0; a < TWO_PI; a += angle){
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape (CLOSE);
}
function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}

let hulkX, hulkY;
let hulkWidth, hulkHeight;
//let hulkImage;
//let hulkImage2
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
  hulkImage = loadImage('/images/HFacee.png');
  hulkImage2 = loadImage('/images/HMooth.png');
  
  
}

