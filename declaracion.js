function CuandoDigaSi(){
    rsp1 = "Sabía que dirías que sí ♥ TE AMO MUCHO";
    rsp2 = "♥ Eres el CSS de mi vida, bebé ♥";
    document.getElementById("lblResultado").innerHTML = rsp1;
    document.getElementById("lblResultado1").innerHTML = rsp2;
}
function CuandoDigaNo(){
    ancho = window.innerWidth;
    alto = window.innerHeight;

    x = (Math.random() * ancho) + "px";
    y = (Math.random() * alto) + "px";

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = x;
    document.getElementById('btnNo').style.top = y;
}



