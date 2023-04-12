import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { IUser } from '../../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;
  private userData!: firebase.User;

  constructor(
    public storage: AngularFirestore, // Inject Firestore service
    public auth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) {
    this.usersCollection = storage.collection<IUser>('usuarios');
    this.auth.authState.subscribe((user) => {
      if (user && user.emailVerified) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else if (user && !user.emailVerified) {
        this.SendVerificationMail();
        this.SignOut();
      }
    });
  }

  // Sign in with Google
  GoogleAuth(): Promise<void> {
    return this.AuthLogin(new GoogleAuthProvider()).then(() => {
      this.router.navigate(['./dashboard']);
    });
  }

  // Sign out
  SignOut(): Promise<void> {
    return this.auth.signOut().then(() => {
      const user: firebase.User = JSON.parse(
        localStorage.getItem('user') || '{}',
      );
      this.usersCollection.doc(user.uid).update({ online: false });
      localStorage.clear();
      this.router.navigate(['./security/sign-in']);
    });
  }

  // Auth logic to run auth providers
  private AuthLogin(provider: GoogleAuthProvider): Promise<void> {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.user) {
          this.router.navigate(['./security/dashboard']);
          this.SetUserData(result.user);
        } else {
          this.SignOut();
        }
      })
      .catch((error) => {
        console.error('GoogleAuth', error);
      });
  }

  // Send email verification when new user sign up
  SendVerificationMail(): Promise<void> {
    return this.auth.currentUser.then((user) => user?.sendEmailVerification());
  }

  SetUserData(user: firebase.User): Promise<void> {
    const userRef: AngularFirestoreDocument = this.usersCollection.doc(
      user.uid,
    );
    const userData: IUser = {
      uid: user.uid,
      email: user.email ?? '',
      displayName: user.displayName ?? '',
      photoURL: user.photoURL ?? '',
      emailVerified: user.emailVerified,
      online: true,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
