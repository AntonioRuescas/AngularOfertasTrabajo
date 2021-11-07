export class ContactFormLogin {
  public username: string;
  public password: string;
  public remenberMe: boolean;
  public token: string;

  constructor(
    username: string,
    password: string,
    remenberMe: boolean,
    token: string
  ) {
    this.username = username;
    this.password = password;
    this.remenberMe = remenberMe;
    this.token = token;
  }
}
