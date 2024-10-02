import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "./config";

//!=== INICIALIZACIONES ===!//

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

//*==========AUTH FUNCTIONS==========*//

//== Ingresar con email y contraseña ==//
export const signIn = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const { uid, photoURL, displayName } = user;
  return {
    ok: true,
    uid,
    photoURL,
    displayName,
  };
};

//== Ingresar con google==//
export const signInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, googleProvider);
  const { uid, photoURL, displayName } = user;
  return {
    ok: true,
    uid,
    photoURL,
    displayName,
  };
};

//== Ingresar con github==//
export const signInWithGithub = async () => {
  const { user } = await signInWithPopup(auth, githubProvider);
  const { uid, photoURL, displayName } = user;
  return {
    ok: true,
    uid,
    photoURL,
    displayName,
  };
};

//== Registrarse con email, nombre y contraseña ==//
export const signUp = async ({ email, password, name }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const { uid, displayName } = user;
  await updateProfile(auth.currentUser, {
    displayName: name,
  });
  return {
    ok: true,
    uid,
    displayName,
    email,
    photoURL,
  };
};

//== Reset contraseña ==//
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
  return {
    ok: true,
  };
};
