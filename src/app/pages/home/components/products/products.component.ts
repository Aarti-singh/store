import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @Output() columnsCountChange = new EventEmitter<number>();
   @Output() columnsCountChange = new EventEmitter<number>();
   @Output() itemsCountChange = new EventEmitter<number>();
   @Output() sortChange = new EventEmitter<string>();
  
  sort = "desc";
  itemShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }


  onSortUpdated(newSort: string): void{
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(count: number): void{
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumnsUpdates(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
   }

}
