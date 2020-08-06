import { footer } from "./footer-view.js";

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
${footer}
`;

export { wallContent };