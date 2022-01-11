import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent implements OnInit {

  @Input() hiddenColumns:string[] = [];
  @Input() columns:string[] = [];
  @Output() btnClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onFilterbtnClick(column:string){
    if(this.hiddenColumns.includes(column)){
      this.hiddenColumns = this.hiddenColumns.filter((cl) => {
        return cl !== column
      })
    }else {
      this.hiddenColumns.push(column);
    }

    this.btnClicked.emit(this.hiddenColumns);
  }

  isHidden(column:string){
    return this.hiddenColumns.includes(column);
  }

  isShown(column:string){
    return !this.isHidden(column)
  }

  getButtonClass(column:string){
    return this.isHidden(column) ? 'btn-danger' : 'btn-primary';
   }


}
