import { Component, OnInit } from '@angular/core';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  fund:Fund = {};

  constructor(private route:ActivatedRoute, private fundService: FundService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.fundService.getFund(myid).subscribe(payload=>{
        console.log(payload);
        this.fund = payload;
      })
    })
  }
}
