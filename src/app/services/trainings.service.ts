import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Training } from '../model/training.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class TrainingsService {
    constructor(private http: HttpClient) { }

    public getTrainings() {
        return this.http.get<Training[]>(environment.host + "/trainings")
    }
    public postTraining(data: any) {
        //console.log(data);
        this.http.post<any>(environment.host + "/trainings", data)
            .subscribe(response => {
                console.log(response)
            })
    }
    public delItem(training: Training) {
        //console.log(training)
        this.http.delete(environment.host + "/trainings/" + training.id)
            .subscribe(response => {
            console.log(response)
        })
    }
    public updateTraining(data:any) {
        //console.log(data);
        this.http.put<any>(environment.host + "/trainings/"+data.id, data)
            .subscribe(response => {
                console.log(response)
            })
    }
}