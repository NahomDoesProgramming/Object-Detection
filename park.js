img = "";
stats = "";
objects = [];
function preload()
{
    img = loadImage("park.jpeg");
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
function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;

}
function draw()
{
    image(img, 0, 0, 620, 340);
    if(stats != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHtml = "Status: Objects Detected!";
            fill("orange");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();``
            stroke("orange");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}