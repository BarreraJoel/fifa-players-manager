import { API_CONFIG } from '@/config/api.config';
import { CreatePlayerRequest, CreatePlayerResponse, EditPlayerRequest, EditPlayerResponse, GetPlayerByIdResponse, GetPlayersPaginateResponse } from '@/interfaces/player';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  constructor(private httpClient: HttpClient) { }

  public getPlayersPaginate(limit: number, navParams?: { after?: string, before?: string }): Observable<HttpResponse<GetPlayersPaginateResponse>> {
    let queryParams = `?limit=${limit}`;
    if (navParams) {
      queryParams += navParams.after ? `&after=${navParams.after}` : '';
      queryParams += navParams.before ? `&before=${navParams.before}` : '';
    }

    return this.httpClient.get<GetPlayersPaginateResponse>(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.players.getPlayers}${queryParams}`, { observe: "response", withCredentials: true }
    );
  }

  public getPlayerById(playerId: number): Observable<HttpResponse<GetPlayerByIdResponse>> {
    return this.httpClient.get<GetPlayerByIdResponse>(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.players.getPlayer.replace(
        ':id',
        playerId.toString()
      )}`, { observe: "response", withCredentials: true }
    );
  }

  public getPlayerImage(playerId: number) {
    return `${API_CONFIG.baseURL}${API_CONFIG.endpoints.players.getPlayerImage.replace(
      ':id',
      playerId.toString()
    )}`;
  }

  public create(data: CreatePlayerRequest): Observable<HttpResponse<CreatePlayerResponse>> {
    return this.httpClient.post<CreatePlayerResponse>(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.players.createPlayer}`,
      data, { observe: "response" }
    );
  }

  public edit(playerId: number, data: EditPlayerRequest): Observable<HttpResponse<EditPlayerResponse>> {
    return this.httpClient.put<EditPlayerResponse>(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.players.editPlayer.replace(
        ':id',
        playerId.toString()
      )}`, data, { observe: "response" }
    );
  }

}
