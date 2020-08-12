import { footer } from "./footer-view.js";
import { header } from "./header-view.js";

const wallContent = `
${ header}

<section class= "container-left">
    <section id="info-viajero">
        <img src="img/viajera3.jpg" alt="Foto perfil" class="img-profile">
        <div id="datos-viajero">
            <p class="user-name"> Viajera frecuente </p>
            <p class="user-info"> Me gusta la naturaleza y el sonido del mar.</p>
            <br><span class="user-info"><i class="fas fa-map-marker-alt"></i> Santiago de Chile</span>
        </div>
    </section>
    <section id="icons-profile">
        <div id="iconos">
            <i class="fas fa-suitcase-rolling iconos-profile"></i> <!--maleta-->
            <i class="fas fa-bed iconos-profile"></i> <!-- cama -->
            <i class="fas fa-taxi iconos-profile"></i> <!-- taxi -->
            <i class="fas fa-utensils iconos-profile"></i> <!--comida-->
            <i class="fas fa-hiking iconos-profile"></i> <!--guia-->
        </div>
    </section>
    <section id="intereses">
        <h2> Mis Intereses </h2>
        <div id="boxdeinteres">
            <p id="titulo-interes"> America </p>
            <p id="titulo-interes"> Comida </p>
            <p id="titulo-interes"> Naturaleza </p>
        </div>
    </section>
    <section id="freinds">
        <h2> Mis Amigos </h2>
        <div id="mostrar-amigos">
            <img src="img/camp2.jpg" id="picture-myfreinds" alt="Foto perfil">
            <img src="img/viajera-frecuente.jpg" id="picture-myfreinds" alt="Foto perfil">
            <img src="img/viajera-frecuente2.jpg" id="picture-myfreinds" alt="Foto perfil"> 
        </div>
    </section>
    <section id= "container-mypost">
        <div id="boxmypost">
        </div>
    </section>
</section>

<!-- post -->
<section id="wall">
    <div class="public">
        <div class="flex">
            <img id="user-photo" src="img/viajera3.jpg" class="profile-picture">
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