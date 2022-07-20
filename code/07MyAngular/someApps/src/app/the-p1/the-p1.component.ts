// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FakebackendService } from 'src/fakebackend.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-the-p1',
  templateUrl: './the-p1.component.html',
  styleUrls: ['./the-p1.component.css']
})
export class TheP1Component implements OnInit {

  constructor(
    // private httpClient:HttpClient,
    private fakebackendService:FakebackendService
  ) { }

  theOriP1Data
  theCoptP1Data
  thePassedDataofP1 = 'nothing~'
  theInputValue:any = ''
  theDropdownValue:any = 'items'
  theDropdownList = []

  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
    this.fakebackendService.get("items").subscribe(theD=>{
      this.theOriP1Data = theD
      this.theCoptP1Data = this.theOriP1Data.concat()
      this.fakebackendService.thePassedData.next(this.theOriP1Data)
      this.getKeys()
    },err=>{ console.log(err) })
  }
  theSearchFN(theE){
    console.log('theE',theE.target.value);
    
    this.theCoptP1Data = this.theOriP1Data.concat()
    this.theCoptP1Data = this.theCoptP1Data?.filter(theI=>{
      return theI[this.theDropdownValue]?.toString()?.indexOf(this.theInputValue) > -1
    })

    if (theE.target.value === 'the30Days' ) {
      this.theCoptP1Data = this.theOriP1Data.concat()
      let thePast30D = new Date().getTime() - 1000 * 60 * 60 * 24 * 30
      console.log( new Date(thePast30D) );

      this.theCoptP1Data = this.theCoptP1Data?.filter(theI=>{
        return new Date(theI?.date) >= new Date(thePast30D)
      })
      console.log( this.theCoptP1Data );
    }
  }
  thePut(){
    let theT = {"id": "id001","items": "item1","price": "9999","date": "2022-07-11T12:10:04","note": "note01"}
    this.fakebackendService.put(theT).subscribe(theD=>{
      console.log( 'Put',theD );
      window.location.reload()
    })
  }
  getKeys(){
    this.theDropdownList = Object.keys(this.theOriP1Data[0])
  }
  theSort(){
    // thet = this.theCoptP1Data.sort((a, b) =>( b.id - a.id) ? 1 : -1  )
    this.theCoptP1Data.sort((a, b) =>( new Date(b.date).getTime() - new Date(a.date).getTime() )  )
    let theA = 'date'
    this.theCoptP1Data = _.orderBy(this.theCoptP1Data, [theA],'desc')
  }

}
