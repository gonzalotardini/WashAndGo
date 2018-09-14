using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class ClienteDAL
    {

        public void GuardarDatos(Clientes cliente)
        {   
            using (var context = new WGentities())
            {
                var clienteobtenido = new Clientes();
                clienteobtenido = context.Clientes.Where(c => c.IdCliente == cliente.IdCliente).First();
                clienteobtenido.Nombre = cliente.Nombre;
                clienteobtenido.Apellido = cliente.Apellido;
                clienteobtenido.DNI = cliente.DNI;
                clienteobtenido.Email = cliente.Email;
                clienteobtenido.FechaNacimiento = cliente.FechaNacimiento;
                clienteobtenido.Marca = cliente.Marca;
                clienteobtenido.Modelo = cliente.Modelo;
                clienteobtenido.Completo = "True";

                context.SaveChanges();
            }

           

            

        }

        public Clientes ObtenerDatos(string userid)
        {
            var context = new WGentities();
            var cliente = new Clientes();

            cliente = context.Clientes.Where(c => c.IdCliente == userid).First();

            return cliente;

        }
    }
}
