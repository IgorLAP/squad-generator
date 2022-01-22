import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squad-app',
  templateUrl: './squad-app.component.html',
  styleUrls: ['./squad-app.component.scss']
})
export class SquadAppComponent implements OnInit {

  textArea!: string;

  constructor() { }

  ngOnInit(): void {
  }

  enviar(textArea: string, select: string){
    console.log(textArea.split('\n'));
    console.log(select);
  }

}
