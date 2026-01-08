import { Player, PlayersPaginate } from '@/interfaces/player';
import { Injectable, signal } from '@angular/core';
import { PlayerApiService } from '../api/player/player-api.service';
import { Paginate } from '@/interfaces/paginate';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players = signal<Paginate<Player>>({
    items: [],
    total_count: 0,
    paginate_info: {
      has_next: false,
      has_previous: false,
      next_cursor: null,
      prev_cursor: null
    },
  });
  public playersPaginate$ = this.players.asReadonly();

  constructor(private api: PlayerApiService) { }

  public loadPlayers(queryParams?: { after?: string, before?: string }) {
    this.api.getPlayersPaginate(10, queryParams).subscribe(
      response => {
        console.log(response.body);
        if (response.body?.data)
          this.players.set(response.body.data.players);
      },
      errorResponse => {
        return null;
      }
    );
  }

}
