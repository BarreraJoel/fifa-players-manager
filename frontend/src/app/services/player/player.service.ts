import { CreatePlayerRequest, EditPlayerRequest, Player } from '@/interfaces/player';
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
        if (response.body?.data)
          this.players.set(response.body.data.players);
      },
      errorResponse => {
        return null;
      }
    );
  }

  public findPlayer(id: number) {
    return this.api.getPlayerById(id);
  }

  public loadPlayerImage(id: number) {
    return this.api.getPlayerImage(id);
  }

  public createPlayer(data: CreatePlayerRequest) {
    return this.api.create(data);
  }

  public editPlayer(playerId: number, data: EditPlayerRequest) {
    return this.api.edit(playerId, data);
  }

}
