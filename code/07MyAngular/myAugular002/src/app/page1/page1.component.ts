import { Component } from '@angular/core';
import { DataServerService } from '../data-server.service';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  myData:any = []
  serachID: string = '';

  constructor(private dataServer: DataServerService) {
  
  }

  ngOnInit() {
    this.getData();
  }

  getData() {

    console.log(`Fetching data for ID: ${this.serachID}`);
    

    this.dataServer.getData(this.serachID).subscribe((data) => {
      this.myData = data;

      if (Array.isArray(data)) {
        this.myData = data;
      } else{ 
        this.myData = [this.myData];
      } 
      console.log('Data fetched successfully:', this.myData);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }
  
  addData() {
    const newData = {
      items: 'New Item',
      price: 100,
      date: 'data test',
      note: 'This is a new item'
    };
    this.dataServer.postData(newData).subscribe((response) => {
      this.getData(); // Refresh the data after adding
    }, (error) => {
    });
  }

  updeLastData() {
    if (this.myData.length > 0) {
      const lastData = this.myData[this.myData.length - 1];
      lastData.items = 'Updated Item';
      this.dataServer.putData(lastData).subscribe((response) => {
        this.getData(); // Refresh the data after updating
      }, (error) => {
        console.error('Error updating data:', error);
      });
    }
  }

    deleteLastData() {
    if (this.myData.length > 0) {
      const lastData = this.myData[this.myData.length - 1];
      this.dataServer.deleteData(lastData.id).subscribe((response) => {
        console.log('Last data deleted successfully:', response);
        this.getData(); // Refresh the data after deletion
      }, (error) => {
        console.error('Error deleting last data:', error);
      });
    } else {
      console.warn('No data available to delete.');
    }
  }

}
