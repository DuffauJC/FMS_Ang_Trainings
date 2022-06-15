
import { Action } from '@ngrx/store';
import { AppState, initState, TrainingsStateEnum } from './app.state';
import { TrainingsActions, TrainingsActionsTypes } from './trainings.action';

export function TrainingReducer(
    state: AppState = initState,
    action: Action
): AppState {
    switch (
    action.type //pour chaque action, on retourne un clone du state (immutable)
    ) {
        case TrainingsActionsTypes.GET_ALL_TRAININGS:
            return {
                ...state,
                versionState: TrainingsStateEnum.LOADING
            }; //renvoi clone du state + le nouveau dataState
        case TrainingsActionsTypes.GET_ALL_TRAININGS_SUCCESS:
            // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return {
                ...state,
                versionState:TrainingsStateEnum.LOADED,
                trainings: (<TrainingsActions>action).payload,
            };
        // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload
        case TrainingsActionsTypes.GET_ALL_TRAININGS_ERROR:
            return {
                ...state,
                versionState:TrainingsStateEnum.ERROR,
                errorMessage: (<TrainingsActions>action).payload,
            };

        default:
            return { ...state };
    }
}