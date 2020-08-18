const mypostPlantilla = (image, likes,) =>  `
<div id="mypost-note">
    
    <div>
        <i class="fas fa-ellipsis-h icon"></i>
    </div>

    <div>
        <img src="${image}"  alt="Foto post" class="img-mypost">
    </div>

    <div>
        <span id="commentsNumber" class="mylike-comment">0</span><i class="far fa-comment-alt icon"></i>
        <span id="likesNumber" class="mylike-comment">${likes}</span><i class="far fa-heart icon"></i>
    </div>       
</div>

`;
export {mypostPlantilla};
