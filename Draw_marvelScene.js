

/* load images here */
function prepareInteraction() {
  hulkImage = loadImage('/images/HFacee.png');
  hulkImage3 = loadImage('/images/HC.png');
  bgImage = loadImage('/images/background.png');
  
}

let face;
let captainAmericaSHield = true;
let WondaHands = true;

function drawInteraction(faces, hands) {

image(bgImage, 0, 0, 1280, 960);

// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 

// Captain America Shield
for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

  captainAmericaSHield(hand)
  }
  //Wonda Power
for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }
  WondaHands(hand)
}
// Hulk Face
 for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }
    
  }
}







//Hulk Face
   for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
    let mouthX = face.keypoints[19].x;
    let mouthY = face.keypoints[0].y;

   
    imageMode (CENTER)
  
   image(hulkImage3, faceCenterX, faceCenterY, 600, 600);
  
   //image(hulkImage2, mouthX, mouthY, lipsWidth, lipsHeight);
   imageMode (CORNER)

   function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}
}

//Cap Shield Function
function captainAmericaSHield(hand) {
  // Find the index finger tip and thumb tip
  // let finger = hand.index_finger_tip;
  let whatGesture = detectHandGesture(hand)
    if (whatGesture == "Thumbs Up") {
      captainAmericaSHield = true;
    }
    if (whatGesture == "Open Palm") {
      captainAmericaSHield = false;
    }
 if (captainAmericaSHield){
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
  //fill(0)
  //circle(indexFingerTipX, indexFingerTipY, 20);
 }
}

//Cap Shield Star Helper
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

//wonda power Function
function WondaHands(hand) {
  let whatGesture = detectHandGesture(hand)
    if (whatGesture == "Thumbs Up") {
      WondaHands = false;
    }
    if (whatGesture == "Open Palm") {
      WondaHands = true;
    }

 if (WondaHands){
  let finger = hand.middle_finger_tip; // this finger now contains the x and y infomation! you can access it by using finger.x 
  let thumb = hand.thumb_tip;   

   // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

// This circle's size is controlled by a "pinch" gesture
  fill(64,0,0);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 260);

   fill(128,0,0);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 200);

   fill(191,0,0);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 140);

   fill(255,0,0);
  stroke(0);
  strokeWeight(0);
  circle(centerX, centerY, 80);

}


}

//Points
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(10,85,25);
    rect(element.x, element.y, 8);
  }
  pop()

}