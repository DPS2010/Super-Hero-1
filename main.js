var canvas = new fabric.Canvas("myCanvas")
var blockwidth = 30
var blockheight = 30
var playerx = 100
var playery = 100
var playerObject = ""
var powerObject = ""

function updatePlayer() {
    fabric.Image.fromURL("player.png", function (img) {
        playerObject = img;
        playerObject.scaleToWidth(150)
        playerObject.scaleToHeight(150)
        playerObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerObject)
    })
}

function updateBlock(power) {
    fabric.Image.fromURL(powerblock, function (img) {
        blockObject = img;
        powerObject.scaleToWidth(powerwidth)
        powerObject.scaleToHeight(powerheight)
        powerObject.set ({
            top:playery,
            left:playerx
        });
        canvas.add(powerObject)
    })
}
updatePlayer()
updateBlock()