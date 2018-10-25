using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using DAL;

namespace WashAndGo.Controllers
{
    public class ListaPreciosController : Controller
    {
        private WGentities db = new WGentities();

        // GET: ListaPrecios
        public ActionResult Index(string sortOrder)
        {
            ViewBag.FechaDesdeSort = String.IsNullOrEmpty(sortOrder) ? "Fecha_Desde" : "";
            ViewBag.FechaHastaSort = sortOrder == "Fecha_hasta" ? "Fecha_hasta_desc" : "Fecha_hasta";
            ViewBag.DateSortParm = sortOrder == "Date" ? "date_desc" : "Date";
            ViewBag.PrecioSort = sortOrder == "Precio" ? "Precio_desc" : "Precio";
            ViewBag.Segmento = sortOrder == "Segmento" ? "Segmento_desc" : "Segmento";
            ViewBag.Servicios = sortOrder == "Servicios" ? "Serviciose_desc" : "Servicios";


            var listaPrecios = db.ListaPrecios.Include(l => l.Segmentos).Include(l => l.Servicios);
            switch (sortOrder)
            {
                case "Fecha_Desde":
                    listaPrecios = listaPrecios.OrderByDescending(s => s.FechaDesde);
                    break;
                case "Fecha_hasta":
                    listaPrecios = listaPrecios.OrderBy(s => s.FechaHasta);
                    break;
                case "Fecha_hasta_Desc":
                    listaPrecios = listaPrecios.OrderByDescending(s => s.FechaHasta);
                    break;
                case "Precio":
                    listaPrecios = listaPrecios.OrderBy(s => s.Precio);
                    break;
                case "Precio_desc":
                    listaPrecios = listaPrecios.OrderByDescending(s => s.Precio);
                    break;
                case "Segmento_desc":
                    listaPrecios = listaPrecios.OrderByDescending(s => s.Segmentos.Descripcion);
                    break;
                case "Segmento":
                    listaPrecios = listaPrecios.OrderBy(s => s.Segmentos.Descripcion);
                    break;
                case "Servicios":
                    listaPrecios = listaPrecios.OrderBy(s => s.Servicios.Nombre);
                    break;
                case "Servicios_desc":
                    listaPrecios = listaPrecios.OrderByDescending(s => s.Servicios.Nombre);
                    break;
                    //default:
                    //    students = students.OrderBy(s => s.LastName);
                    //    break;
            }

           
            return View(listaPrecios.ToList());
        }

        // GET: ListaPrecios/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ListaPrecios listaPrecios = db.ListaPrecios.Find(id);
            if (listaPrecios == null)
            {
                return HttpNotFound();
            }
            return View(listaPrecios);
        }

        // GET: ListaPrecios/Create
        public ActionResult Create()
        {
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion");
            ViewBag.IdServicio = new SelectList(db.Servicios, "IdServicio", "Nombre");
            return View();
        }

        // POST: ListaPrecios/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "IdSegmento,IdServicio,Precio,FechaDesde,FechaHasta")] ListaPrecios listaPrecios)
        {
            if (ModelState.IsValid)
            {
                db.ListaPrecios.Add(listaPrecios);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion", listaPrecios.IdSegmento);
            ViewBag.IdServicio = new SelectList(db.Servicios, "IdServicio", "Nombre", listaPrecios.IdServicio);
            return View(listaPrecios);
        }

        // GET: ListaPrecios/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ListaPrecios listaPrecios = db.ListaPrecios.Find(id);
            if (listaPrecios == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion", listaPrecios.IdSegmento);
            ViewBag.IdServicio = new SelectList(db.Servicios, "IdServicio", "Nombre", listaPrecios.IdServicio);
            return View(listaPrecios);
        }

        // POST: ListaPrecios/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "IdSegmento,IdServicio,Precio,FechaDesde,FechaHasta")] ListaPrecios listaPrecios)
        {
            if (ModelState.IsValid)
            {
                db.Entry(listaPrecios).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion", listaPrecios.IdSegmento);
            ViewBag.IdServicio = new SelectList(db.Servicios, "IdServicio", "Nombre", listaPrecios.IdServicio);
            return View(listaPrecios);
        }

        // GET: ListaPrecios/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ListaPrecios listaPrecios = db.ListaPrecios.Find(id);
            if (listaPrecios == null)
            {
                return HttpNotFound();
            }
            return View(listaPrecios);
        }

        // POST: ListaPrecios/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ListaPrecios listaPrecios = db.ListaPrecios.Find(id);
            db.ListaPrecios.Remove(listaPrecios);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
