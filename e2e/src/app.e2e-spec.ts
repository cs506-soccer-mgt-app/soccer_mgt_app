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
    browser.wait(EC.presenceOf(userTitle), 4000);
    expect(userTitle.getText()).toEqual('Home');
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
      browser.wait(EC.presenceOf(userTitle), 4000);
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
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
    });

    it('allows navigation to edit-team', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var editTeam = element(by.css('.edit-team'));
      var editTitle = element(by.css('.edit-title'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      editTeam.click();
      browser.wait(EC.presenceOf(editTitle), 4000);
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
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      addGame.click();
      browser.wait(EC.visibilityOf(addGameTitle), 4000);
      expect(addGameTitle.getText()).toEqual('Add Game');
    });

    it('allows navigation to game-details', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 4000);
      expect(gameTitle.getText()).toEqual('Game Details');
    });

    it('allows navigation to edit-game', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      var editGame = element(by.css('.edit-game'));
      var editTitle = element(by.css('.edit-title'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 4000);
      expect(gameTitle.getText()).toEqual('Game Details');
      browser.executeScript('arguments[0].scrollIntoView()', editGame.getWebElement());
      browser.wait(EC.visibilityOf(editGame), 4000);
      editGame.click();
      browser.wait(EC.presenceOf(editTitle), 4000);
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
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 4000);
      expect(gameTitle.getText()).toEqual('Game Details');
      browser.executeScript('arguments[0].scrollIntoView()', editGame.getWebElement());
      browser.wait(EC.visibilityOf(editGame),4000);
      editGame.click();
      browser.wait(EC.presenceOf(editTitle), 4000);
      expect(editTitle.getText()).toEqual('Edit Game');
      browser.wait(EC.presenceOf(inputOpponent),4000);
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
      browser.wait(EC.presenceOf(gameTitle),4000);
      expect(gameTitle.getText()).toEqual('Game Details');
      expect(opponent.getText()).toEqual('The Team');
      browser.executeScript('arguments[0].scrollIntoView()', editGame.getWebElement());
      browser.wait(EC.visibilityOf(editGame),4000);
      editGame.click();
      browser.wait(EC.presenceOf(editTitle), 4000);
      expect(editTitle.getText()).toEqual('Edit Game');
      browser.wait(EC.presenceOf(inputOpponent),4000);
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
      expect(gameTitle.getText()).toEqual('Game Details');
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
      browser.wait(EC.presenceOf(userTitle), 4000);
      expect(userTitle.getText()).toEqual('Home');
    });

    //hadevik@hotelnextmail.com Password_1
     it('Allows navigation to Home Page', () => {
       var userTitle = element(by.css('.user-title'));
       browser.wait(EC.presenceOf(userTitle), 4000);
       expect(userTitle.getText()).toEqual('Home');
     });

     it('allows navigation to Join Team Page', () => {
       var joinTeam = element(by.css('.join-team'));
       var joinTitle = element(by.css('.join-team-title'));
       joinTeam.click();
       expect(joinTitle.getText()).toEqual('Join Team');
     });

    it('allows navigation to Personal Info Page', () => {
      var personalInfo = element(by.css('.personal-info'));
      var personalTitle = element(by.css('.personal-info-title'));
      personalInfo.click();
      expect(personalTitle.getText()).toEqual('Edit Profile');
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
      personalInfo.click();
      expect(personalTitle.getText()).toEqual('Edit Profile');
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
      save.click();
      browser.wait(EC.visibilityOf(loginEmail), 4000);
      loginEmail.click();
      loginEmail.sendKeys('hadevik@hotelnextmail.com');
      loginPassword.click();
      loginPassword.sendKeys('Password_1');
      loginButton.click();
      browser.wait(EC.presenceOf(userTitle), 4000);
      expect(userTitle.getText()).toEqual('Home');
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
      save.click();
    });

    it('allows navigation to Create Team Page', () => {
      var createTeam = element(by.css('.create-team'));
      var createTitle = element(by.css('.create-title'));
      createTeam.click();
      expect(createTitle.getText()).toEqual('Create Team');
    });

    it('allows navigation to Create Team Page', () => {
      var createTeam = element(by.css('.create-team'));
      var createTitle = element(by.css('.create-title'));
      createTeam.click();
      expect(createTitle.getText()).toEqual('Create Team');
    });

    it('Edit team button is not visible', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var editTeam = element(by.css('.edit-team'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      expect(EC.invisibilityOf(editTeam));
    });

    it('Add game button is not visible', ()=> {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var addGame = element(by.css('.add-game'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      expect(EC.invisibilityOf(addGame));
    });

    it('allows navigation to all-games-list', () => {
      var menu = element.all(by.css('.header')).get(0);
      var games = element.all(by.css('ion-item.in-list')).get(2);
      var gamesTitle = element.all(by.css('ion-title.title-md')).get(1);
      menu.click();
      games.click();
      expect(gamesTitle.getText()).toEqual('Games');
    });

    it('allows navigation to game-details', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 4000);
      expect(gameTitle.getText()).toEqual('Game Details');
    });

    it('Edit game button is not visible', () => {
      var team = element.all(by.css('.team')).get(0);
      var teamTitle = element(by.css('.team-title'));
      var game = element.all(by.css('.game')).get(0);
      var gameTitle = element(by.css('.game-title'));
      var editGame = element(by.css('.edit-game'));
      browser.wait(EC.visibilityOf(team), 4000);
      team.click();
      browser.wait(EC.visibilityOf(teamTitle), 4000);
      expect(teamTitle.getText()).toEqual('Test');
      game.click();
      browser.wait(EC.visibilityOf(gameTitle), 4000);
      expect(gameTitle.getText()).toEqual('Game Details');
      expect(EC.invisibilityOf(editGame));
    });
  });
});
