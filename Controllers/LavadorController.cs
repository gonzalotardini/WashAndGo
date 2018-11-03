using BLL;
using DAL;
using DAL.Views;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WashAndGo.Controllers
{
    public class LavadorController : Controller
    {
        // GET: Lavador
        public ActionResult Index()
        {
            return View();
        }


        public string ObtenerDatos()
        {
            try
            {
                if (User.Identity.IsAuthenticated == false)
                {
                    RedirectToAction("LogIn", "Acount");
                }

                var lavadorBll = new LavadorBLL();
                var userid = User.Identity.GetUserId();
                var clientes = new Lavadores();
                return JsonConvert.SerializeObject(lavadorBll.ObtenerDatos(userid), Formatting.None,
                   new JsonSerializerSettings()
                   {
                       ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                   });

            }
            catch (Exception ex)
            {

                return ex.Message;
            }

        }

        public string GetServiciosRealizo()
        {
            try
            {
                var lavadorBll = new LavadorBLL();
                var userid = User.Identity.GetUserId();

                return JsonConvert.SerializeObject(lavadorBll.GetServiciosRealizo(userid), Formatting.None,
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

        public string GetServiciosNoRealizo()
        {
            try
            {
                var lavadorBll = new LavadorBLL();
                var userid = User.Identity.GetUserId();

                return JsonConvert.SerializeObject(lavadorBll.GetServiciosNoRealizo(userid), Formatting.None,
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


        public void GuardarDatos(LavadorView lavador)
        {
            try
            {

                var lavadorid = User.Identity.GetUserId();
                var lavadorBll = new LavadorBLL();
                lavadorBll.GuardarDatos(lavadorid, lavador);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void GuardarServicios(List<Servicios> servicios)
        {
            try
            {

                var lavadorid = User.Identity.GetUserId();
                var lavadorBll = new LavadorBLL();
                lavadorBll.GuardarServicios(lavadorid, servicios);
            }
            catch (Exception ex)
            {

                throw;
            }

        }

        public string VerifyAuth()
        {
            if (!User.IsInRole("Lavador"))
            {
                return "403";
            }
            else
            {
                return "";
            }
        }

        public string GetLavadoAbierto()
        {
            try
            {
                var lavadorbll = new LavadorBLL();
                var idlavador = User.Identity.GetUserId();

                return JsonConvert.SerializeObject(lavadorbll.GetLavadoAbierto(idlavador), Formatting.None,
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

    }
}
