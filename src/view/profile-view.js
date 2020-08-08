import { footer } from "./footer-view.js";
import { mypostPlantilla } from "./mypost-content-view.js"

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
    <div id="interes-title">
       <h2> America </h2> <h2> Comida </h2>
    </div>
</section>
 
<section id="freinds">
    <h4> Mis Amigos </h4>
    <div id="mostrar-amigos">  
        <img src="img/costa-rica.jpg" id="picture-myfreinds" alt="Foto perfil">  
    </div>
    <div id="mostrar-amigos">  
        <img src="img/colombia.jpg" id="picture-myfreinds" alt="Foto perfil">  
    </div>
    <div id="mostrar-amigos">  
        <img src="img/brasil.jpg" id="picture-myfreinds" alt="Foto perfil">  
    </div>
</section>

<section id= "container-mypost">
    <div id="boxmypost">
    ${ mypostPlantilla } 
    </div>
    <div id="boxmypost">
    ${ mypostPlantilla } 
    </div>
    <div id="boxmypost">
    ${ mypostPlantilla } 
    </div>
</section>
${ footer }
`;
export { profileContent};
