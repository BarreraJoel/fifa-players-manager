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
        this.players.set({
          items: [{
            id: 10,
            fifa_version: "19",
            fifa_update: "5",
            long_name: "Enzo Perez",
            player_face_url: "https://img.a.transfermarkt.technology/portrait/big/56066-1625771376.png?lm=1",
            nationality_name: "Argentina",
            club_name: "River Plate",
            age: 32,
            player_positions: "MCD",
            preferred_foot: "Left",
            overall: 72,
            potential: 74,
            pace: 72,
            shooting: 57,
            passing: 79,
            dribbling: 32,
            defending: 53,
            physic: 77
          }],
          total_count: 4,
          paginate_info: {
            has_next: false,
            has_previous: false,
            next_cursor: null,
            prev_cursor: null,
          },
        });
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
