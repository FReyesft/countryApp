import { Component, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue(searchValue: string) {
    this.onValue.emit(searchValue)
  }

  constructor() { }
  @Input()
  public placeholder: string = '';
  ngOnInit() {
  }

}
