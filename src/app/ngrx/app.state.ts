import { Training } from "../model/training.model";

export enum TrainingsStateEnum { // les différents états du state
    LOADING = 'Loading', //chargement en cours
    LOADED = 'Loaded', //chargé
    ERROR = 'Error', //erreur
    INITIAL = 'Initial', //état initial
}
export interface AppState {
    trainings: Training[];  
    errorMessage: string;
    versionState:TrainingsStateEnum
}

export const initState: AppState= {
    trainings: [],
    errorMessage: "",
    versionState:TrainingsStateEnum.INITIAL
}