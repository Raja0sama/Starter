import auth from '@react-native-firebase/auth';


// these are Authentication functions that user will going to be using
// in the applicaiton. 



//Email and password Login 

export const LoginWithEmailAndPassword = (email,password) => {
 return new Promise ((resolve,reject) => {
    auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      resolve({login:"success",user});
    })
    .catch(error => {

  
      if (error.code === 'auth/invalid-email') {
        reject('That email address is invalid!');
      }
      if (error.code === 'auth/user-not-found') {
        reject('No user found associated with this email');
      }
  
      reject(error);
    });
 })
}

// Email and password Sign Uop

export const SignUpWithEmailAndPassword = (username,password) => {
   return new Promise ((resolve,reject) => {
    
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then((res) => {
        resolve(res)
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }
    
        reject(error);
      });
   }) 
}


// Login with Phone Number 

export default LoginWithPhoneNumber =  (phoneNumber) => {
  return  auth().signInWithPhoneNumber(phoneNumber)
}


// Logout.

export const Logout = () => {
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}