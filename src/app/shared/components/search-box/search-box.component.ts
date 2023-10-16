import { Component, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  @Output()
  public onValue = new EventEmitter<string>()

  @Output()
  public onDebounce = new EventEmitter<string>()

  @Input()
  public initialValue: string = ''

  emitValue(searchValue: string) {
    this.onValue.emit(searchValue)
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  constructor() { }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe()
  }

  @Input()
  public placeholder: string = '';

  ngOnInit() {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(300)) //Espera a que el observable deje de empitir valores para mandar el valor al subscribe
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
  }

}
