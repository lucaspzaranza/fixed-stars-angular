import { Injectable } from '@angular/core';
import starsData from '../../../data/fixedStars.json'
import { FixedStar } from '../models/fixedStar';

@Injectable({
  providedIn: 'root'
})
export class StarsService {

  constructor() { }

  getStars(): Array<FixedStar> {
    const allStars: Array<FixedStar> = starsData as Array<FixedStar>;
    return allStars;
  }
}
