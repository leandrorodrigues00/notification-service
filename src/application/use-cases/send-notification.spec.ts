import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification';

const notifications: Notification[] = [];

const NotificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(NotificationRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    console.log(notifications);
    expect(notifications).toHaveLength(1);
  });
});
