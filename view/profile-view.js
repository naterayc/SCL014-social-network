import { footer } from "./footer-view.js";
import { mypostPlantilla } from "./mypost-content-view.js"

const profileContent = `
<section id="info-viajero">
    <div>
       <img src="img/islandia.jpg" alt="Foto perfil" class="img-profile">     
    </div>
    <div>
        <p class="user-name"> Viajera frecuente </p>
        <p class="user-info"> Me gusta la naturaleza y el sonido del mar </p>
        <span class="user-info"><i class="fas fa-map-marker-alt"></i> Santiago de Chile</span>
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
    <div id="interes-title">
       <h5> America </h5> 
       <h5> Comida </h5>
    </div>
</section>
 
<section id="freinds">
    <h2> Mis Amigos </h2>
    <div id="mostrar-amigos">  
        <img src="img/costa-rica.jpg" id="picture-myfreinds" alt="Foto perfil">
        <img src="img/colombia.jpg" id="picture-myfreinds" alt="Foto perfil">
        <img src="img/brasil.jpg" id="picture-myfreinds" alt="Foto perfil">   
    </div> 
</section>

<section id= "container-mypost">
    <div id="boxmypost">
    ${ mypostPlantilla } 
    ${ mypostPlantilla } 
    ${ mypostPlantilla } 
    </div>
</section>
${ footer }
`;
export { profileContent};
