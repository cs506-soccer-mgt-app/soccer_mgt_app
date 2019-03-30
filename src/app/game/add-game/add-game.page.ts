/**
 * Class for handling the Add Game page
 * 
 * @author Matthew Wright (matthew.wright@wisc.edu)
 */
import { Component, OnInit } from '@angular/core';
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
export class AddGamePage implements OnInit {
  /**
   * Gobal variables for Add Game class
   * 
   */
  private game = { };
  private teamID;

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
    private route: ActivatedRoute,
    private gameService: GameService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.teamID = this.route.snapshot.paramMap.get('id');
  }

  /**
   * Handle when OK button is clicked
   * 
   * @todo Remove console.log() methods later.
   * 
   * @return null
   */
  handleOkButtonClick() {
    console.log(this.game); // TODO : FIX DATE TIME BUG
    this.gameService.createGame(this.game.date, this.game.time, this.game.opponent, this.game.score, this.teamID)
        .subscribe(data => {
          this.navCtrl.navigateBack(['/team-details', this.teamID]);
        }, err => {
          console.log(err);
        });
  }
}
