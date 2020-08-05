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
    <button id="post" type="button">Ver publicaciones</button>
</section>

<footer id="barra-inferior">
    <div id="barra">
        <i class="fas fa-home iconos-barra"></i>
        <i class="fas fa-star iconos-barra"></i>
        <i class="fas fa-user iconos-barra"></i>
    </div>
</footer>`;

wallView.querySelector('#post')
wall.innerHTML = wallContent;
return wall;

}


/* <header id="header" class="hide">
    <img src="img/logo.png" alt="logo" class="logo">
    <i class="fas fa-search lupa"></i>
</header>

<!-- Muro -->
        <section id="wall" class="hide">
            <div class="public">
                <input class="inputpublic" type="textfield" placeholder="¿Que quieres compartir?">
            </div>
        </section>

        <footer id="barra-inferior" class="hide">
        <div id="barra">
            <i class="fas fa-home iconos-barra"></i>
            <i class="fas fa-star iconos-barra"></i>
            <i class="fas fa-user iconos-barra"></i>
        </div>

    </footer>
        */

       

    
    
    
    
    
    
      