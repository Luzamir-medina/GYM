const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector ('menu'); 

iconoMenu.addEventListener('click', (e)=>{

    menu.classlist.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'bi bi-list'){
        e.target.setAttribute('src','imagenes/icono de tres barrar.png');
    }else{
        e.target.setAttribute('src','imagenes/icono de tres barrar.png');
    }
})