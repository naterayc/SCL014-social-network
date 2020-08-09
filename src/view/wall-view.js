import { footer } from "./footer-view.js";
import { header } from "./header-view.js";

const wallContent = `
${ header }
<section id="wall">
    <div class="public">
        <img id="user-photo" src="img/islandia.jpg" class="profile-picture">
        <input id="post-title" class="inputpublic" type="text" placeholder="¿Que quieres compartir?"/>
        <input type="file" id="load-photo" accept="image/*"/>
    </div>
    <div id="publish"> Publicar </div>
    
    <button id="post" type="button" class="button2">Destinos destacados</button>
</section>
<section id= "container-post">

</section>

${ footer }
`;

export { wallContent };