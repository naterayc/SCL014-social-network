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
            <span id="commentsNumber" class="like-comment">${ comments }<i class="far fa-comment-alt"></i></span>
            <span data-id="likesNumber" class="like-comment">${ likes }<i class="far fa-heart"></i></span>
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
