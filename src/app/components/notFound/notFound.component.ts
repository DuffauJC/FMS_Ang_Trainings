import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-notfound',
  templateUrl: 'notFound.component.html'
})

export class NotFoundComponent implements OnInit {

  versionState$: Observable<any> | null = null
  errorMessage: String

  constructor(private store: Store<any>) {
    this.errorMessage = ""
  }

  ngOnInit() {
    this.versionState$ = this.store.pipe(
      map((state) => state));
    this.versionState$.subscribe(data => this.errorMessage = data.trainings.errorMessage)

  }

}