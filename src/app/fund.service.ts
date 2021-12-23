import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private httpClient:HttpClient) { }
   getFunds(): Observable<any> {
    return this.httpClient.get("http://localhost:8082/api/funds");

  }

  getFund(id: any): Observable<any> {
        console.log("Getting")

    return this.httpClient.get("http://localhost:8082/api/funds/"+id);

  }
  postFund(fund:Fund){
        console.log("Posting")

    this.httpClient.post("http://localhost:8082/api/funds",fund)
    .subscribe(
        (val) => {
            console.log("PATCH call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PATCH call in error", response);
        },
        () => {
            console.log("The PATCH observable is now completed.");
        });

  }
  deleteFund(id: any){
    console.log("Deleteing")
    this.httpClient.delete("http://localhost:8082/api/funds/"+id).subscribe(
        (val) => {
            console.log("PATCH call successful value returned in body", 
                        val);
        },
        response => {
            console.log("PATCH call in error", response);
        },
        () => {
            console.log("The PATCH observable is now completed.");
        });
  }
}

