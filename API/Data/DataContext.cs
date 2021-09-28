
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        //Lista de propriedades que vão informar qual classes que vão virar tabelas no banco
        public DbSet<Pessoa> Pessoas { get; set; }
    }
}