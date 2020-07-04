import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  urls:{
    regular:string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

    getPhoto(){
      return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random',{
        headers:{
          Authorization:'Client-ID o054-picCnKGuLLnZAox5NZ52vkezCchCM_v1fsx1LM'
        }
      })
    

  }
}
