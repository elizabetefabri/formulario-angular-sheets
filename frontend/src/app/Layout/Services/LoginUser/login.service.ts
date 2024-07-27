import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../Models/User';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/Shared/Components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrl: string = 'https://backend-eosin-phi.vercel.app';
  constructor(
    private http: HttpClient,

    public dialog: MatDialog
  ) { }

  private getAuthorizationHeader(): HttpHeaders {
    const token = localStorage.getItem('token') ?? '';
    return new HttpHeaders({
      'Content-type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  registerUser(user: User): Observable<User> {
    const headers = this.getAuthorizationHeader();
    return this.http.post<User>(`${this.apiUrl}/users`, user, { headers }).pipe(
      catchError((error) => {
        this.onError('Erro ao cadastrar usuário. 😕');
        return of(user);
      })
    );
  }
  listUsers(): Observable<User[]> {
    const headers = this.getAuthorizationHeader();
    return this.http.get<User[]>(`${this.apiUrl}/users`, { headers }).pipe(
      catchError((error) => {
        this.onError('Erro ao carregar usuários. 😕');
        return of([]);
      })
    );
  }

  deleteUser(id: string): Observable<void> {
    const headers = this.getAuthorizationHeader();
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`, { headers }).pipe(
      catchError((error) => {
        this.onError('Erro ao excluir usuário. 😕');
        return of();
      })
    );
  }

  updateUser(user: User): Observable<User> {
    const headers = this.getAuthorizationHeader();
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user, { headers }).pipe(
      catchError((error) => {
        this.onError('Erro ao atualizar usuário. 😕');
        return of(user);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
