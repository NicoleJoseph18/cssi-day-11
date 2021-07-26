let googleUser = null
let timeObj = new Date();
window.onload = () => {   //when window finishes loading
    firebase.auth().onAuthStateChanged(user => {
        if (user) { //if there's a user already logged in
            console.log("logged in as", user.displayName)
            alert("WELCOME " + user.displayName + "!!!");
            googleUser = user;
        } else {
            console.log("not logged in")
        }
    })

    const createNoteButton = document.querySelector("#createNoteButton")
    createNoteButton.addEventListener("click", () => {
        //get values from input
        noteTitle = document.querySelector("#noteTitle").value
        noteText = document.querySelector("#noteText").value
        note


        //write this data into database
        firebase.database().ref(`/users/${googleUser.uid}`).push({
            title: noteTitle,
            text: noteText
            time : timeObj.getHours() + ":" + timeObj.getMinutes() + ":" + timeObj.getSeconds();
        }).then(() => {
            console.log("database write successful")
            document.querySelector("#noteTitle").value = ""
            document.querySelector("#noteText").value = ""
        }).catch(error => {
            console.log("error writing new note: ", error)
        })

    })
}