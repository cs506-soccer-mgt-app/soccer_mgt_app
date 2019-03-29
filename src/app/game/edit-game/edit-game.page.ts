import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.page.html',
  styleUrls: ['./edit-game.page.scss'],
})
export class EditGamePage implements OnInit {

  private items: Array<{ title: string; icon: string }> = [];
  private gameID = null;
  private gameinfo;
  private game = {
    date: "",
    opponent: "",
    score: "",
    time: "",
    team_id: null
  };
  constructor(private gameService: GameService, private route: ActivatedRoute) {


  }

  handleSaveButtonClick() {
    console.log(this.game.date, this.game.time,
      this.game.opponent, this.game.score, this.game.team_id);
    this.gameService.updateGame(this.gameID, this.game.date, this.game.time,
       this.game.opponent, this.game.score, 3).subscribe(data => {
         console.log(data);
     });
  }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('id');
    if(this.gameID){
      this.loadGame();
    }
    console.log(this.gameID);


    for (let i = 1; i < 6; i++) {
      this.items.push({
        title: 'Player ' + i,
        icon: 'football'
      });
    }

  }
  loadGame() {

    this.gameinfo = this.gameService.getGameDetail(this.gameID).subscribe(data => {
      //console.log(data);
      this.gameinfo = data;
      console.log(this.gameinfo);
      //this.date = data.date;
      //this.time = data.time;
      //this.opponent = data.opponent;
      //this.score = data.score;
    });
    //console.log('game',this.game);

  }

}
