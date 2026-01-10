import { API_CONFIG } from '@/config/api.config';
import { GetMetricsResponse } from '@/interfaces/metrics';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetricsApiService {

  constructor(private httpClient: HttpClient) { }

  public getMetrics(): Observable<HttpResponse<GetMetricsResponse>> {
    return this.httpClient.get<GetMetricsResponse>(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.metric.getMetrics}`, { observe: "response", withCredentials: true }
    );
  }
}
