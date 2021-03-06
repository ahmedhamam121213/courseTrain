import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { User } from "firebase";
import { Observable } from "rxjs";
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable <User>;

  constructor( private afAuth : AngularFireAuth , private route : ActivatedRoute ) { 
    this.user$ = afAuth.authState;
  }

  login(){
    if( this.route.snapshot.queryParamMap.get("returnUrl") ){
      // let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") ; 
      // localStorage.setItem('returnUrl' , returnUrl);
    }else{

      let returnUrl = "/" ; 
      localStorage.setItem('returnUrl' , returnUrl);

    }
    
    
    this.afAuth.auth.signInWithRedirect( new auth.GoogleAuthProvider() );
  }
  logout(){
    
    this.afAuth.auth.signOut();
  }
}
