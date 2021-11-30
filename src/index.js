let angle = 0.0;
let w = window.innerWidth;
let h = window.innerHeight;
let love_w = 300;
let love_h = 300;

function setup() { 
    canvas = createCanvas(w, h, WEBGL);
    cam = createEasyCam();

    normalMaterial();

    love = createGraphics(love_w, love_h);
    love.background(0, 0);
    love.fill(255);
    love.textAlign(CENTER);
    love.text('пошёл нахер', love_w / 2, love_h / 2);
} 

function draw(){
    background(64);
   
    lights();

    angle += 0.003;

    let x_c = cos(angle);
    let y_c = sin(angle);
    let z_c = cos(angle) + sin(angle);

    push();
    texture(love);
    plane(300, 300);
    pop();

    rotateX(x_c);
    rotateY(y_c);
    rotateZ(z_c);
    box(1000);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


