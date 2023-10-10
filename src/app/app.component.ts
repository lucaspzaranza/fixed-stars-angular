import { Component, OnInit } from '@angular/core';
import { StarsService } from './src/services/stars.service';
import { FixedStar } from './src/models/fixedStar';

const defaultStringValue = "Digite o nome de uma estrela para filtrar a busca."

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fixed Stars';
  fixedStars: Array<FixedStar> = new Array<FixedStar>;
  filteredSearch: string = defaultStringValue;
  clickedIndexes: Array<boolean> = new Array<boolean>();

  filteredFixedStars: Array<FixedStar>;

  constructor(private starService: StarsService) {
    this.fixedStars = this.starService.getStars();
    this.filteredFixedStars = this.fixedStars;

    for (let index = 0; index < this.fixedStars.length; index++) {
      this.clickedIndexes.push(false);
    }
  }

  toggleShowStarContent(index: number) {
    this.clickedIndexes[index] = !this.clickedIndexes[index];
  }

  getFilteredSearchValue(value: string): void {

    this.filteredSearch = value.length > 0? value : defaultStringValue;

    this.filteredFixedStars = this.filteredSearch === defaultStringValue ? this.fixedStars : 
      this.fixedStars.filter(star => star.name.toLocaleLowerCase().includes(this.filteredSearch));

      if(this.filteredFixedStars.length === 0 ) {
        this.filteredSearch = "Sua busca não encontrou nenhum resultado.";
      }
  }
}
