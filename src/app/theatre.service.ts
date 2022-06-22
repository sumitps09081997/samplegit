import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theatre } from './theatre';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

  constructor(private http:HttpClient) { }
 
 public addTheatre(admin:Theatre){
  return this.http.post("http://localhost:8080/movie/admin/admin/{theatre}",admin,{responseType:'text' as 'json'})
 }

 public displayMovie(){
  return this.http.get("http://localhost:8080/movie/admin/movie");
}

}
