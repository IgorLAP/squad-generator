import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'squad-card',
  templateUrl: './squad-card.component.html',
  styleUrls: ['./squad-card.component.scss']
})
export class SquadCardComponent implements OnInit {

  @Input() content!: [];
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.content)
  }

}
