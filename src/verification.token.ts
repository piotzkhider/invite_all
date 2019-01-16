export class VerificationToken {
  static value: string = PropertiesService.getScriptProperties().getProperty('VERIFICATION_TOKEN');

  static verify(token: string): boolean {
    return token === this.value;
  }
}
