const postPlantilla = (docId, image, comments, likes, photo, text, name, date) => `
<div id="post-note" data-id="${ docId}">
        <div>
            <i class="fas fa-ellipsis-h icon show-options"></i>
         </div>
        <div class="edit-post">
            <span data-id="edit-post"><i class="far fa-edit icon"></i>Editar</span>
            <span><i class="fas fa-trash-alt icon delete-option"></i>Eliminar</span>
        </div>
        <!-- <p>Madrid</p> -->
        <div> 
            <img id= "image-load" src="${ image}"  alt="Foto post" class="img-cuadrada">        
        </div>
        
        <div>              
            <span id="commentsNumber" class="like-comment">${ comments}</span><i class="far fa-comment-alt icon"></i>
            <span data-id="likesNumber" class="like-comment">${ likes}</span><i class="far fa-heart icon"></i>
        </div>
        <div>
            <img src="${ photo}" id="picture-perfil-post" alt="Foto perfil">  
            <p data-id="text-post-edited" class="post-text">${ text}</p>
            <div data-id="div-edit-post" class="hide">
                <input data-id="post-text-edit" class="edit-input" type="text" value="${ text}"/>
                <button data-id="btn-save-input" class="save-btn"><i class="fas fa-check"></i></button>
            </div>
        </div>
            <div>
                <p class="date"> ${ name }</p>
                <p class="date">${ date }</p>
            </div>             
</div>
`;
export { postPlantilla };
