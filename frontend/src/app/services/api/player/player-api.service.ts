import { API_CONFIG } from '@/config/api.config';
import { GetPlayersPaginateResponse } from '@/interfaces/player';
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
}
