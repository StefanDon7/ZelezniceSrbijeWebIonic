import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  
  constructor(private http:HttpClient) {
    
  }


  vratiStanice(){
    return this.http.get('http://localhost:8089/api/stanica/all')
  }
  vratiStanice2(){
    return this.http.get('http://localhost:8089/api/stanica/all')
  }

  vratiPolaskeZaDanasnjiDan(danas:string){
    return this.http.get('http://localhost:8089/api/polazak/'+danas)
  }

  vratiPolaske(stanicaPocetna:string,stanicaKrajnja:string,datum:string){
    return this.http.get('http://localhost:8089/api/polazak/'+datum+'/'+stanicaPocetna+'/'+stanicaKrajnja)
  }
  rezervisiKartu(klijentID:string,polazakID:string){
    return this.http.post('http://localhost:8089/api/rezervacija/add/',{ "klijentID": klijentID,"polazakID": polazakID})
  }
  vratiMedjustaniceZaPolazak(linijaID:string){
    return this.http.get('http://localhost:8089/api/medjustanica/linija/'+linijaID)
  }
  proveriRezervaciju(klijentID:string,polazakID:string){
    return this.http.post('http://localhost:8089/api/rezervacija/get',{"klijentID": klijentID,"polazakID": polazakID})
  }
}
