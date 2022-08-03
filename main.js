var canvas = new fabric.Canvas("pintura");
var larguraBloco = 30;
var alturaBloco = 30;
var personagemX = 10;
var personagemY = 10;
var personagemObjeto = " ";
var blocoObjeto = " ";
var numero = 0;
function playerUpload(){
    fabric.Image.fromURL("player.png", function(Img){
        personagemObjeto = Img;
        personagemObjeto.scaleToWidth(150);
        personagemObjeto.scaleToHeight(140);
        personagemObjeto.set({
            top:personagemY,
            left:personagemX
        });
        canvas.add(personagemObjeto);
    });
};
function blocosUpload(blocos){
    fabric.Image.fromURL(blocos, function(Img){
        blocoObjeto = Img;
        blocoObjeto.scaleToWidth(larguraBloco);
        blocoObjeto.scaleToHeight(alturaBloco);
        blocoObjeto.set({
            top:personagemY,
            left:personagemX
        });
        canvas.add(blocoObjeto);
    });
};
window.addEventListener ("keydown", mykeydown);
function mykeydown(e){
    numero = e.keyCode;
    console.log(numero);
    if (e.shiftKey == true && numero == '80'){
        larguraBloco = larguraBloco + 2;
        alturaBloco = alturaBloco + 2;
        console.log("shift + P");
        document.getElementById("larguraAtual").innerHTML = larguraBloco;
        document.getElementById("alturaAtual").innerHTML = alturaBloco;
    }
    if (e.shiftKey == true && numero == '77'){
        larguraBloco = larguraBloco - 2;
        alturaBloco = alturaBloco - 2;
        console.log("shift + M");
        document.getElementById("larguraAtual").innerHTML = larguraBloco;
        document.getElementById("alturaAtual").innerHTML = alturaBloco;
    }
    if (numero = '87'){
        blocosUpload('wall.jpg');
        console.log('W');
    }
    if (numero = '84'){
        blocosUpload('trunk.jpg');
        console.log('T');
    }
    if (numero = '68'){
        blocosUpload('dark_green.png');
        console.log('D');
    }
    if (numero = '76'){
        blocosUpload('light_green.png');
        console.log('L');
    }
    if (numero = '71'){
        blocosUpload('ground.png');
        console.log('G');
    }
    if (numero = '89'){
        blocosUpload('yellow_wall.png');
        console.log('Y');
    }
    if (numero = '82'){
        blocosUpload('roof.jpg');
        console.log('R');
    }
    if (numero = '67'){
        blocosUpload('cloud.jpg');
        console.log('C');
    }
    if (numero = '85'){
        blocosUpload('unique.png');
        console.log('U');
    }
}
