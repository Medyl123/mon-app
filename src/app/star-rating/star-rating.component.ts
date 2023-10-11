import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{
  //la taille de l étoile correspondante
  public starwidth: number = 0.0;
  //nombre d etoile qu aura chaque icone
  @Input() // injecte les element parent au fils
  public rating!: number | null ; // ajout de | null
  // 125 est le nombre de pixel dans le css et 5 est le nombre d etoile max
  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starwidth = this.rating! * 125 / 5;
// ajout de !
  }

  public sendRating():void{
    this.starRatingClicked.emit(`La note est de ${this.rating}`);
  }

}
