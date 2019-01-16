import { VerificationToken } from './verification.token';
import { SlackService } from './slack.service';
import { Request } from './request';
import TextOutput = GoogleAppsScript.Content.TextOutput;

declare var global: any;

global.doPost = (e: Request): TextOutput => {
  if (!VerificationToken.verify(e.parameter.token)) {
    throw new Error('Invalid token.');
  }

  const users = SlackService.listUsers();

  SlackService.inviteUsersToChannel(e.parameter.channel_id, users);

  return ContentService.createTextOutput(JSON.stringify({ text: 'invited!' })).setMimeType(
    ContentService.MimeType.JSON
  );
};
