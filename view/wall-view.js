import { footer } from "./footer-view.js";
import { header } from "./header-view.js"
import { postPlantilla } from "./post-content-view.js"

const wallContent = `
${ header }
<section id="wall">
    <div class="public">
        <img src="img/islandia.jpg" class="profile-picture">
        <input class="inputpublic" type="text" placeholder="¿Que quieres compartir?">
    </div>
    <div id="publish"> Publicar </div>
    
    <button id="post" type="button" class="button2">Destinos destacados</button>
</section>
<section id= "container-post">
${ postPlantilla }
${ postPlantilla }
${ postPlantilla }
</section>

${ footer }
`;

export { wallContent };