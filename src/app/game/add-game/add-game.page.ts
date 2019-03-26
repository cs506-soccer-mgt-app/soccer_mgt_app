/**
 * Class for handling the Add Game page
 * 
 * @author Matthew Wright (matthew.wright@wisc.edu)
 */
import { Component, OnInit } from '@angular/core';
import { AlertController, IonApp, LoadingController, NavController } from '@ionic/angular';

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
   * Game Date-Time String
   * 
   * @var string
   */
  //protected game_date-time: string ="";

  /**
   * Game Opponent String
   * 
   * @var string
   */
  //protected game_opponent: string ="";

  /**
   * Constructor for the page
   * 
   * @param navCtrl
   * 
   * @return null
   */
  constructor(
    protected alertCtrl: AlertController,
    protected app: IonApp,
    protected loadingCtrl: LoadingController,
    protected navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  /**
   * Handle when OK button is clicked
   * 
   * @return null
   */
  handleOkButtonClick() {
    this.navCtrl.navigateForward('TeamDetailsPage');
  }

   /**
   * Handle when Cancel button is clicked
   * 
   * @return null
   */
  handleCancelButtonClick() {
    this.navCtrl.navigateBack('TeamDetailsPage');
  }
}
