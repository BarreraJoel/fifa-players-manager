import { API_CONFIG } from '@/config/api.config';
import { RegisterDto, RegisterResponse } from '@/interfaces/auth';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public register(data: RegisterDto): Observable<HttpResponse<RegisterResponse>> {
    return this.httpClient.post<RegisterResponse>(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.auth.register}`,
      data, { observe: "response" }
    );
  }

}
