import { AngularFirebaseChallengePage } from './app.po';

describe('angular-firebase-challenge App', () => {
  let page: AngularFirebaseChallengePage;

  beforeEach(() => {
    page = new AngularFirebaseChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
