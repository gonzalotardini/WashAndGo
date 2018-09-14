using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Lavado
    {

        public List<Marcas> ObtenerMarcas()
        {
            var listMarcas = new List<Marcas>();
                       
            var context = new DAL.WGentities();

            listMarcas = context.Marcas.OrderBy(c => c.Descripcion).ToList();

            return listMarcas;

        }

        public List<Modelos> ObtenerModelos(int marca)
        {
            var listModelos = new List<Modelos>();
       
            var context = new DAL.WGentities();

            listModelos = context.Modelos.Where(c => c.IdMarca == marca).ToList();

            return listModelos;

        }

        public Segmentos ObtenerSegmento(int idModelo)
        {
            var segmento = new Segmentos();
            var modelo = new Modelos();
            var context = new DAL.WGentities();


            modelo= context.Modelos.Where(c => c.IdModelo == idModelo).First();

            segmento = context.Segmentos.Where(c => c.IdSegmento == modelo.IdSegmento).First();

            return segmento;
        }

        public List<Servicios> ObtenerServicios()
        {
            var listServicios = new List<Servicios>();

            var context = new DAL.WGentities();

            listServicios = context.Servicios.ToList();

            return listServicios;
        }

        public decimal ObtenerTotal(int idSegmento, int idServicio)
        {
            

            var context = new DAL.WGentities();
            var listaPrecio = new ListaPrecios();
            var fecha = DateTime.Now;

            listaPrecio = context.ListaPrecios.Where(c => c.IdSegmento == idSegmento && c.IdServicio==idServicio
                                                     && fecha>= c.FechaDesde && fecha<=c.FechaHasta).First();

            return listaPrecio.Precio;
            
        }

        public string VerificarClienteDAL (string userid)
        {
            try
            {
                var context = new WGentities();
                var cliente = context.Clientes.Where(c => c.IdCliente == userid).First();

                return cliente.Completo;
            }
            catch (Exception)
            {

                throw;
            }
           
        }
    }
}
