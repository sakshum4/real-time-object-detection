




objects = [];
video = "";
status = "";





function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}





function setup()
{
canvas=createCanvas(600, 400);
canvas.center();
}





function draw()
{
image(video , 0 , 0 , 480 , 380);    
if(status !="")
{
    objectDetector.detect(video, gotResult);
for ( i = 0; i < objects.lenght; i++)
{
    document.getElementById("status").innerHTML = "status : Object Detected";
    document.getElementById("number_of_objects").innerHTML = "number of objects detected are : "+ objects.lenght;
    fill("#FF0000");
    percent = floor(objects[i].confindence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}





function start()
{
objecDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";
}





function modelLoaded()
{
   console.log("Model Loaded!");
video.voloume(0);
video.speeed(1);
video.loop();
status = true;
}





function gotResult(error, results)
{
    if (error) 
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}