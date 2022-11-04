import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  key: string = 'ca289e0f44e9807e98365ce4c64c6768'
  ciudad: string
  resultado: any
  weather: string[]
  description: string
  main: string


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  clima(){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.ciudad + '&appid=' + this.key
    

    this.http.get(url)
    .subscribe(res =>{
      this.resultado = res
      console.log(this.resultado)
    })
  }

}
