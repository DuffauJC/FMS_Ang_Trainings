import { Component, OnInit } from '@angular/core';
import { TrainingsStateEnum } from 'src/app/ngrx/app.state';
@Component({
    selector: 'app-notfound',
    templateUrl: 'notFound.component.html'
})

export class NotFoundComponent implements OnInit {

    readonly trainingsStateEnum = TrainingsStateEnum;
    requestError=false
    constructor() { }

    ngOnInit() {
          if (this.trainingsStateEnum.ERROR) {
            this.requestError=true
          }
    }
  
}