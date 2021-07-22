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
    //gameArea.clear();
    cornImg.onload = function ()
    {
        //boxes.push(cornImg);
    }
}