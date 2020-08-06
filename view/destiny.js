import { 
    changeRoute 
} from '../view-controller/router.js'
export const destinyView = () => {
    // creando elementos de html dinamico
    // console.log('ejecutando');
    // window.location.hash = '#/destiny';
      //contendra toda la vista
    const destinyContent = `
    <div id="header" class="head">
        <img src="img/logo.png" alt="logo" class="logo">
        <i class="fas fa-search lupa"></i>
    </div>
    
    <!-- destiny -->
    <section id="wall">
        <section>
            <img src="img/islandia.jpg" id="picture-perfil-register" alt="Foto perfil" class="imgRedonda">
            <button id="post" type="button"><a href="#/wall">Volver</a></button>
        </section>

    </section>
    
    <footer id="barra-inferior">
        <div id="barra">
            <i class="fas fa-home iconos-barra"></i>
            <i class="fas fa-star iconos-barra"></i>
            <i class="fas fa-user iconos-barra"></i>
        </div>
    </footer>`;
    const destinyWall = document.createElement('div');
    destinyWall.setAttribute('id', 'contenedor');
    destinyWall.innerHTML = destinyContent;
    document.getElementById('containerViews').appendChild(destinyWall);

    const btnPost = document.querySelector('#post');
    btnPost.addEventListener('click', () => {
        console.log(window.location.hash);
        changeRoute('#/wall');
        console.log('se cambio ruta'); 
    });
    
    
    console.log(destinyWall);
    return destinyWall;
    
    }
    