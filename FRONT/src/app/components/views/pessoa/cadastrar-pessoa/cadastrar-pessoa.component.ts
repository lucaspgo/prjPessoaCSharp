import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent implements OnInit {
    nome!: string;
    cpf!: string;
    altura!: number;
    peso!: number;

    constructor(private router: Router, private service: PessoaService) {}

    ngOnInit(): void {}

    cadastrar(): void {
        let pessoa: Pessoa = {
            nome: this.nome,
            cpf: this.cpf,
            altura: this.altura,
            peso: this.peso,
        };
        this.service.create(pessoa).subscribe((pessoa) => {
            this.router.navigate(["pessoa/listar"]);
        });
    }

}
