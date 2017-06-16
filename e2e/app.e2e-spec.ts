import { TodoistExtendedPage } from './app.po';

describe('todoist-extended App', () => {
  let page: TodoistExtendedPage;

  beforeEach(() => {
    page = new TodoistExtendedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Todoist Extended!!');
  });
});
