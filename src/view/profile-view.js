import { footer } from "./footer-view.js";
import { postPlantilla } from "./post-content-view.js"

const profileContent = `
<section id="infoviajero">
    <div>
       <img src="img/islandia.jpg" alt="Foto perfil" class="img-profile">     
    </div>
</section>

<section id="iconsprofile">
    <div id="iconos">
        <i class="fas fa-suitcase-rolling lupa"></i> <!--maleta-->
        <i class="fas fa-bed lupa"></i> <!-- cama -->
        <i class="fas fa-taxi lupa"></i> <!-- taxi -->
        <i class="fas fa-utensils lupa"></i> <!--comida-->
        <i class="fas fa-hiking lupa"></i> <!--guia-->
    </div>
</section>

<section id="intereses">
    <div id="boxinteres">
            
    </div>
</section>
 
<!--<section id="freinds">
    <div id="mostrar-amigos">        
    </div>
</section>-->

<section id= "container-mypost">
    <div id="boxmypost">
    ${ postPlantilla } ${ postPlantilla }
    </div>
</section>
${ footer }
`;
export { profileContent};
