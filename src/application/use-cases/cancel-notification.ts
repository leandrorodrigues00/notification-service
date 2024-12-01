import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification =
      await this.notificationsRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }

    /*
     * We have two alternatives:
     * 1. Delete the notification from the database.
     * 2. Cancel notification.
     *
     * We chose to cancel the notification, as this way we keep a record
     * how many notifications were canceled after being sent.
     * This metric is useful for further analysis.
     */

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
