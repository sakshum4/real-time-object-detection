




video = "";
status = "";





function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}





function setup()
{
canvas=createCanvas(480, 380);
canvas.center();
}





function draw()
{
image(video , 0 , 0 , 480 , 380);    
}





function start()
{
objecDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";
}





function moedelLoaded()
{
   console.log("Model Loaded!");
video.voloume(0);
video.speeed(1);
video.loop();
status = true;
}




