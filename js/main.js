var mainBox;

function startGame() {
    gameArea.start();
    //drawImage("images/corn.jpg");
    mainBox = new Rect_Component(30, 30, "red", 140, 120);
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
        this.FRAMERATE = 60;
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 1/this.FRAMERATE);
    },

    clear : function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

// Runs every frame
function updateGameArea()
{
    gameArea.clear();
    gameArea.frameNo += 1;
    mainBox.angle += 1;
    mainBox.update();
}

function Rect_Component(width, height, color, x, y) {
    console.log("Rect_Component created.\n");
    this.hasRotated = false; // if rotated during latest frame, true
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.x = x;
    this.y = y;
    // rotateFill() method??? with angle argument. it would handle rotating canvas
    this.update = function()
    {
        let ctx = gameArea.context;
        // Call rotateFill() here??? or just have it here
        if(this.hasRotated)
        {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = color;
            ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
            ctx.restore();
        }
        else
        {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

function generateSquare()
{
    gameArea.clear();

    //keep old red boy
    new Rect_Component(30, 30, "red", 140, 120);
    new Rect_Component(30, 30, "#" + (h = randomColor()),
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 500));
    console.log(h);
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
                rotateCorn();
                break;
            default:
                break;
        }

    });

    $b_gen.on("contextmenu", function(e)
    {
        return false;
    });
}

function eatAss() {
    return 0;
}