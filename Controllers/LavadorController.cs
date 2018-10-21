using BLL;
using DAL;
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


        public void GuardarDatos(Lavadores lavador)
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
    }
}