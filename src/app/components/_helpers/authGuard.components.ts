import { DoCheck, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Training } from 'src/app/model/training.model';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { GetAllTrainingsAction } from 'src/app/state/trainings.action';
import { selectAllTrainings } from 'src/app/state/trainings.selectors';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, Resolve<any>{
   
    trainings$: Observable<Training[]> | null = null
    listTrainings: Training[] = []; 
    constructor(
        private router: Router,
        private authenticateService: AuthenticateService,
        private store: Store<any>
    ) { 
       
    }
    resolve() {
        this.trainings$ = this.store.select(selectAllTrainings).pipe(
            map((state) => state));
        this.trainings$?.subscribe((data) => (this.listTrainings = data))
        if (this.listTrainings?.length===0) {
             this.store.dispatch(new GetAllTrainingsAction({}));
        }
    }
    
   

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authenticateService.getCustomerFromStorage()
        if (user) {
            //console.log(user)
           // check if route is restricted by role
            if (route.data['roles'] && route.data['roles'].indexOf(user.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }

            // authorised so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}