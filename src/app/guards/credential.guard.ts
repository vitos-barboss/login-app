import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CHECK');
    // this.router.navigate(['/login']);
    const cred = JSON.parse(localStorage.getItem('credentials'));
    const credValid = JSON.parse(localStorage.getItem('credentialsValid'));

    if (credValid && cred && credValid.email === cred.email && credValid.password === cred.password) {
      console.log('VISIT PAGE');
      return true;

    } else {
      console.log('STOP');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
