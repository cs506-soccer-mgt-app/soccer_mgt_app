import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';
import { formatDate } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.page.html',
  styleUrls: ['./edit-game.page.scss'],
})
export class EditGamePage implements OnInit {

  private items: Array<{ title: string; icon: string }> = [];
  private gameID = null;
  private game;
  private date;
  private time;

  constructor(private gameService: GameService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('id');
    if(this.gameID){
      this.loadGame();
    }

    for (let i = 1; i < 6; i++) {
      this.items.push({
        title: 'Player ' + i,
        icon: 'football'
      });
    }
  }

  handleSaveButtonClick() {
    this.gameService.updateGame(this.gameID, this.game.date, this.game.time,
       this.game.opponent, this.game.score, this.game.team_id)
       .subscribe(data => {
        this.navCtrl.navigateBack(['/game-details', this.gameID]);
      }, err => {
        console.log(err);
     });
  }

  loadGame() {
    this.gameService.getGameDetail(this.gameID).subscribe(data => {
      this.game = data;
      this.date = formatDate(this.game.date, 'YYYY-MM-DD', 'en-US');
    });
  }
}
