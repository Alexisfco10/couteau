import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {
nom:string
image:string
estado:string
edad:number
resultado:string

  constructor() { }

  ngOnInit() {
  }

  predecir(){
    let nombre = this.nom
    
    fetch('https://api.agify.io/?name=' + nombre, {method:'GET'}).then((respuesta) => respuesta.json())
      .then( data => mostrarData(data) )
      .catch( error => console.log(error) )
          
          const mostrarData = (data) => {
              console.log(data)
              
              if (data.age <= 17) {
                this.estado = 'Joven'
                this.edad = data.age
                this.image = 'assets/img/edad/joven.jpg'
              }
              else if (data.age >= 18 && data.age <=60){
                this.estado = 'Adulto'
                this.edad = data.age
                this.image = 'assets/img/edad/adulto.webp'
              }
              else if (data.age >= 60){
                this.estado = 'Anciano'
                this.edad = data.age
                this.image = 'assets/img/edad/ancianos.webp'
              }
              this.resultado = this.nom + ' tiene ' + this.edad + ' y es ' + this.estado
              document.getElementById('result').innerHTML = this.resultado

          }

    

  }

}
