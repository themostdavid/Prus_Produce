var mainBox;
var secondaryBox;
var boxes = [];

function startGame() {
    gameArea.start();
    //drawImage("images/corn.jpg");
    mainBox = new Rect_Component(4, 4, "red", 140, 120);
    boxes.push(mainBox);
    secondaryBox = new Rect_Component(40, 40, "blue", 300, 250);
    boxes.push(secondaryBox);
    boxes.push(new Rect_Component(70, 70, "purple",
        gameArea.canvas.width/2 - 10, gameArea.canvas.height/2 - 10));
    setUpEvents();
}

var gameArea = {
    canvas : document.createElement("canvas"),
    // runs on page load
    start : function() {
        this.canvas.width = 1080;
        this.canvas.height = 560;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.FRAMERATE = 120;
        this.frameNo = 0;
        //this.interval = setInterval(updateGameArea, (1/this.FRAMERATE)*1000);
        this.gravity = .25;
    },
    clear : function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// Runs every frame
function updateGameArea()
{
    //console.log("updateGameArea()");
    gameArea.clear();
    gameArea.frameNo += 1;
    for (let i = 0; i < boxes.length; ++i)
    {
        if (false)
        {
            if (Math.floor((gameArea.frameNo/gameArea.FRAMERATE) % 2))
            {
                boxes[i].width -= boxes[i].width * .01;
                boxes[i].length -= boxes[i].length * .01;
            }
            else
            {
                boxes[i].width += boxes[i].width * .01;
                boxes[i].length += boxes[i].length * .01;
            }
        }
        boxes[i].angle += degToRad(1);
        boxes[i].hasRotated = true;
        boxes[i].newPos();
        boxes[i].update();
    }
}

function Rect_Component(width, height, color, x, y) {
    console.log("Rect_Component created.\n");
    this.hasRotated = false; // if rotated during latest frame, true
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.speedX = 5;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.newPos = function()
    {
        this.x += this.speedX;
        this.y += this.speedY;
    };
    this.update = function()
    {
        let ctx = gameArea.context;
        if (this.x >= gameArea.canvas.width)
        {
            this.x = gameArea.canvas.width - this.width;
            this.speedX = -1*(this.speedX*1.01);
            if (this.speedX < -1*gameArea.canvas.width+120)
                this.speedX = -1*gameArea.canvas.width+120;
            console.log("SpeedX_RIGHT=" + this.speedX);
        }
        else if (this.x <= 0)
        {
            this.x = 0;
            //console.log("SpeedX_LEFTBEFORE=" + this.speedX);
            this.speedX = -1*(this.speedX*1.01);
            if (this.speedX > gameArea.canvas.width-120)
                this.speedX = gameArea.canvas.width-120;
            console.log("SpeedX_LEFT=" + this.speedX);
        }
        if(this.hasRotated)
        {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = color;
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
            ctx.restore();
            this.hasRotated = false;
        }
        else
        {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        if (this.y >= gameArea.canvas.height)
        {
            //console.log("y: " + this.y + ", height: " + gameArea.canvas.height);
            this.speedY -= this.speedY*2;
        }
        else
        {
            //console.log("yeet");
            this.speedY += gameArea.gravity;
        }
    };
}

function degToRad(degrees)
{
    return degrees * (Math.PI / 180);
}

function generateSquare()
{
    gameArea.clear();

    //keep old red boy
    new Rect_Component(30, 30, "red", 140, 120);
    new Rect_Component(30, 30, "#" + (h = randomColor()),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 500));
}

function randomColor()
{
    var red = Math.ceil(Math.random()*255);
    var green = Math.ceil(Math.random()*255);
    var blue = Math.ceil(Math.random()*255);
    return ((red << 16) + (green << 8) + blue).toString(16);
}

//events using jquery
function setUpEvents()
{
    var $b_gen = $("#b_Gen");
    $b_gen.on("mousedown", function(e)
    {
        switch (e.which)
        {
            //Left click
            case 1:
                timeoutId = setInterval(updateGameArea, 10);
                updateGameArea();
                //rotateCorn();
                break;
            default:
                break;
        }

    }).on("mouseup", function(e)
    {
        clearInterval(timeoutId);
    });

    $b_gen.on("contextmenu", function(e)
    {
        return false;
    });
}

function eatAss() {
    return 0;
}