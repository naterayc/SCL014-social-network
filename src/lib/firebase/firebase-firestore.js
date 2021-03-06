const db = firebase.firestore();
// Almacena datos de cada usuario
const registerUser = (user) => {
    return db.collection("users")
        .add(user)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
};

const getUserByEmail = (email) => {
    return db
        .collection("users")
        .where("email", "==", email)
        .get()
        .then(function (querySnapshot) {
            if (querySnapshot.empty === true) {
               return undefined; 
            }
            return querySnapshot.docs[0].data();
        })
        .catch(function (error) {
            console.log("Error al obtener el usuario por: ", email);
            console.log(error);
        });
};

const getPublishByUid = (uid) => {
    return db
        .collection("publicaciones")
        .where("userUid", "==", uid)
        .get()
        .then(function (querySnapshot) {
            if (querySnapshot.empty === true) {
               return undefined; 
            }          
            return querySnapshot.docs;
        })
        .catch(function (error) {
            console.log("Error al obtener el usuario por: ", uid);
            console.log(error);
        });
};

// Almacena publicaciones de cada usuario
const obtenerPublish = () => {
    return db
        .collection("/publicaciones")
        .orderBy('date', 'desc')
        .get()
    /*.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
    });
});*/
};

// Guarda publicaciones de cada usuario
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
// Elimina publicaciones 
const deletePublish = (postId) => {
    return db
        .collection("publicaciones")
        .doc(postId)
        .delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
};
// Obtiene el documento a partir de su identificador
const getDoc = (postId) => {
    return db
        .collection("publicaciones")
        .doc(postId)
        .get();
};
// Actualiza datos de colecciones
const updateDoc = (postId, data) => {
    return db
        .collection("publicaciones")
        .doc(postId)
        .update(data);
};

export {
    registerUser,
    obtenerPublish,
    savePublish,
    deletePublish,
    getDoc,
    getUserByEmail,
    updateDoc,
    getPublishByUid
}