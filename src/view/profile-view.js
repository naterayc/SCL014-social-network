import { footer } from "./footer-view.js";
import { mypostPlantilla } from "./mypost-content-view.js"

const profileContent = (profilePhoto, name, location) => `
<div id="header" class="head">
</div> 
<section id="info-viajero">
    <img src="${ profilePhoto }" alt="Foto perfil" class="img-profile">     
    <div id="datos-viajero">
        <p class="user-name"> ${ name }</p>
        <p class="user-info"> Me gusta la naturaleza y el sonido del mar.</p>
        <span class="user-info"><i class="fas fa-map-marker-alt"></i> ${ location }</span>
    </div>
</section>

<section id="icons-profile">
    <div id="iconos">
        <i class="fas fa-suitcase-rolling iconos-profile"></i> 
        <i class="fas fa-bed iconos-profile"></i> 
        <i class="fas fa-taxi iconos-profile"></i> 
        <i class="fas fa-utensils iconos-profile"></i> 
        <i class="fas fa-hiking iconos-profile"></i> 
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
    <h2> Mis Post </h2>
    <div id="boxmypost">
    <!--${ mypostPlantilla }-->            
    </div>
</section>
${ footer }
`;
export { profileContent};
