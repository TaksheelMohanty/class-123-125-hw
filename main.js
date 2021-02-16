userinput = document.getElementById("user_input").value;
leftWristX = 0;
rightWristX = 0;
difference = 0;
user_text = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(660, 250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(results){
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX)
    user_text = document.getElementById("user_input").value;

    console.log("x of left wrist = " + leftWristX + "x of right wrist = " + rightWristX + "difference = " + difference);
}

function draw(){
    background('#969A79');
    textSize(difference);
    text(user_text, 50, 400);
    fill('#F90093');

}