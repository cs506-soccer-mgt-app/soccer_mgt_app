import { browser, by, element, ExpectedConditions, Key } from 'protractor';

describe('MSTMA ', () => {
  var EC = ExpectedConditions;
  browser.driver.manage().window().maximize();

  it('Login screen appears', () => {
    browser.get('/login');
    var loginTitle = element(by.css('.login-title'));
    expect(loginTitle.getText()).toEqual('Soccer Management - Sign In');
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
    browser.sleep(250);
    browser.wait(EC.presenceOf(userTitle),4000);
  });

  describe('E2E tests Manager', () => {

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
      browser.sleep(250);
      browser.wait(EC.presenceOf(userTitle),4000);
    });
    //netal@maillink.top Password_1

    it('allows navigation to Create Team Page', () => {
      var createTeam = element(by.css('.create-team'));
      var createTitle = element(by.css('.create-title'));
      browser.executeScript('arguments[0].scrollIntoView()', createTeam.getWebElement());
      browser.wait(EC.visibilityOf(createTeam),4000);
      createTeam.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(createTitle),4000);
    });

    it('allows navigation to Team Page', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
    });

    it('allows navigation to edit-team', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var editTeam = element(by.css('.edit-team'));
      var editTitle = element(by.css('.edit-title'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', editTeam.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(editTeam), 4000);
      editTeam.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(editTitle), 4000);
      expect(editTitle.getText()).toEqual('Edit Test');
    });
    it('allows navigation to Add Game', ()=> {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var addGame = element(by.css('.add-game'));
      var addGameTitle = element(by.css('.add-game-title'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', addGame.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(addGame), 4000);
      addGame.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(addGameTitle), 4000);
    });

    it('allows navigation to game-details', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', game.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(game), 4000);
      game.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(gameTitle), 4000);
    });

    it('allows navigation to edit-game', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      var editGame = element(by.css('.edit-game'));
      var editTitle = element(by.css('.edit-title'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', game.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(game), 4000);
      game.click();
      browser.executeScript('arguments[0].scrollIntoView()', editGame.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(editGame), 4000);
      editGame.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(editTitle), 4000);
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
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', game.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(game), 4000);
      game.click();
      browser.sleep(250);
      browser.executeScript('arguments[0].scrollIntoView()', editGame.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(editGame),4000);
      editGame.click();
      browser.wait(EC.visibilityOf(inputOpponent),4000);
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
      browser.sleep(250);
      browser.wait(EC.presenceOf(gameTitle),4000);
      expect(opponent.getText()).toEqual('The Team');
      browser.executeScript('arguments[0].scrollIntoView()', editGame.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(editGame),4000);
      editGame.click();
      browser.wait(EC.visibilityOf(inputOpponent),4000);
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
      browser.wait(EC.presenceOf(gameTitle),4000);
      expect(opponent.getText()).toEqual('Team 9');
    });


  });

  describe('E2E tests Player', () => {
    beforeEach(() => {
      var inputEmail = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
      var inputPassword = element.all(by.css('.native-input.sc-ion-input-md')).get(1);
      var loginButton = element(by.css('.submit-btn'));
      var userTitle = element(by.css('.user-title'));
      browser.get('/login');
      inputEmail.click();
      inputEmail.sendKeys('hadevik@hotelnextmail.com');
      inputPassword.click();
      inputPassword.sendKeys('Password_1');
      loginButton.click();
      browser.sleep(250);
      browser.wait(EC.presenceOf(userTitle), 4000);
    });

    //hadevik@hotelnextmail.com Password_1
     it('Allows navigation to Home Page', () => {
       var userTitle = element(by.css('.user-title'));
       browser.wait(EC.presenceOf(userTitle), 4000);
     });

     it('allows navigation to Join Team Page', () => {
       var joinTeam = element(by.css('.join-team'));
       var joinTitle = element(by.css('.join-team-title'));
       browser.executeScript('arguments[0].scrollIntoView()', joinTeam.getWebElement());
       browser.sleep(250);
       joinTeam.click();
       browser.wait(EC.presenceOf(joinTitle),4000);
     });

    it('allows navigation to Personal Info Page', () => {
      var personalInfo = element(by.css('.personal-info'));
      var personalTitle = element(by.css('.personal-info-title'));
      browser.executeScript('arguments[0].scrollIntoView()', personalInfo.getWebElement());
      browser.sleep(250);
      personalInfo.click();
      browser.wait(EC.presenceOf(personalTitle),4000);
    });

    it('allows editing of Personal Info Page', () => {
      var personalInfo = element(by.css('.personal-info'));
      var personalTitle = element(by.css('.personal-info-title'));
      var inputName = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
      var inputEmail = element.all(by.css('.native-input.sc-ion-input-md')).get(3);
      var inputPassword = element.all(by.css('.native-input.sc-ion-input-md')).get(4);
      var loginEmail = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
      var loginPassword = element.all(by.css('.native-input.sc-ion-input-md')).get(1);
      var save = element(by.css('.submit-btn'));
      var userName = element(by.css('.user-name'));
      var loginButton = element(by.css('.submit-btn'));
      var userTitle = element(by.css('.user-title'));
      browser.executeScript('arguments[0].scrollIntoView()', personalInfo.getWebElement());
      browser.sleep(250);
      personalInfo.click();
      browser.wait(EC.presenceOf(personalTitle),4000);
      inputName.click();
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys('Testing');
      inputEmail.click();
      inputEmail.sendKeys('hadevik@hotelnextmail.com');
      inputPassword.click();
      inputPassword.sendKeys('Password_1');
      browser.executeScript('arguments[0].scrollIntoView()', save.getWebElement());
      browser.sleep(250);
      save.click();
      browser.wait(EC.visibilityOf(loginEmail), 4000);
      loginEmail.click();
      loginEmail.sendKeys('hadevik@hotelnextmail.com');
      loginPassword.click();
      loginPassword.sendKeys('Password_1');
      loginButton.click();
      browser.wait(EC.presenceOf(userTitle), 4000);
      browser.executeScript('arguments[0].scrollIntoView()', personalInfo.getWebElement());
      browser.sleep(250);
      personalInfo.click();
      expect(userName.getAttribute('value')).toEqual('Testing');
      inputName.click();
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys(Key.BACK_SPACE);
      inputName.sendKeys('Test');
      inputEmail.click();
      inputEmail.sendKeys('hadevik@hotelnextmail.com');
      inputPassword.click();
      inputPassword.sendKeys('Password_1');
      browser.executeScript('arguments[0].scrollIntoView()', save.getWebElement());
      browser.sleep(250);
      save.click();
    });

    it('allows navigation to Create Team Page', () => {
      var createTeam = element(by.css('.create-team'));
      var createTitle = element(by.css('.create-title'));
      browser.executeScript('arguments[0].scrollIntoView()', createTeam.getWebElement());
      browser.sleep(250);
      createTeam.click();
      browser.wait(EC.presenceOf(createTitle),4000);
    });

    it('Edit team button is not visible', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var editTeam = element(by.css('.edit-team'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(EC.invisibilityOf(editTeam));
    });

    it('Add game button is not visible', ()=> {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var addGame = element(by.css('.add-game'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(EC.invisibilityOf(addGame));
    });

    it('allows navigation to all-games-list', () => {
      var menu = element.all(by.css('.header')).get(0);
      var games = element.all(by.css('ion-item.in-list')).get(2);
      var gamesTitle = element.all(by.css('ion-title.title-md')).get(1);
      menu.click();
      games.click();
      browser.wait(EC.presenceOf(gamesTitle),4000);
    });

    it('allows navigation to game-details', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', game.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(game), 4000);
      game.click();
      browser.wait(EC.presenceOf(gameTitle), 4000);
    });

    it('Edit game button is not visible', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      var editGame = element(by.css('.edit-game'));
      browser.executeScript('arguments[0].scrollIntoView()', team.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.executeScript('arguments[0].scrollIntoView()', game.getWebElement());
      browser.sleep(250);
      browser.wait(EC.visibilityOf(game), 4000);
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 4000);
      expect(EC.invisibilityOf(editGame));
    });
  });
});
