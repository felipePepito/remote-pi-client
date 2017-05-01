import { RemotePiClientPage } from './app.po';

describe('remote-pi-client App', () => {
  let page: RemotePiClientPage;

  beforeEach(() => {
    page = new RemotePiClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
