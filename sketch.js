// Face Mesh with mediapipe
// https://google.github.io/mediapipe/solutions/face_mesh#javascript-solution-api

//seekandhide 2023 drawingowntheirmask 

let distance;
let ellipsewidth = 10;



// Display text in a single column
let lineHeightPercentage = 5; // Adjust the line height as needed, in percentage
let xPercentage = 10;
let yPercentage = 2;

function setup () {
  background(220);
  fill(0);
 // noFill();
  noStroke();  
  createCanvas(650, 500);
  video = createCapture(VIDEO);
  video.size(800, 400);    // Increase video width to 800
  video.hide();

}

function draw () {
 //background(0);// 배경색
 //image(video, 400, 400);
  //ellipse(mouseX,mouseY, 17);
  let textContent = "Space bar=stop drawing\nPress Ctrl+R to refresh the page\nw=white\nm=red\ng=Green\nc=blue\ny=yellow\np=pink\no=orange\n";
  // Split the text into lines and paragraphs
  let lines = textContent.split('\n');
  
//let textContent = "w=white\nm=red\ng=Green\nc=blue\ny=yellow\np=pink\no=orange\nSpace bar=stop drawing\nPress Ctrl+R to refresh the page\n";
 // Split the text into lines and paragraphs


 // Display text in a single column
 let lineHeight = 20; // Adjust the line height as neede 간격
 let x = 1;
 let y = 100;

 for (let line of lines) {
   text(line, x, y);
   y += lineHeight;
 }
//  for (let line of lines) {
//   let lineHeight = (height * lineHeightPercentage) / 10;
//   let x = (width * xPercentage) / 100;
//   let y = (height * yPercentage) / 10;

//   text(line, x, y);
//   y += lineHeight;
// }
}

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
    p.strokeWeight(2);
    //p.stroke(150, 105, 105);//살색
    p.stroke(255, 255, 255);//살색
    
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
          keyPressed();
        }
       else{
        noFill(255);
       }

      }
    }
  }

  function keyPressed() {

    if (key === 'w' || key === 'W') {
      // Change the line color to red
      //lineColor = color(255, 0, 0);
      fill(255, 255, 255);
      ellipse(mouseX,mouseY, 15);
    }
    
    if (key === 'm' || key === 'M') {
      // Change the line color to red
      //lineColor = color(255, 0, 0);
      fill(255, 0, 0);
      ellipse(mouseX,mouseY, 15);
    }
    if (key === 'g' || key === 'G') {
      // Change the line color to red
     // lineColor = color(0, 2l55, 0);
      fill(0, 255, 0);
      ellipse(mouseX,mouseY, 15);
    }
    if (key === 'c' || key === 'C') {
      // Change the line color to red
      //lineColor = color(0, 0, 255);
      fill(0, 0, 255);
      ellipse(mouseX,mouseY, 15);
    }
    if (key === 'y' || key === 'Y') {
      // Change the line color to red
      //lineColor = color(255,255, 0);
      fill(255,255,0);
      ellipse(mouseX,mouseY, 15);
    }
    if (key === 'o' || key === 'O') {
      // Change the line color to red
      //lineColor = color(255,200, 0);
      fill(255,200, 0);
      ellipse(mouseX,mouseY, 15);
    }
    if (key === 'p' || key === 'P') {
      // Change the line color to red
      //lineColor = color(255,0,210);
      fill(255,0,210);
      ellipse(mouseX,mouseY, 15);
    }
    if (key === 'b' || key === 'B') {
      // Change the line color to red
      //lineColor = color(255,0,210);
      fill(0,0,0);
      ellipse(mouseX,mouseY, 15);
    }
    // if (key === 'l' || key === 'L') {
    //   // Change the line color to red
    //   lineColor = color(255,0,210);
    //   //fill(255,0,210);
    // }
    // if (key === (keyIsDown(SPACE))) {
    //   // Change the line color to red
    //   lineColor = color(255,0,210);
    //   //fill(255,0,210);
    // }
  }
}

let myp5 = new p5(sketch)