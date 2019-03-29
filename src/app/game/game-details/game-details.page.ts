import { Component, OnInit } from '@angular/core';
import { GameService} from '../../services/game.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {

  private items: Array<{ title: string; icon: string }> = [];
  private gameID = null;
  private game;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gameID = this.route.snapshot.paramMap.get('id');

    // if(this.gameID){
    //   this.loadGame();
    // }

    // console.log(this.gameID);

    // for (let i = 1; i < 6; i++) {
    //   this.items.push({
    //     title: 'Player ' + i,
    //     icon: 'football'
    //   });
    // }
  }

  ionViewWillEnter() {
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
    this.gameService.getGameDetail(this.gameID).subscribe(data => {
      this.game = data;
      console.log(this.game);
    });
  }
}
