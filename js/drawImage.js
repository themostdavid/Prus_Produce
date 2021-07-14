// Attempting to place image on html document
function drawImage()
{
    let testImg = document.createElement("img");
    testImg.src = "images/corn.jpg";
    document.body.appendChild(testImg);
    //now try to draw on canvas
    const ctx = gameArea.canvas.getContext("2d");
    // This is REQUIRED to give the img element time to load
    testImg.onload = function ()
    {
        ctx.drawImage(testImg, 12, 12);
    }
}