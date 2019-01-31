import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification, NotificationService } from '../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification-area',
  templateUrl: './notification-area.component.html',
  styleUrls: ['./notification-area.component.scss']
})
export class NotificationAreaComponent implements OnInit, OnDestroy {

  public notification: Notification;

  private subscription: Subscription;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe(notification => {
      this.notification = notification;
    });
    this.notificationService.start();
  }

  ngOnDestroy() {
    this.notificationService.stop();
    this.subscription.unsubscribe();
  }

  public close(): void {
    this.notification = null;
  }
}
