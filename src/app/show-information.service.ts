import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowInformation } from './show_information';

@Injectable({
  providedIn: 'root'
})
export class ShowInformationService {
  httpClient: any;

  constructor(private http:HttpClient) { }

  public addMovie(admin:ShowInformation){
    return this.http.post("http://localhost:8080/movie/admin/admin",admin,{responseType:'text' as 'json'})
  }
  public editMovie(admin:ShowInformation){
    return this.http.put("http://localhost:8080/movie/admin/movie",admin,{responseType:'text' as 'json'})
  }
  public deleteMovie(showid:number){

    return this.http.delete("http://localhost:8080/movie/admin/movie"+showid)

  }

  public addShow(show:ShowInformation){
    return this.http.post("http://localhost:8080/movie/show/add",show,{responseType:'text' as 'json'})
  }

  public updateShow(show:ShowInformation){
    return this.http.put("http://localhost:8080/movie/show/update",show,{responseType:'text' as 'json'})
  }

  public displayMovie(){
   return this.http.get("http://localhost:8080/movie/admin/movie");
  }


  public deleteShow(Showid:number){
    return this.http.delete("http://localhost:8080/movie/show/movie"+Showid)
  }

 

}
