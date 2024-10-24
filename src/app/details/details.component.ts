import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

interface Details {
  productName: string;
  unitNo: number;
  price: number;
  Quantity: number;
  total: number;
  expiryDate: Date;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgbDropdownModule, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  private getUnits = 'https://localhost:7130/api/Unit';

  productName: string = '';

  units: any;

  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._http.get(this.getUnits).subscribe((data) => {
      console.log(data);
      this.units = data;
    });
  }
}
