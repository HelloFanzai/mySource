import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServerService } from 'src/app/data-server.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {


  myId: string = '';
  myData: any = [];

  constructor(
    private route: ActivatedRoute,
    private dataServer: DataServerService,
  ) {
    this.route.params.subscribe(params => {
      this.myId = params['id'];
      console.log(`Received ID: ${this.myId}`);
          
    });
  }

  ngOnInit() {
    this.getData();
  }

  getData(){ 

    this.dataServer.getData(this.myId).subscribe((data) => {
      this.myData = data;
      console.log('Data fetched successfully:', data);
    }, (error) => {
      console.error('Error fetching data:', error);
    });

  }


    

}
