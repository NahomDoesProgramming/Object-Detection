img = "";
stats = "";
function preload()
{
    img = loadImage("fruit.png");
}
function setup()
{
    canvas = createCanvas(620, 340);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded()
{
    console.log("The model has successfully loaded!");
    stats = true;
    objectDetector.detect(img, gotResult);
}
function gotResult()
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}