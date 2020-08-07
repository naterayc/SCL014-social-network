
import { header } from "./header-view.js";
import { footer } from "./footer-view.js";


const destinyContent = `
${ header }

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
${ footer }
`;

export { destinyContent }