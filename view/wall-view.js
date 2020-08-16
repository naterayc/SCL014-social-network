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
        </div>
    </div>
        <div id="publish"> Publicar </div>
        <button id="post" type="button" class="button2">Destinos destacados</button>
</section>

<section id= "container-post"></section>

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