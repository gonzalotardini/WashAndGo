using BLL;
using DAL;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WashAndGo.Controllers
{
    public class ReportesController : Controller
    {
        // GET: Reportes
        public ActionResult Index()
        {
            return View();
        }



        public ActionResult ReporteLavadores(string Desde, string Hasta)
        {
            try
            {
                var path = HttpRuntime.AppDomainAppPath;
                

                DateTime _desde = new DateTime();
                DateTime _hasta = new DateTime();
                _desde = DateTime.ParseExact(Desde, "dd/MM/yyyy", null);
                _hasta  = DateTime.ParseExact(Hasta, "dd/MM/yyyy", null);




                var lavadobll = new SolicitarLavadoBLL();

                path=lavadobll.GenerarReporteLavadores(path,_desde,_hasta);               
                

                //byte[] fileBytes = System.IO.File.ReadAllBytes(System.IO.Path.Combine(HttpRuntime.AppDomainAppPath, "Reports\\P.pdf"));
                byte[] fileBytes = System.IO.File.ReadAllBytes(path);
                string fileName = "Reporte.pdf";
                return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);


                

            }
            catch (Exception ex)
            {

                throw;
            }
        }

        public FileResult Download(string path)
        {
            byte[] fileBytes = System.IO.File.ReadAllBytes(path);
            string fileName = "P.pdf";
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileName);
        }
    }
}