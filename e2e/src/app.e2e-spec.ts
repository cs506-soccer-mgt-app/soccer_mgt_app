import { AppPage } from './app.po';
import { TeamDetailsPage } from '../../src/app/team/team-details/team-details.page';
import { TeamService } from '../../../soccer_mgt_app/src/app/services/team.service';
import { browser, by, element, ExpectedConditions, Key } from 'protractor';
import {ActivatedRoute} from '@angular/router';
describe('new App', () => {
  let teamService: TeamService;
  let route: ActivatedRoute;
  const app = new AppPage();
  const teams = new TeamDetailsPage(teamService, route);
  var EC = ExpectedConditions;
  describe('E2E tests', () => {
    browser.driver.manage().window().maximize();
    beforeEach(() => {
      browser.get('/home');
    });
    it('Home screen appears', () => {
      app.getPageOneTitleText().then(title => {
        expect(title).toEqual('Home');
      });

    });
    it('allows navigation to Team 1(GOAT Team)', () => {
      app.navigateTo('team-details/1');
      browser.wait(ExpectedConditions.visibilityOf(element(by.id('title'))), 3000);
    });
    it('displays GOAT Team info', () => {
      app.navigateTo('team-details/1');
      expect(element(by.id('title')).getText()).toEqual('GOAT');
    });
    //Problems with rendering the button if it's off the AppPage
    //set to a team with no games as a workaround currently
    //figure out how to scroll down
    it('allows navigation to Add Game Team 2', ()=> {
      app.navigateTo('team-details/2');
      var el = element(by.id('Add-Game'));
      var e = element(by.id('add-game-title'));
      el.click();
      browser.wait(EC.presenceOf(e), 10000);
    });
    it('allows navigation to Create Team Page', () => {
      app.navigateTo('create-team');
      expect(element(by.id('title')).getText()).toEqual('Create Team');
    });
    it('allows navigation to game-details 1', () => {
      app.navigateTo('team-details/1');
      app.navigateTo('game-details/1');
      expect(element(by.id('title')).getText()).toEqual('Game Details');
    });
    it('allows navigation to edit-game 1', () => {
      app.navigateTo('team-details/1');
      app.navigateTo('game-details/1');
      element(by.id('Edit-Game')).click();
      var e = element(by.id('edit-title'));
      browser.wait(EC.presenceOf(e), 10000);
      expect(element(by.id('edit-title')).getText()).toEqual('Edit Game');
    });
    it('allows navigation to edit-team 2', () => {
      app.navigateTo('team-details/2');
      element(by.id('Edit-Team')).click();
      var e = element(by.id('edit-title'));
      browser.wait(EC.presenceOf(e), 10000);
      expect(element(by.id('edit-title')).getText()).toEqual('Edit Wolf');
    });
    it('allows editing of game 1', () => {
      app.navigateTo('team-details/1');
      app.navigateTo('game-details/1');
      var editButton = element(by.id('Edit-Game'));
      browser.wait(EC.presenceOf(editButton),10000);
      element(by.id('Edit-Game')).click();
      var editTitle = element(by.id('edit-title'));
      browser.wait(EC.presenceOf(editTitle), 10000);
      expect(editTitle.getText()).toEqual('Edit Game');
      var inputOpponent = element.all(by.css('.native-input.sc-ion-input-md')).get(0);
      browser.wait(EC.presenceOf(inputOpponent),10000);
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
      element(by.id('save')).click();
      var gameTitle = element(by.id('title'));
      browser.wait(EC.presenceOf(gameTitle),10000);
      expect(element(by.id('title')).getText()).toEqual('Game Details');
      expect(element(by.id('opponent')).getText()).toEqual('The Team');
      browser.wait(EC.presenceOf(editButton),5000);
      element(by.id('Edit-Game')).click();
      browser.wait(EC.presenceOf(editTitle), 10000);
      expect(editTitle.getText()).toEqual('Edit Game');
      browser.wait(EC.presenceOf(inputOpponent),10000);
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
      element(by.id('save')).click();
      var editTitle = element(by.id('title'));
      browser.wait(EC.presenceOf(editTitle),10000);
      expect(element(by.id('title')).getText()).toEqual('Game Details');
      expect(element(by.id('opponent')).getText()).toEqual('Team 9');
    });
  });
});
