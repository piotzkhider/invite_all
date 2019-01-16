import HTTPResponse = GoogleAppsScript.URL_Fetch.HTTPResponse;
import { User } from './user';
import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

export class SlackService {
  static token: string = PropertiesService.getScriptProperties().getProperty('TOKEN');

  static listUsers(): User[] {
    const options: URLFetchRequestOptions = {
      payload: {
        token: this.token
      }
    };

    const response: HTTPResponse = UrlFetchApp.fetch('https://slack.com/api/users.list', options);

    const parsed: any = JSON.parse(response.getContentText());
    const members: User[] = parsed.members;

    return members.filter(function(user: User) {
      return !(
        user.is_bot ||
        user.deleted ||
        user.is_app_user ||
        user.is_restricted ||
        user.is_ultra_restricted ||
        user.is_stranger
      );
    });
  }

  static inviteUsersToChannel(channelId: string, users: User[]): void {
    const token = this.token;

    const requests: Object[] = users.map(function(user: User) {
      return {
        url: 'https://slack.com/api/channels.invite',
        method: 'POST',
        payload: {
          token: token,
          channel: channelId,
          user: user.id
        },
        muteHttpExceptions: true
      };
    });

    UrlFetchApp.fetchAll(requests);
  }
}
