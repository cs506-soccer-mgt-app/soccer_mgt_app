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

  private game;
  constructor(private gameService: GameService, private route: ActivatedRoute) {


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

    this.game = this.gameService.getGameDetail(this.gameID).subscribe(data => {
      //console.log(data);
      this.game = data;
      console.log(this.game);
      //this.date = data.date;
      //this.time = data.time;
      //this.opponent = data.opponent;
      //this.score = data.score;
    });
    //console.log('game',this.game);

  }

}
