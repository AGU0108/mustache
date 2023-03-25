var noseX = 0;
var noseY = 0;
var filter;

function preload(){
filter = loadImage("mustache.png");
}

function setup(){
    var canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(600,600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 600);
    image(filter, noseX, noseY, 260, 150)
    
}

function selfimage(){
    save("Me&MyMustache.png");

}
function modelLoaded(){
    console.log("Model Loaded succes");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x - 125;
        noseY = results[0].pose.nose.y - 30;

    }
}
