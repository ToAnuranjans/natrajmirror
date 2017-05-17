import { NatrajmirrorPage } from './app.po';

describe('natrajmirror App', () => {
  let page: NatrajmirrorPage;

  beforeEach(() => {
    page = new NatrajmirrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
