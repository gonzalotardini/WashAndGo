using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DAL;
using Newtonsoft.Json;
using BLL;
using Microsoft.AspNet.Identity;
using System.Globalization;
using System.Net;
using DAL.Views;

namespace WashAndGo.Controllers
{
  
    public class SolicitarLavadoController : Controller
    {
        // GET: SolicitarLavado
        public ActionResult Index()
        {

            return View();
        }


        [Authorize]
        public string obtenerMarcas()
        {
                   
            var lavado = new Lavado();
            return JsonConvert.SerializeObject(lavado.ObtenerMarcas(), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });

        }
        [Authorize]
        public string obtenerServicios()
        {

            var lavado = new Lavado();
            return JsonConvert.SerializeObject(lavado.ObtenerServicios(), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });

        }
        [Authorize]
        public string obtenerModelos(int Marca)
        {

            var lavado = new Lavado();
            return JsonConvert.SerializeObject(lavado.ObtenerModelos(Marca), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });

        }

        [Authorize]
        public string obtenerSegmento(int Modelo)
        {

            var lavado = new Lavado();
            return JsonConvert.SerializeObject(lavado.ObtenerSegmento(Modelo), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });

        }
        [Authorize]
        public string obtenerTotal(int idSegmento, string idServicio)
        {

            var lavado = new Lavado();
            int idser;
            idser = Convert.ToInt32(idServicio);

            return JsonConvert.SerializeObject(lavado.ObtenerTotal(idSegmento,idser), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });
           
        }

        [Authorize]
        public string obtenerDireccion(string url)
        {

            //var lavadodal = new Lavado();

            var solicitarlavadobll = new SolicitarLavadoBLL();
            string direccion;

            direccion=solicitarlavadobll.ObtenerDireccion(url);

            return direccion;

            //return JsonConvert.SerializeObject(lavado.ObtenerMarcas(), Formatting.None,
            //       new JsonSerializerSettings()
            //       {
            //           ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            //       });

        }

        public void crearSolicitud(string Marca, string Modelo,string Servicio,int seg,string dir,string total,string NombreTarjeta,long NumeroTarjeta, int Mes,int Año,int CodTarjeta)
        {
            try
            {
               

                var userID = User.Identity.GetUserId();
                var lavadoDal = new Lavado();
                var context = new WGentities();
                var lavadobll = new SolicitarLavadoBLL();


                // total = total.Replace(".", ",");
                var lavado = new Lavados()
                {
                    IdCliente = User.Identity.GetUserId(),
                    IdMarca = Convert.ToInt32(Marca),
                    IdModelo = Convert.ToInt32(Modelo),
                    IdSegmento = seg,
                    IdLavador = "-1",
                    IdServicio = Convert.ToInt32(Servicio),
                    Direccion = dir,
                    Estado="SOLICITADO",
                    Fecha = DateTime.Now,                    
                    Total=  Decimal.Parse(total.Replace(" ", ""), NumberStyles.AllowThousands
                            | NumberStyles.AllowDecimalPoint | NumberStyles.AllowCurrencySymbol)
            };

                context.Lavados.Add(lavado);
                context.SaveChanges();

                lavadobll.ProcesarPago(lavado.IdLavado, NombreTarjeta, NumeroTarjeta, Año, Mes, CodTarjeta);
                
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public string VerificarCliente()
        {
            try
            {
                if (User.Identity.IsAuthenticated == false)
                {
                    return "403";
                  
                }

                var userid = User.Identity.GetUserId();
                var lavadodal = new Lavado();
                var estado= lavadodal.VerificarClienteDAL(userid);

                return estado;

            }
            catch (Exception ex)
            {
                throw;
            }


        }

        public int VerificarLavadoAbierto()
        {
            try
            {
                var userId = User.Identity.GetUserId();
                var lavadoBll = new SolicitarLavadoBLL();

                return lavadoBll.VerificarLavadoAbiertoBLL(userId);

            }
            catch (Exception)
            {

                throw;
            }
        }

        public void CancelarLavado(int lavadoid)
        {
            try
            {
                var lavadobll = new SolicitarLavadoBLL();
                lavadobll.CancelarLavado(lavadoid);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public string ObtenerLavados()
        {

            try
            {
                var lavadobll = new SolicitarLavadoBLL();
                var clienteid = User.Identity.GetUserId();


                return JsonConvert.SerializeObject(lavadobll.ObtenerLavados(clienteid), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });
            }
            catch (Exception ex)
            {

                throw;
            }

            

            

        }


        public string BuscarLavados(string Direccion)
        {
            try
            {
                var lavadobll = new SolicitarLavadoBLL();
                var lavadorid = User.Identity.GetUserId();

                return JsonConvert.SerializeObject(lavadobll.BuscarLavados(lavadorid, Direccion), Formatting.None,
                      new JsonSerializerSettings()
                      {
                          ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                      });
            }
            catch (Exception)
            {

                throw;
            }
           
            
        }


        public string GetLavadoDetalle(int idlavado)
        {
            try
            {
                var lavadobll = new SolicitarLavadoBLL();                

                return JsonConvert.SerializeObject(lavadobll.GetLavadoDetalle(idlavado), Formatting.None,
                      new JsonSerializerSettings()
                      {
                          ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                      });
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}