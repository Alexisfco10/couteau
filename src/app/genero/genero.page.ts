import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  resultado:string
  nom:string
  image:string
  id:string
  gen:string

  constructor() { }

  ngOnInit() {
  }

  predecir(){
    let nombre = this.nom
    
    fetch('https://api.genderize.io/?name=' + nombre, {method:'GET'}).then((respuesta) => respuesta.json())
      .then( data => mostrarData(data) )
      .catch( error => console.log(error) )
          
          const mostrarData = (data) => {
              console.log(data)
              
              if (data.gender == 'female') {
                this.image = 'assets/img/genero/rosado.jpg'
              }
              else if (data.gender == 'male'){
                this.image = 'assets/img/genero/azul.jpg'
              }
            this.id = "res"
            this.gen = data.gender

          }

    

  }

}
