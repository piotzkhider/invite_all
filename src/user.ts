export interface User {
  id: string;
  is_bot: boolean;
  deleted: boolean;
  is_app_user: boolean;
  is_restricted: boolean;
  is_ultra_restricted: boolean;
  is_stranger: boolean;
}
