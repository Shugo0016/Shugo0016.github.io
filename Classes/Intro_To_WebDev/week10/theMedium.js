

let button;
let hideText = false;
let something = false;
let a, b, r;
let change_background = false;
// let circleX, CircleY, circleX1, CircleY1; 
let circles = [];

// Code that is done once when the page is first launched 
function setup() {
    let p1 = 70;
    let p2 = 80;
    let p3 = 1300;

    createCanvas(1600, 1600);
    textSize(32);
    fill(170, 51, 106);
    text('Press Me!!!', 800, 750);

    // circleX = width/2;
    // circleY = height;

    while(circles.length < 100) {
        let circle = {
            a: random(width),
            b: random(height),
            r: 32
        };

        let overlapping = false;
        for (let j = 0; j < circles.length; j++) {
            let other = circles[j];
            let d = dist(circle.a, circle.b, other.a, other.b);
            if (d < circle.r + other.r) {
                overlapping = true;
                break;
            }
        }
        if(!overlapping) {
            circles.push(circle);
        }
    }

    for (i = 0; i < circles.length; i++) {
        fill(255, 0, 150, 100);
        noStroke();
        ellipse(circles[i].a, circles[i].b, circles[i].r * 2, circles[i].r * 2);
    }

    button = createButton('Stay Away From Me');
    button.center();
    button.mouseOver(overButton);
    button.mouseOut(outButton);
    
}

// Code that is repeated as website is running 
function draw() {
    button.mousePressed(playAnimation);
    if(change_background) {
        background(0);
    }
    if(something) { 
        drawHello();
    }   
  }

// Checks if mouse is over button
function overButton() {
    button.html("You Better Not Press Me...");
}

// Checks if mouse is off button
function outButton() {
    button.html("That's Right You Better Run...");
}

// Checks if button was pressed and plays animation
function playAnimation() {
    let val = random(255);
    // background(val);
    button.hide();
    hideText = true;
    change_background = true;
    something = true;
}

// Draws the message Hello World on screen
function drawHello() {
    stroke(255);

    // Letter H
    line(75, 500, 75, 200);
    line(300, 350, 75, 350);
    line(300, 500, 300, 200);

    // Letter E
    line(400, 200, 650, 200);
    line(400, 200, 400, 500);
    line(400, 350, 650, 350);
    line(400, 500, 650, 500);

    // Letter L
    line(750, 200, 750, 500);
    line(750, 500, 950, 500);

    // Letter L
    line(1000, 200, 1000, 500);
    line(1000, 500, 1200, 500);

    // Letter 0 
    line(1250, 200, 1250, 500);
    line(1250, 500, 1450, 500);
    line(1450, 200, 1450, 500);
    line(1250, 200, 1450, 200);

    // // Letter W
    // line(75, 700, 150, 900);
    // line(150, 900, 175, 850);
    // line(175, 850, 200, 900);
    // line(200, 900, 275, 700);

   

    
    

    if (mouseIsPressed === true) {
        stroke(255);
        line(mouseX, mouseY, pmouseX, pmouseY);
        line(mouseX+ 5, mouseY+ 5, pmouseX+ 5, pmouseY + 5);
    }
    change_background = false;
   
    
}

