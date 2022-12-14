noseX=0;
noseY=0;

function preload() {
  clownose = loadImage('https://i.postimg.cc/R07k11yB/bigode.png'); 
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  posenet = ml5.poseNet(video, modelLoaded);
  posenet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('O poseNet foi inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-15;
    noseY = results[0].pose.nose.y;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownose, noseX, noseY, 30, 30)
}

function takeSnapshot(){    
  save('projeto.png');
}
