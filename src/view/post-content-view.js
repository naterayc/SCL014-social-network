const postPlantilla = (docId, image, comments, likes, photo, text, date) =>  `
<div id="post-note" data-id="${ docId }">
        <div>
            <i class="fas fa-ellipsis-h icon show-options"></i>
         </div>
        <div class="edit-post">
            <span><i class="far fa-edit icon"></i>Editar</span>
            <span><i class="fas fa-trash-alt icon delete-option"></i>Eliminar</span>
        </div>
        <!-- <p>Madrid</p> -->
        <div> 
            <img id= "image-load" src="${ image }"  alt="Foto post" class="img-cuadrada">        
        </div>
        
        <div>              
            <span id="commentsNumber" class="like-comment">${ comments }</span><i class="far fa-comment-alt icon"></i>
            <span id="likesNumber" class="like-comment">${ likes }</span><i class="far fa-heart icon"></i>
        </div>
        <div>
            <img src="${ photo }" id="picture-perfil-post" alt="Foto perfil">  
            <h4>${ text }</h4>
            <div>
            <p>${ date }</p>
            </div>
        </div>
        
</div>
`;
export {postPlantilla};
