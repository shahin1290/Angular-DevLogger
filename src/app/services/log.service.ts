import { Injectable } from '@angular/core';
import { Log } from '../models/Log'
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs: Log[]

  private logSource = new BehaviorSubject<Log>({id:null, text:null, date:null});
  selectedLog = this.logSource.asObservable();

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date('12/23/2017 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date('12/24/2017 10:54:23')},
      {id: '3', text: 'Added login', date: new Date('12/24/2017 18:54:23')}
    ]
  }
  getLogs():Observable<Log[]>{
    return of(this.logs);
  }

  setFormLog(log: Log){
    this.logSource.next(log)
  }
}
