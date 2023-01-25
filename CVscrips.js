window.onload = function(){
    document.getElementById('VolverArriba').addEventListener('click',MoverTop)
    document.getElementById('BotonC').addEventListener('click',MoverInfo)
    document.getElementById('BotonM').addEventListener('click',MoverForm)
    document.getElementById('BotonY').addEventListener('click',MoverHab)
}

/** Me gustaria aprender a hacer una animación al presionar los botones, que no vaya directamente hacia la sección
 * sino que se deslize hasta ahi, ademas de que la funcion que aplique se mueve a coordenadas y no directamente
 * a los demas elementos.
 */

function MoverTop(){
    scrollTo (0,0)
}

function MoverInfo(){
    scrollTo (0,345)
}
function MoverForm(){
    scrollTo (0,785)
}

function MoverHab(){
    scrollTo (0,1285)
}