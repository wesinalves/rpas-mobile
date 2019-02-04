import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_TOKEN = environment.apiToken;

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  currentIssue: any

  constructor(private http: HttpClient) {  }

  getData(url){

  	return this.http.get(`${API_URL}/${url}?apiToken=${API_TOKEN}`)
  		
  }
}
