const signInButton = document.querySelector(".button")
console.log(signInButton)

signInButton.addEventListener("click", () => {
    console.log("clicked")
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user
        console.log("log in succes!", user)
        window.location = "writeNote.html"
    })
    .catch(error => {
        console.log("log in failed", error)
    })
})
