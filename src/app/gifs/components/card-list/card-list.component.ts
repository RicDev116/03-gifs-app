import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CardListComponent { }
