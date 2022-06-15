import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/services/authentificate.service';
import { AppState, TrainingsStateEnum } from 'src/app/ngrx/app.state';
import { GetAllTrainingsAction} from 'src/app/ngrx/trainings.action';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, Resolve<any>{

    trainings$: Observable<AppState> | null = null
    readonly trainingsStateEnum = TrainingsStateEnum;

    constructor(
        private router: Router,
        private authenticateService: AuthenticateService,
        private store: Store<any>
    ) {

    }
    resolve() {
        if (this.trainingsStateEnum.INITIAL) {
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