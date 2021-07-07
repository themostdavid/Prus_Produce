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
    var localBox = new Rect_Component(30, 30, "blue",
        Math.ceil(Math.random() * 1000),
        Math.ceil(Math.random() * 500));
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