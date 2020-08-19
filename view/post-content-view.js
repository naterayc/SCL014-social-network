
const postPlantilla = (docId, edit, image, comments, likes, photo, text, name, date) => `
<div id="post-note" data-id="${ docId}" data-name="postContent">
        ${ edit }
        
        <div> 
            <img id="image-load" src="${image}" alt="Foto post" class="img-cuadrada">       
        </div>
        
        <div>              
            <span id="commentsNumber" class="like-comment">${ comments}</span><i class="far fa-comment-alt icon"></i>
            <span data-id="likesNumber" class="like-comment">${ likes}</span><i class="far fa-heart icon"></i>
        </div>
        <div>
            <img src="${ photo}" id="picture-perfil-post" alt="Foto perfil">  
            <p data-id="text-post-edited" class="post-text">${ text}</p>
            <div data-id="div-edit-post" class="hide">
                <textarea data-id="post-text-edit" class="edit-input">${ text}</textarea>
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
