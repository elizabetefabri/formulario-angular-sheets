import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

import { User } from '../../Models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl: string = 'https://backend-eosin-phi.vercel.app';
  private currentUser: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.accessToken);
          localStorage.setItem('userName', response.user.name);
          this.currentUser.next(response.user);
        }),
        catchError((error) => {
          alert('Email ou senha incorretos.');
          throw error;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
    this.currentUser.next(null);
  }

  getUsers(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get<any>(`${this.apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
