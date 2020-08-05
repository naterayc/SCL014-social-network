var db = firebase.firestore();

export const firebaseregister = () => {
    db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        })
};

// firebaseregister();
export const obtenerPublish = () => {
    db.collection("/publicaciones").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            console.log(doc.data());
        });
    });
};
// obtenerPublish();