import { Component, OnInit } from '@angular/core';
import { Fund } from '../fund/fund.model';
import { ActivatedRoute } from '@angular/router';
import { FundService } from '../fund.service';

@Component({
  selector: 'app-edit-funds',
  templateUrl: './edit-funds.component.html',
  styleUrls: ['./edit-funds.component.scss']
})
export class EditFundsComponent implements OnInit {
  
  targetFund:Fund ={

  }

  constructor(private fundService: FundService) { }
  funds:Fund[] = [];
  orginalFund:Fund = {}

  ngOnInit(): void {
    this.fundService.getFunds().subscribe(payload =>{
      this.funds = payload;
    })

  }
  editFund(){
    if(this.orginalFund.id == null){
      alert("Please Select an ETF")
      return
    }
    this.fundService.deleteFund(this.orginalFund.id)
    this.fundService.postFund(this.targetFund)
    console.log("EDITED FUND ", this.targetFund)
    console.log("Original FUND ",this.orginalFund)
    window.location.reload()

    //this.fundService.deleteFund()
  }
  deleteFund(){
    if(this.orginalFund.id == null){
      alert("Please Select an ETF")
    }else{
      this.fundService.deleteFund(this.orginalFund.id)
    }
    window.location.reload()


  }
  addFund(){
    if(this.targetFund.name == null){
      alert("Please enter a name")
      return
    }
    this.fundService.postFund(this.targetFund)
    window.location.reload()

  }
  assignTargetFund(fund:Fund){
    this.targetFund = fund
    this.fundService.getFund(fund.id).subscribe(payload =>{
      this.orginalFund = payload;
    })

    console.log("Taarget FUND", this.targetFund)
  }
  cancelEditFund(){
    window.location.reload()
  }


}
