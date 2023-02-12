import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {

  /*
    Api call 
  */
 userObj={
  userId:10,
  userName:"Piyush"
 };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userObj;
  }
 
  
}
