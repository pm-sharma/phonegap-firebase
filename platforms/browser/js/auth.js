//get data
// const db = firebase.firestore();
// db.collection('titles').get().then(snapshot =>{
//     console.log(snapshot.docs);
//     setupTitles(snapshot.docs);
// })


//listen for auth status change
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
      db.collection('titles').get().then(snapshot =>{
      setupTitles(snapshot.docs);
      })  

    } else {
      console.log('user logged out');
      setupTitles([]);

    }
})


//signup auth

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email,password);
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(credentials => {
        console.log(credentials.user);
        // close the signup modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});  

//logout 

    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
    
});  


//login

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // info lena
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // authentication 
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    // use materialize library to close the momdal 
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});