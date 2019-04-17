import { browser, by, element, ExpectedConditions, Key } from 'protractor';

describe('MSTMA ', () => {
  var EC = ExpectedConditions;
  browser.driver.manage().window().maximize();

  it('Login screen appears', () => {
    browser.get('/login');
    var loginTitle = element(by.css('.login-title'));
    expect(loginTitle.getText()).toEqual('MSTMA - Sign in');
  });

  it('Allows user to log in', () => {
    var inputEmail = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
    var inputPassword = element.all(by.css('.native-input.sc-ion-input-md')).get(1);
    var loginButton = element(by.css('.submit-btn'));
    var userTitle = element(by.css('.user-title'));
    inputEmail.click();
    inputEmail.sendKeys('netal@maillink.top');
    inputPassword.click();
    inputPassword.sendKeys('Password_1');
    loginButton.click();
    browser.wait(EC.presenceOf(userTitle), 3000);
    expect(userTitle.getText()).toEqual('Home');
  });

  describe('E2E tests', () => {

    beforeEach(() => {
      var inputEmail = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
      var inputPassword = element.all(by.css('.native-input.sc-ion-input-md')).get(1);
      var loginButton = element(by.css('.submit-btn'));
      var userTitle = element(by.css('.user-title'));
      browser.get('/login');
      inputEmail.click();
      inputEmail.sendKeys('netal@maillink.top');
      inputPassword.click();
      inputPassword.sendKeys('Password_1');
      loginButton.click();
      browser.wait(EC.presenceOf(userTitle), 3000);
      expect(userTitle.getText()).toEqual('Home');
    });
    //netal@maillink.top Password_1

    it('allows navigation to Create Team Page', () => {
      var createTeam = element(by.css('.create-team'));
      var createTitle = element(by.css('.create-title'));
      createTeam.click();
      expect(createTitle.getText()).toEqual('Create Team');
    });

    it('allows navigation to Team Page', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      browser.wait(EC.visibilityOf(team), 3000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 3000);
      expect(teamTitle.getText()).toEqual('Test');
    });

    it('allows navigation to edit-team', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var editTeam = element(by.css('.edit-team'));
      var editTitle = element(by.css('.edit-title'));
      browser.wait(EC.visibilityOf(team), 3000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 3000);
      expect(teamTitle.getText()).toEqual('Test');
      editTeam.click();
      browser.wait(EC.presenceOf(editTitle), 3000);
      expect(editTitle.getText()).toEqual('Edit Test');
    });
    // //Problems with rendering the button if it's off the AppPage
    // //set to a team with no games as a workaround currently
    // //figure out how to scroll down
    it('allows navigation to Add Game', ()=> {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var addGame = element(by.css('.add-game'));
      var addGameTitle = element(by.css('.add-game-title'));
      browser.wait(EC.visibilityOf(team), 3000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 3000);
      expect(teamTitle.getText()).toEqual('Test');
      addGame.click();
      browser.wait(EC.visibilityOf(addGameTitle), 3000);
      expect(addGameTitle.getText()).toEqual('Add Game');
    });

    it('allows navigation to game-details', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      browser.wait(EC.visibilityOf(team), 3000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 3000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 3000);
      expect(gameTitle.getText()).toEqual('Game Details');
    });

    it('allows navigation to edit-game', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      var editGame = element(by.css('.edit-game'));
      var editTitle = element(by.css('.edit-title'));
      browser.wait(EC.visibilityOf(team), 3000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 3000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 3000);
      expect(gameTitle.getText()).toEqual('Game Details');
      editGame.click();
      browser.wait(EC.presenceOf(editTitle), 3000);
      expect(editTitle.getText()).toEqual('Edit Game');
    });

    it('allows editing of game', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      var editGame = element(by.css('.edit-game'));
      var editTitle = element(by.css('.edit-title'));
      var inputOpponent = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
      var save = element(by.css('.save'));
      var opponent = element(by.css('.opponent'));
      browser.wait(EC.visibilityOf(team), 3000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 3000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 3000);
      expect(gameTitle.getText()).toEqual('Game Details');
      browser.wait(EC.presenceOf(editGame),3000);
      editGame.click();
      browser.wait(EC.presenceOf(editTitle), 3000);
      expect(editTitle.getText()).toEqual('Edit Game');
      browser.wait(EC.presenceOf(inputOpponent),3000);
      inputOpponent.click();
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys('The Team');
      save.click();
      browser.wait(EC.presenceOf(gameTitle),3000);
      expect(gameTitle.getText()).toEqual('Game Details');
      expect(opponent.getText()).toEqual('The Team');
      browser.wait(EC.presenceOf(editGame),3000);
      editGame.click();
      browser.wait(EC.presenceOf(editTitle), 3000);
      expect(editTitle.getText()).toEqual('Edit Game');
      browser.wait(EC.presenceOf(inputOpponent),3000);
      inputOpponent.click();
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys(Key.BACK_SPACE);
      inputOpponent.sendKeys('Team 9');
      save.click();
      browser.wait(EC.presenceOf(gameTitle),3000);
      expect(gameTitle.getText()).toEqual('Game Details');
      expect(opponent.getText()).toEqual('Team 9');
    });
  });
});
