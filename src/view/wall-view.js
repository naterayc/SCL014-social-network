import { footer } from "./footer-view.js";
import { header } from "./header-view.js";

const wallContent = `
${ header}

<section class= "container-left">
    
</section>

<!-- post -->
<section id="wall">
    <div class="public">
        <div class="flex">
            <img id="user-photo" src="img/viaje.png" class="profile-picture">
            <input id="post-title" class="inputpublic" type="text" placeholder="¿Que quieres compartir?"/>
        </div>
        <div id="load">
            <input type="file" id="load-photo" accept="image/*"/>
            <label for="load-photo" class="load-picture">Cargar foto <i class="far fa-image"></i></label>
            <i class="fas fa-check-circle load hide"></i>
        </div> 
    </div>
        <div id="publish"> Publicar </div>
        <button id="post" type="button" class="button2">Destinos destacados</button>
</section>

<div id="reminder-modal" class="modal">
    <section class="modal-reminder">
        <h3> Debes cargar una foto antes de publicar </h3>
        <button id="close" class="close-btn"> Ok </button>
    </section>
</div>

<section id= "container-post"></section>

<!-- Modal de Perfil -->
<section id="my-modal-profile" class="modal">
    <span class="close-modal">&times;</span>
    <section class="modal-content-profile">
    </section> 
</section>

<section class= "container-right">
    <!-- destiny -->
    <section id="destiny">
        <section>
            <span id="back"><i class="fas fa-chevron-left lupa"></i><span>
            <div id="destiny-title">
                <i class="fas fa-map-marked-alt icon"></i>
                <h2 id="destacado"> Destinos destacados </h2>
            </div>
            <p class="text"> Aqui te presentamos una seleccion de los destinos top del momento </p>
        </section>
        <section id="destinos">
            <div id="box">
                <img src="img/mexico.jpg" id="destiny-img">
                <span id="destiny-name">México</span>
            </div>
            <div id="box">
                <img src="img/costa-rica.jpg" id="destiny-img">
                <span id="destiny-name">Costa Rica</span>
            </div>
            <div id="box">
                <img src="img/colombia.jpg" id="destiny-img">
                <span id="destiny-name">Colombia</span>
            </div>
            <div id="box">
                <img src="img/peru.jpg" id="destiny-img">
                <span id="destiny-name">Perú</span>
            </div>
            <div id="box">
                <img src="img/islandia.jpg" id="destiny-img">
                <span id="destiny-name">Islandia</span>
            </div>
            <div id="box">
                <img src="img/brasil.jpg" id="destiny-img">
                <span id="destiny-name">Brasil</span>
            </div>
        </section>
    </section>
</section>

${ footer}
`;

export { wallContent };