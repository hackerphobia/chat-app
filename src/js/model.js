const model = {};

model.register = async ({firstname,lastname,email,password,cfPassword}) => {
  console.log(email,password);
  // console.log(firebase.auth())
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)

    console.log(firebase.auth().currentUser.uid);

    firebase.auth().currentUser.updateProfile({
      displayName: firstname + ' ' + lastname,
    })
    firebase.auth().currentUser.sendEmailVerification();
  } catch (error) {
    console.log(error);
    view.setErrorMessage(".err-msg-local",error.message);
  } 
} 

model.login = async ({text_inp,pwd_inp}) => {
  console.log(text_inp,pwd_inp);

  try {
    await firebase.auth().signInWithEmailAndPassword(text_inp,pwd_inp);
    console.log(firebase.auth().currentUser.uid);
  } catch (err) {
    // console.log(err.message);
    view.setErrorMessage('.err-msg-local',err.message);
  }

}

model.logout = () => {
  firebase.auth().signOut().then(() => {
    console.log("LOG OUT !!!");
  }).catch((err) => {
    console.log(err);
  });
}
