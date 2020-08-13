const postPlantilla = (docId, image, comments, likes, photo, text, date) =>  `
<div id="post-note" data-id="${ docId }">
        <div>
            <i class="fas fa-ellipsis-h icon show-options"></i>
         </div>
        <div class="edit-post">
            <span data-id="edit-post"><i class="far fa-edit icon"></i>Editar</span>
            <span><i class="fas fa-trash-alt icon delete-option"></i>Eliminar</span>
        </div>
        <!-- <p>Madrid</p> -->
        <div> 
            <img id= "image-load" src="${ image }"  alt="Foto post" class="img-cuadrada">        
        </div>
        
        <div>              
            <span id="commentsNumber" class="like-comment">${ comments }</span><i class="far fa-comment-alt icon"></i>
            <span data-id="likesNumber" class="like-comment">${ likes }</span><i class="far fa-heart icon"></i>
        </div>
        <div>
            <img src="${ photo }" id="picture-perfil-post" alt="Foto perfil">  
            <h4 data-id="text-post-edited">${ text }</h4>
            <div data-id="div-edit-post" class="hide">
                <input data-id="post-text-edit" class="inputpublic" type="text" value="${ text }"/>
                <button data-id="btn-save-input">GUARDAR</button>
            </div>
            <div>
                <p>${ date }</p>
            </div>
        </div>
        
</div>
`;
export {postPlantilla};
