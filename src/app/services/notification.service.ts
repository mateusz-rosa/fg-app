import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  class: string;
  message: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private active: boolean;

  private source = new BehaviorSubject<Notification>(null);

  public notifications$ = this.source.asObservable();

  constructor() {
    this.active = false;
  }

  private change(notification: Notification) {
    this.source.next(notification);
  }

  public start() {
    this.active = true;
    this.feed();
  }

  public stop() {
    this.active = false;
  }

  public feed() {
    if (this.active) {
      setTimeout(() => {
        const src = [{ class: 'alert-danger', msg: 'Error'}, { class: 'alert-warning', msg: 'Warning'}, { class: 'alert-info', msg: 'Info'}][Math.floor(Math.random() * 3)];
        this.change({
          class: src.class,
          message: src.msg,
          timestamp: new Date().toDateString()
        })
        this.feed();
      }, (5 + Math.ceil(Math.random() * 5)) * 1000);
    }
  }
}
