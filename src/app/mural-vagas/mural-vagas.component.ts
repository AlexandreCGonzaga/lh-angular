import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {
 public vagas : Vaga[] = [];
  constructor(private_vagasService:VagasService) { }

  ngOnInit(): void {
    this.ListarVagas();
  }
listarVagas(){
  this.vagasService.getVagas()
  .subscribe(
    retornaVaga =>{
      this.vagas = retornVaga.map(
        item=> {
          return new Vaga();

        }
      )
    }
  )
}
}
