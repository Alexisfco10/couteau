import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {
  nom:string
  universidades:any

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  universidad(){
    let nombre = this.nom
    this.http.get('http://universities.hipolabs.com/search?country=' + nombre)
    .subscribe(res => {
      this.universidades = res
      console.log(this.universidades);
    })
  }

}
