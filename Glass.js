Status = "";
Glass_image = "";
object = [];

function preload(){
    Glass_image = loadImage("Glass.jpg");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}
function modelLoaded(){
    console.log("ModelLoaded!");
    Status = true;
    object_detector.detect(Glass_image, gotResult);
}
function gotResult(results, error){
    if(error){
        console.error(error);
    }
    console.log(results);
    object = results;
}
function draw(){
    image(Glass_image,0,0,640,350);
    if(Status != ""){
        for(i = 0; i < object.length; i++)
        {
            
            document.getElementById("status").innerHTML = "Status : Detected Objects";
            
            fill("#fc0303");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("#fc0303");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
    
