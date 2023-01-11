import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssssd',
  templateUrl: './ssssd.component.html',
  styleUrls: ['./ssssd.component.scss']
})
export class SsssdComponent implements OnInit {
  [x: string]: any;
  page = 1;
  passenger: any;
  itemsPerPage = 6;
  totalItems : any;
  p: number = 1;
   collection: any = [];

    games = [
        {
            "id": "1",
            "name": "DOTA 2",
            "genre": "Strategy"
        },
        {
            "id": "2",
            "name": "AOE 3",
            "genre": "Strategy"
        },
        {
            "id": "3",
            "name": "GTA 5",
            "genre": "RPG"
        },
        {
            "id": "4",
            "name": "Far Cry 3",
            "genre": "Action"
        },
        {
            "id": "5",
            "name": "GTA San Andreas",
            "genre": "RPG"
        },
        {
            "id": "6",
            "name": "Hitman",
            "genre": "Action"
        },
        {
            "id": "7",
            "name": "NFS MW",
            "genre": "Sport"
        }, {
            "id": "8",
            "name": "Fifa 16",
            "genre": "Sport"

        }, {
            "id": "9",
            "name": "NFS Sen 2",
            "genre": "Sport"

        }, {
            "id": "10",
            "name": "Witcher Assasins on King",
            "genre": "Adventure"
        }

    ];

  constructor() {
    // for (let i = 1; i <= 100; i++) {
    //   this.collection.push(item {i});
    // }
  }

  ngOnInit() {
  }
  // getAllData() {
  //   this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${1}&size=${this.itemsPerPage}`).subscribe((data: any) => {
  //     this.passenger =  data.data;
  //     this.totalItems = data.totalPassengers;
  //   })
  // }
  // gty(page: any){
  //   this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
  //     this.passenger =  data.data;
  //     this.totalItems = data.totalPassengers;
  //   })
  // }
}
function item(item: any, $: any, arg2: { i: number; }) {
  throw new Error('Function not implemented.');
}

