var testBox;

function startGame() {
    gameArea.start();
    testBox = new Rect_Component(30, 30, "red", 140, 120);
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
    },

    clear : function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function Rect_Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = gameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
                generateSquare();
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