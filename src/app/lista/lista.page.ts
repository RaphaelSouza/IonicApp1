import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  listaEmpregados: any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.carregarLista();
  }

  carregarLista(){
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    .subscribe(data => {
     this.listaEmpregados = data;
    }, err => {
      console.log(err);
    });
  
  }

}
