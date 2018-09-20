using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BLL;
using Microsoft.AspNet.Identity;
using DAL;
using Newtonsoft.Json;

namespace WashAndGo.Controllers
{
    public class ClienteController : Controller
    {
        // GET: Cliente
        public ActionResult Index()
        {
            return View();
        }


        public void GuardarDatos(string Nombre, string Apellido, string DNI, string Email, string Fecha, string Marca,string Modelo)
        {
            try
            {   var clienteid = User.Identity.GetUserId();
                var clienteBLL = new ClienteBLL();
                clienteBLL.GuardarDatos(clienteid,Nombre, Apellido, DNI, Email, Fecha, Marca, Modelo);
            }
            catch (Exception)
            {

                throw;
            }

        }


        public string ObtenerDatos()
        {
            try
            {
                var clienteBll = new ClienteBLL();
                var userid = User.Identity.GetUserId();
                var clientes = new Clientes();

                return JsonConvert.SerializeObject(clienteBll.ObtenerDatos(userid), Formatting.None,
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