import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FakebackendService } from 'src/fakebackend.service';





@Component({
  selector: 'app-the-p2',
  templateUrl: './the-p2.component.html',
  styleUrls: ['./the-p2.component.css']
})
export class TheP2Component implements OnInit {

  constructor( 
    private fakebackendService:FakebackendService, 
    private httpClient:HttpClient,

    ) { }
    theItemsData:any
    theTest:any
    thePassedDataofP2:any = 'No Value Of P2'
    displayStyleOfShow = "none";
    displayStyleOfEdit = "none";
    theBuyersData
    detailOfItem
    selectedBuyer
    restOfItems = []
    theSelectedFromBuyer = []
    theSelectedFromAll = []

  ngOnInit(): void {
    
    this.passDataFromP1Fn()
    this.theGetBuyers()
  }
  
  passDataFromP1Fn(){
    this.fakebackendService.thePassedData.subscribe(theD=>{
      this.theItemsData = theD
      console.log( 'this.theP2Data',this.theItemsData );
    })
    
  }
  
  theGetBuyers(){
    this.fakebackendService.get('buyers').subscribe( theD=>{
      this.theBuyersData = theD
      console.log( 'this.theBuyersData',this.theBuyersData );
    })
  }
  
  openPopupOfShow() {
    this.displayStyleOfShow = "block";
  }
  closePopupOfShow() {
    this.displayStyleOfShow = "none";
  }

  openPopupOfEdit() {
    this.displayStyleOfEdit = "block";
  }
  closePopupOfEdit() {
    this.displayStyleOfEdit = "none";
  }

  showItem(theItemId){
    console.log( theItemId );
    this.passDataFromP1Fn()
    this.openPopupOfShow()
    console.log( 'theItemsData',this.theItemsData,theItemId );
    let theItem 
    this.detailOfItem = this.theItemsData?.filter( theD=>{
      return theD.id == theItemId
    })
    console.log( 'theItem',theItem );
  }

  editItem(theBuyer){
    console.log( theBuyer );
    this.selectedBuyer = theBuyer
    this.calcuRest()
    this.openPopupOfEdit()
  }

  buyerChenck(theE){

    if ( theE.target.checked && (this.theSelectedFromBuyer.indexOf( theE.target.value ) == -1) ) {
      this.theSelectedFromBuyer.push(theE.target.value)
    }
    if ( !theE.target.checked && (this.theSelectedFromBuyer.indexOf( theE.target.value ) !== -1) ) {
      this.theSelectedFromBuyer.splice( this.theSelectedFromBuyer.indexOf( theE.target.value ),1 )
    }
    
  }
  
  restChenck(theE){

    if ( theE.target.checked && (this.theSelectedFromAll.indexOf( theE.target.value ) == -1) ) {
      this.theSelectedFromAll.push(theE.target.value)
    }
    if ( !theE.target.checked && (this.theSelectedFromAll.indexOf( theE.target.value ) !== -1) ) {
      this.theSelectedFromAll.splice( this.theSelectedFromAll.indexOf( theE.target.value ),1 )
    }
    
  }
  
  doTheEditeFromBuyer(){

    this.theSelectedFromBuyer.map(theE=>{
      if ( this.selectedBuyer.having.indexOf(theE)>-1 ) {
        console.log( 'this.theSelectedFromBuyer.indexOf(theE.id)',this.selectedBuyer.having.indexOf(theE) );
        this.restOfItems.push( this.selectedBuyer.having[ this.selectedBuyer.having.indexOf(theE) ] )
        this.selectedBuyer.having.splice( this.selectedBuyer.having.indexOf(theE),1 )
      }
    })
    
  }
  
  doTheEditeFromAll(){

    this.theSelectedFromAll.map(theE=>{
      if ( this.restOfItems.indexOf(theE)>-1 ) {
        console.log( 'this.theSelectedFromBuyer.indexOf(theE.id)',this.restOfItems.indexOf(theE) );
        this.selectedBuyer.having.push( this.restOfItems[ this.restOfItems.indexOf(theE) ] )
        this.restOfItems.splice( this.restOfItems.indexOf(theE),1 )
      }
    })
    
  }

  calcuRest(){
    let theTemp = []
    this.theItemsData.map(theE=>{
      theTemp.push(theE.id)
    })

    this.theBuyersData.map(theE=>{
      theE.having.map(theD=>{
        if ( theTemp.indexOf(theD) > -1 ) {
          theTemp.splice( theTemp.indexOf(theD),1 )
        }
      })
    })
    this.restOfItems = theTemp
  }
  

}
