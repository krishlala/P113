function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 250, 220, 200);

    fill(255, 0, 0);
    stroke(255,0,0);
    circle(50, 50, 80);
    circle(589, 50, 80);
    circle(50, 460, 80);
    circle(589, 460, 80);



    fill(0, 128, 0);
    stroke(0,128,0);
    rect(90, 40, 460, 20);

    rect(90, 40, 460, 20);
    rect(90, 40, 20, 420);
    rect(90, 450, 460, 20);
    rect(530, 40, 20, 420);

}

function take_snapshot() {
    save("myimage.png");
}