import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetInitDataResponseModel, GetInitResponseModel } from './app.component';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

// export interface GetInitDataResponseModel {
//   data:GetInitResponseModel
// }
export class HttpService {
  private url = 'https://apimocha.com/jimmytest1124/api/second';

  constructor(private http: HttpClient) {}

  getInitResponse() {
    return this.http.get<GetInitDataResponseModel>(this.url).pipe(
      map((response) => {
        return {
          subjects: response.data,
        };
      })
    );
  }
}
