import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EcosystemService {

  constructor(private http: HttpClient) {
  }

  public getEcosystems(): Observable<Response> {
    return this.http.get(`${environment.API_URL}ecosystems`) as Observable<Response>;
  }

  public getGrowbedsHarvests(id: string): Observable<Response> {
    return this.http.get(`${environment.API_URL}harvests/growbeds/${id}`) as Observable<Response>;
  }

  public getPondsHarvests(id: string): Observable<Response> {
    return this.http.get(`${environment.API_URL}harvests/ponds/${id}`) as Observable<Response>;
  }
}
