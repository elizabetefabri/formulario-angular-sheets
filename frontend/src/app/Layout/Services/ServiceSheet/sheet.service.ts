import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environments';
import { UserSheet } from '../../Models/UserSheet';

@Injectable({
  providedIn: 'root',
})
export class SheetService {
  private apiUrl = `${environment.API}`;

  constructor(private http: HttpClient) {}

  createSheet(formData: any): Observable<UserSheet> {
    return this.http.post<UserSheet>(this.apiUrl, formData);
  }

  listSheet(): Observable<UserSheet[]> {
    return this.http.get<UserSheet[]>(this.apiUrl);
  }

  deleteSheet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getSheetDataById(id: number): Observable<UserSheet> {
    return this.http.get<UserSheet>(`${this.apiUrl}/${id}`);
  }

  updateSheet(id: number, formData: any): Observable<UserSheet> {
    return this.http.put<UserSheet>(`${this.apiUrl}/${id}`, formData);
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addData(rowData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, rowData);
  }
}
