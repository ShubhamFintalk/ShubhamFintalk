import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
url='';

  constructor(private http: HttpClient) { }
  signup(form: form){
  this.http.post<any>(this.http, form);
  }
private async request(method: string, url: string, data?: any)
  getEvents() {
    return this.request('GET', `${environment.serverUrl}/event`);
  }

  createEvent(event) {
    return this.request('POST', `${environment.serverUrl}/event`, event);
  }

  updateEvent(event) {
    return this.request('PUT', `${environment.serverUrl}/event/${event.id}`, event);
  }

  deleteEvent(event) {
    return this.request('DELETE', `${environment.serverUrl}/event/${event.id}`);
  }
}
}

