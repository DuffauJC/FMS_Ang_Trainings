export enum TrainingsActionsTypes {
  GET_ALL_TRAININGS = '[TRAININGS] Get All TRAININGS',
  GET_ALL_TRAININGS_SUCCESS = '[TRAININGS] Get All TRAININGS Success',
  GET_ALL_TRAININGS_ERROR = '[TRAININGS] Get All TRAININGS Error',
}

//nous définissons ici un objet évènement caractérisé par le type d'évt et son contenu indéfini
export interface ActionEvent {
  type: TrainingsActionsTypes;
  payload?: any;
}

export enum VersionStateEnum {
  LOADING,
  LOADED,
  ERROR,
}

export interface AppDataState<T> {
  versionState?: VersionStateEnum;
  data?: T;
  errorMessage?: string;
}
