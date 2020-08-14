export const editOptions = `
    <div>
        <i class="fas fa-ellipsis-h icon show-options"></i>
    </div>
    <div class="edit-post">
        <span data-id="edit-post"><i class="far fa-edit icon"></i>Editar</span>
        <span><i class="fas fa-trash-alt icon delete-option"></i>Eliminar</span>
    </div>
 
 <div id="detele-modal" class="modal hide">
    <section class="modal-content">
        <h3> ¿Realmente quieres eliminar esta publicación? </h3>
        <div style="display:flex">
        <button id="delete" class="delete-btn"> <!-- <i class="fas fa-trash-alt"> </i> --> Eliminar</button>
        <button id="close-delete" class="delete-btn"><!-- <i class="fas fa-window-close"> </i> --> Cancelar</button>
        <div>
    </section>
 </div>   `;