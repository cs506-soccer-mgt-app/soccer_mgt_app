/**
 * Class for handling the Add Game page
 * 
 * @author Matthew Wright (matthew.wright@wisc.edu)
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.page.html',
  styleUrls: ['./add-game.page.scss'],
})

/**
 * Add Game Class
 */
export class AddGamePage implements OnInit, OnDestroy {
  /**
   * Gobal variables for Add Game class
   * 
   */
  game = {
    date: '',
    opponent: '',
    score: '',
    location: '',
    time: '',
    team_id: null
  };

  public teamID;

  /**
   * Constructor for the page
   * 
   * @param route
   * @param gameService
   * @param navCtrl
   * 
   * @return null
   */
  constructor(
    public route: ActivatedRoute,
    public gameService: GameService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  ngOnDestroy() {
  }

  /**
   * Handle when OK button is clicked
   * 
   * @todo Remove console.log() methods later.
   * 
   * @return null
   */
  handleOkButtonClick() {
    this.game.date = this.game.date.split('T')[0];
    this.game.time = this.game.time.split('T')[1];
    this.gameService.createGame(this.game.date, this.game.time, this.game.opponent, this.game.score, this.game.location, this.teamID)
        .subscribe(data => {
          this.navCtrl.navigateBack(['/team-details', this.teamID]);
        }, err => {
          console.log(err);
        });
  }
}
