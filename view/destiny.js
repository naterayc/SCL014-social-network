export const destinyView = () => {
    // creando elementos de html dinamico
    const destinyWall = document.createElement('div');  //contendra toda la vista
    const destinyContent = `
    <div id="header" class="head">
        <img src="img/logo.png" alt="logo" class="logo">
        <i class="fas fa-search lupa"></i>
    </div>
    
    <!-- Muro -->
    <section id="wall">
        <div class="public">
            <input class="inputpublic" type="textfield" placeholder="¿Que quieres compartir?">
        </div>
    </section>
    
    <footer id="barra-inferior">
        <div id="barra">
            <i class="fas fa-home iconos-barra"></i>
            <i class="fas fa-star iconos-barra"></i>
            <i class="fas fa-user iconos-barra"></i>
        </div>
    </footer>`;
    
    destinyWall.innerHTML = destinyContent;
    return destinyWall;
    
    }
    