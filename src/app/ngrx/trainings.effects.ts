import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable,map, mergeMap, catchError, of } from 'rxjs';
import { ApiService } from '../services/api.service'

import { TrainingsActions, TrainingsActionsTypes,GetAllTrainingsActionError,GetAllTrainingsActionSuccess } from './trainings.action';
@Injectable()
    
export class TrainingsEffects {

    constructor(
        private effectActions$: Actions,
        private apiService: ApiService
    ) { }

    getAllTrainings:Observable<TrainingsActions> = createEffect(
        () => 
       this.effectActions$.pipe(
            ofType(TrainingsActionsTypes.GET_ALL_TRAININGS),
            mergeMap((action: TrainingsActions) => this.apiService.getTrainings()
                .pipe(
                    map((trainings) => new GetAllTrainingsActionSuccess(trainings)),
                    catchError((err) =>of(new GetAllTrainingsActionError(err.message))))
                )
            )
        )
                

   
}