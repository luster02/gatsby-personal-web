import firebase from 'gatsby-plugin-firebase'


export function getProjects() {
    let array = []
    return firebase
        .firestore()
        .collection("projects")
        .orderBy('title')
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                let union = {}
                union.id = doc.id
                union.data = doc.data()
                array.push(union)
            })
            return array
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
            return []
        });

}