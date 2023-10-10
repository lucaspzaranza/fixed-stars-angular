import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Output() filteredSearch = new EventEmitter<string>();

  inputValue: string = '';

  getInputValue(): void {
    console.log('inputValue: ', this.inputValue);
  }

  search() {
    this.filteredSearch.emit(this.inputValue);
  }
}
