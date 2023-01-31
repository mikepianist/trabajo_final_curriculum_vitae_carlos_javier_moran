//Crear ícono eliminar ventana
var img_eliminar = document.createElement('img');// Crea un nuevo elemento de imagen 
img_eliminar.src = '/img/icono/ic_eliminar.png';// Establece la ubicación de la imagen
img_eliminar.setAttribute("id", "ic_delate");//Setear y colocar un identificador

//Crear foto de perfil
var img_perfil = document.createElement('img');
crearImagen (img_perfil, '/img/perfil/foto_perfil.png');

//Cuando se clickea el botón de ampliar imágen
document.getElementById("ampliar_img").addEventListener("click", function(){   
    mostrarVentana(img_perfil);
    cerrarVentana();
});


/******* CERTIFICADOS ********/

for (var i = 1; i <= 4; i++) {
    //Crear cada variable dinámicamente
    window['img_certificado_0'+i] = document.createElement('img');
    crearImagen (window['img_certificado_0'+i], '/img/certificado/certificado_0'+ i + '.jpg');
}


  
//Mostrar certificado 1
document.getElementById("ver_certificado_01").addEventListener("click", function(){    
    mostrarVentana(img_certificado_01);
    cerrarVentana();
});

//Mostrar certificado 2
document.getElementById("ver_certificado_02").addEventListener("click", function(){    
    mostrarVentana(img_certificado_02);
    cerrarVentana();
});

//Mostrar certificado 3
document.getElementById("ver_certificado_03").addEventListener("click", function(){    
    mostrarVentana(img_certificado_03);
    cerrarVentana();
});

//Mostrar certificado 4
document.getElementById("ver_certificado_04").addEventListener("click", function(){    
    mostrarVentana(img_certificado_04);
    cerrarVentana();
});


function crearImagen (imagen, ruta_img){       
    imagen.src = ruta_img;
    imagen.setAttribute("class", "contenedor_img");
}

function mostrarVentana(imagen_contenido){
     //Cambiar color de fondo de la página
     document.body.style.backgroundColor = '#000'; 
     //Eliminar contenido visible
     document.getElementsByClassName("container")[0].style.display = 'none';
     //Agregar ícono de eliminar imagen
     document.body.appendChild(img_eliminar);// Agrega la imagen al documento
     //Agregar imagen de perfil
     document.body.appendChild(imagen_contenido);// Agrega la imagen al documento   
}

function cerrarVentana(){
    document.getElementById("ic_delate").addEventListener("click", function(){         
        document.getElementsByClassName("contenedor_img")[0].remove(); //Eliminar imagen 
        document.body.style.backgroundColor = 'white'; //Restaurar color de fondo         
        document.getElementsByClassName("container")[0].style.display = 'block';   
        this.remove();//Eliminar el ícono de cerrar ventana 
    });
}





