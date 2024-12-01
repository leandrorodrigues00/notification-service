import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotication: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotication.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
