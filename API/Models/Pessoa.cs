using System;
using System.Collections.Generic;

namespace API.Models
{

    public class Pessoa
    {
        //Construtor
        public Pessoa()
        {
            CriadoEm = DateTime.Now;
        } 
        public int Id { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public double Altura { get; set; }
        public double Peso { get; set; }
        
        public DateTime CriadoEm { get; set; }
    }
}