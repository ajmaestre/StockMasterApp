import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../interfaces/session';
import { Response } from '../interfaces/response';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getSession(session: Session): Observable<Response>{
    return this.http.post<Response>(`${environment.baseUrl}/usuario/login`, session);
  }

}
