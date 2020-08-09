const db = firebase.firestore();

const registerUser = (user) => {
    db.collection("users")
        .add(user)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
};

// firebaseregister();
const obtenerPublish = () => {
    return db
        .collection("/publicaciones")
        .get()
    /*.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
});*/
};
// obtenerPublish();

const savePublish = (post) => {
    return db.collection("publicaciones")
        .add(post)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
};

const deletePublish = (postId) =>{
    return db
    .collection("publicaciones")
    .doc(postId)
    .delete()
    .then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};

export {
    registerUser,
    obtenerPublish,
    savePublish,
    deletePublish
}