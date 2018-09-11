using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DAL;
using Newtonsoft.Json;
using BLL;
using Microsoft.AspNet.Identity;

namespace WashAndGo.Controllers
{
    [Authorize]
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
            var userID = User.Identity.GetUserId();

        
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

        public void crearSolicitud(string Marca, string Modelo,int seg,string dir,string total)
        {
            try
            {
                var lavadoDal = new Lavado();
            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}