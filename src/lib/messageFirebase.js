import firebase from 'gatsby-plugin-firebase'

export function saveOnFB(message = "") {
    return firebase
        .firestore()
        .collection("messages")
        .add({ data: message })
        .then(function (docRef) {
            return true
        })
        .catch(function (error) {
            return false
        });

}