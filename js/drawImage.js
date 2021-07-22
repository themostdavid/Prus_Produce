// Attempting to place image on html document
function drawImage(sSrc)
{
    let testImg = document.createElement("img");
    testImg.src = sSrc;
    testImg.classList.add("bigImage");
    document.body.appendChild(testImg);
    //now try to draw on canvas
    const ctx = gameArea.canvas.getContext("2d");
    // This is REQUIRED to give the img element time to load
    // onload runs when element loads ;)
    testImg.onload = function ()
    {
        ctx.drawImage(testImg, 12, 12);
    }
}

// Do a funny
function rotateCorn()
{
    const c = gameArea.canvas;
    let cornImg = document.createElement("img");
    cornImg.src = "images/corn.jpg";
    const ctx = c.getContext("2d");
    gameArea.clear();
    cornImg.onload = function ()
    {
        new Rect_Component(30, 30, "red", 140, 120);
        new Rect_Component(c.width/2, 12, "#D2FF05", 0, c.height/2+12);
        ctx.save();
        ctx.translate(c.width/2, c.height/2);
        ctx.drawImage(cornImg, 0, 0,
            cornImg.width/2, cornImg.height/2);
        ctx.restore();
    }
}