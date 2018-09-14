using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BLL
{
  public  class ClienteBLL
    {

        public void GuardarDatos(string clienteid, string nombre, string apellido, string dni,string  email, string fecha,string marca, string modelo)
        {

            try
            {
                var cliente = new Clientes()
                {
                    IdCliente = clienteid,
                    Nombre = nombre.ToUpper(),
                    Apellido = apellido.ToUpper(),
                    DNI = dni,
                    Email = email.ToUpper(),
                    FechaNacimiento = Convert.ToDateTime(fecha),
                    Marca = Convert.ToInt32(marca),
                    Modelo = Convert.ToInt32(modelo)
                };          
                

                var clienteDal = new ClienteDAL();

                clienteDal.GuardarDatos(cliente);


            }
            catch (Exception)
            {

                throw;
            }

        }

        public Clientes ObtenerDatos(string userid)
        {
            var clienteDal = new ClienteDAL();
            var cliente = new Clientes();

            cliente = clienteDal.ObtenerDatos(userid);

            return cliente;


        }
    }
}
