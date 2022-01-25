import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-squad-app',
  templateUrl: './squad-app.component.html',
  styleUrls: ['./squad-app.component.scss']
})
export class SquadAppComponent implements OnInit {

  @ViewChild('textArea') textArea!: ElementRef
  @ViewChild('select') select!: MatSelect
  @ViewChild('quantity') quantity!: ElementRef

  showSquad = false;
  squadsNum!: Array<number>;
  testing: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    this.testing = [];
    const names: string[] = this.textArea.nativeElement.value.split('\n');
    const namesLength = names.length;
    let namesPerSquad: number;
    let numSquads: number;
    if(this.select.value === 'membersSquad'){
      namesPerSquad = this.quantity.nativeElement.value
      numSquads = Math.ceil(namesLength / namesPerSquad);
    } else {
      numSquads = Number(this.quantity.nativeElement.value);
      namesPerSquad = namesLength / numSquads
    }
    this.squadsNum = Array(numSquads).fill('').map((x,i)=>i);
    this.squadsNum.forEach(()=>{
      for(let i = 0; i < namesPerSquad; i++){
        let random = Math.floor(Math.random() * names.length);
        if(names[random]){
          this.testing.push(names[random])
        }
        names.splice(random, 1)
      }
    })
    this.showSquad = true;
  }

}
