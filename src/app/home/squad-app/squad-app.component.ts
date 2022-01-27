import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-squad-app',
  templateUrl: './squad-app.component.html',
  styleUrls: ['./squad-app.component.scss']
})
export class SquadAppComponent implements OnInit {

  @ViewChild('textArea') textArea!: ElementRef
  @ViewChild('select') select!: MatSelect
  @ViewChild('quantity') quantity!: ElementRef
  @ViewChildren('squadItem') squadItem!: QueryList<ElementRef>

  showSquad = false;
  squadsNum!: Array<number>;
  dataToCsv: [{}] = [{}];


  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  gerar(){
    if(this.squadItem){
      for(let i in this.squadItem.toArray()){
        Array.from(this.squadItem.toArray()[i].nativeElement.children).forEach((child, index) => {
          if(index != 0){
            this.renderer.removeChild(this.squadItem.toArray()[i].nativeElement, child);
          }
        });
      }
    }
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
    this.squadsNum.forEach((value , index)=>{
      for(let i = 0; i < namesPerSquad; i++){
        let random = Math.floor(Math.random() * names.length);
        if(names[random]){
          const child = this.document.createElement('p');
          child.innerHTML = names[random];
          setTimeout(()=>{
            this.renderer.addClass(this.squadItem.toArray()[index].nativeElement, 'squadItem');
            this.renderer.appendChild(this.squadItem.toArray()[index].nativeElement, child);
          },100)

        }
        names.splice(random, 1);
      }
    })
    this.showSquad = true;
  }

  exportar(){
    if(this.squadItem.toArray().length !== 0){
      this.dataToCsv = [{}];

      let options = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: false,
        title: 'Squad-Generator',
        useBom: true,
        noDownload: false,
        headers: ["SQUADS"]
      };

      for(let i = 0; i < this.squadItem.toArray().length; i++){
        const key = `squad#${i}`;
        const squadArray = this.squadItem.toArray()[i].nativeElement.innerText.split('\n\n');
        squadArray.shift();
        let newTxt = '';
        for(let k in squadArray){
          if(Number(k) + 1 === squadArray.length){
            newTxt += `${squadArray[k]}`;
          } else {
            newTxt += `${squadArray[k]}, `;
          }
        }

        this.dataToCsv.push({
          [key] : newTxt
        })
      }
      new ngxCsv(this.dataToCsv, 'squads', options);
    }

  }

}

