import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'votacion';
  like = 0;
  notlike = 0;
  novoto = true;
  sivoto = false;
  votos = {
    movie : 'Iron Man',
    like : 8,
    notlike : 2
  }

  ngOnInit(){
    this.calculaPorcentaje();
  }

  calculaPorcentaje(){

    let votantes = this.votos.like + this.votos.notlike;

    let plike = Math.round((this.votos.like / votantes)*100);
    console.log('desde calcula like'+plike);
    localStorage.setItem('like',''+plike);


    let id_like = document.getElementById("like");
    id_like.style.width = plike+'%';

    id_like.innerHTML = localStorage.getItem('like')+'% <i class="bi bi-hand-thumbs-up-fill"></i>';
    
    let id_notlike = document.getElementById("notlike");
    let pnotlike = Math.round((this.votos.notlike / votantes)*100);
    localStorage.setItem('notlike',''+pnotlike);
    id_notlike.style.width = pnotlike+'%';
    id_notlike.innerHTML = localStorage.getItem('notlike')+'% <i class="bi bi-hand-thumbs-down-fill"></i>';
  }

  registraVoto(voto){
    if(voto == 1){
      //like
      this.novoto = false;
      this.sivoto = true;
      this.votos.like = this.votos.like + 1;
      //document.getElementById("like").style.width = '100px';
      console.log(' json:'+this.votos.like);
      this.calculaPorcentaje();
    }
    if(voto == 2){
      //not like
      this.novoto = false;
      this.sivoto = true;
      this.votos.notlike = this.votos.notlike +1;
      console.log(' json:'+this.votos.notlike);
      this.calculaPorcentaje();
    }
  }

  votarnew(){
    this.novoto = true;
    this.sivoto = false;
  }

}
