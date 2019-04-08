import { AppPage } from './app.po';
import { TeamDetailsPage } from '../../src/app/team/team-details/team-details.page';
import { TeamService } from '../../../soccer_mgt_app/src/app/services/team.service';
import { browser, by, element, ExpectedConditions } from 'protractor';
import {ActivatedRoute} from '@angular/router';
describe('new App', () => {
  let teamService: TeamService;
  let route: ActivatedRoute;
  const app = new AppPage();
  const teams = new TeamDetailsPage(teamService, route);

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
      el.click();
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
      browser.wait(expect(element(by.id('edit-title')).getText()).toEqual('Edit Game'),3000);
    });
    it('allows navigation to edit-team 2', () => {
      app.navigateTo('team-details/2');
      element(by.id('Edit-Team')).click();
      browser.wait(expect(element(by.id('edit-title')).getText()).toEqual('Edit Wolf'),3000);
    });
    /*it('allows editing of game 1', () => {
      app.navigateTo('team-details/1');
      app.navigateTo('game-details/1');
      element(by.id('Edit-Game')).click();
      browser.wait(expect(element(by.id('edit-title')).getText()).toEqual('Edit Game'),3000);
      //element(by.id('input')).sendKeys('The Team');
      element(by.id('save')).click();
      browser.wait(expect(element(by.id('title')).getText()).toEqual('Game Details'),3000);
      expect(element(by.id('opponent')).getText()).toEqual('Team 9');
      element(by.id('Edit-Game')).click();
      browser.wait(expect(element(by.id('edit-title')).getText()).toEqual('Edit Game'),3000);
      //element(by.id('input')).sendKeys('The Other Team');
      element(by.id('save')).click();
      browser.wait(expect(element(by.id('title')).getText()).toEqual('Game Details'),3000);
      expect(element(by.id('opponent')).getText()).toEqual('Team 9');
    });**/
  });
});
