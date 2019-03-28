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
  private game = {
    date: "",
    opponent: "",
    score: "",
    time: "",
    team_id: null
  }

  /**
   * Constructor for the page
   * 
   * @param activatedRoute
   * @param gameService
   * @param navCtrl
   * 
   * @return null
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService,
    protected navCtrl: NavController
  ) { }

  ngOnInit() { }

  /**
   * Handle when OK button is clicked
   * 
   * @todo Parameter team_id is hard coded in createGame method call need to fix later.
   * 
   * @return null
   */
  handleOkButtonClick() {
    console.log(this.game.date, this.game.time,
      this.game.opponent, this.game.score, this.game.team_id);
    this.gameService.createGame(this.game.date, this.game.time,
      this.game.opponent, this.game.score, 3).subscribe(data => {
        console.log(data);
    });
  }

   /**
   * Handle when Cancel button is clicked
   * 
   * @return null
   */
  handleCancelButtonClick() { }
}
