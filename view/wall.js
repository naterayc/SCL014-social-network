import { 
    changeRoute 
} from '../view-controller/router.js'
export const wallView = () => {
// creando elementos de html dinamico
const wall = document.createElement('div');  //contendra toda la vista
const wallContent = `
<div id="header" class="head">
    <img src="img/logo.png" alt="logo" class="logo">
    <i class="fas fa-search lupa"></i>
</div>

<!-- Muro -->
<section id="wall">
    <div class="public">
        <input class="inputpublic" type="textfield" placeholder="¿Que quieres compartir?">
    </div>
    <button id="post" type="button"><a href="#/destiny">Ver publicaciones</a></button>
</section>

<footer id="barra-inferior">
    <div id="barra">
        <i class="fas fa-home iconos-barra"></i>
        <i class="fas fa-star iconos-barra"></i>
        <i class="fas fa-user iconos-barra"></i>
    </div>
</footer>`;

setTimeout(function () {
const btnPost = wall.querySelector('#post');
console.log(btnPost);
btnPost.addEventListener('click', () => {
    changeRoute('#/destiny');        
});
}, 1000); 
wall.innerHTML = wallContent;
return wall;

}


       

    
    
    
    
    
    
      