import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  standalone: false,
})
export class HomePageComponent {
  constructor(private giftService: GifsService) { }

  get gifs():Gif[] {
    return this.giftService.gifsList;
  };
}
