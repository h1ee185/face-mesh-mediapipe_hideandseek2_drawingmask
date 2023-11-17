// Face Mesh with mediapipe
// https://google.github.io/mediapipe/solutions/face_mesh#javascript-solution-api


let distance;

let ellipsewidth = 10;

function setup () {
  createCanvas(650, 500);

  // canvas.id("canvas");

  // video = createCapture(VIDEO);
  // video.id("video");
  // video.size(width, height);


}

function draw () {
 //background(0);// 배경색
  ellipse(mouseX,mouseY, 30);
 // circle2 = ellipse(mouseX,ellipsewidth, mouseY);
 // fill(20, random(0,255),random(0,255));


//let distance = dist(mouseX, mouseY, circle2.x, circle2.y);
//let distance2 = dist(circle2.x, circle2.y,  p.drawFaceMeshes.x,  p.drawFaceMeshes.y);//???
}

// if (distance < 100){
//   textreading();
//   fill(255);
//   ellipse(mouseX,mouseY,30);
//  }
// //
let sketch = function (p) {

  p.setup = function () {
    p.createCanvas(cam_w, cam_h);
    p.rectMode(p.CENTER);
  }

  p.draw = function () {
    
    // p.background(255);

    if (detections != undefined) {
      if (detections.multiFaceLandmarks != undefined) {
        p.clear();
        p.drawFaceMeshes();
        //console.log(detections);
     //   drawcircle();
      }
    }
  }
  
//   drawcircle() {
//  //  circle2 = ellipse(mouseX,ellipsewidth, mouseY);
//   }

  p.drawFaceMeshes = function () {
    p.strokeWeight(3);
    p.stroke(255, 255, 255);
    
    // anything that requires knowing face landmark data needs to happen inside of this nested for-loop
    for (let i = 0; i < detections.multiFaceLandmarks.length; i++) {
      for (let j = 0; j < detections.multiFaceLandmarks[i].length; j++) {

        const currentFace = detections.multiFaceLandmarks[i];
        const x = p.width - currentFace[j].x * p.width;
        const y = currentFace[j].y * p.height;

        p.point(x, y);
        
        const NOSE = 1;

        const noseX = p.width - currentFace[NOSE].x * p.width;
        const noseY = currentFace[NOSE].y * p.height;

        const noseToMouseDist = dist(mouseX,mouseY,noseX,noseY);
        console.log(noseToMouseDist);

        if(noseToMouseDist < 100)
        {
          fill(150);
        }
       else{
        fill(255);
       }

      }
    }
  }
}

let myp5 = new p5(sketch)