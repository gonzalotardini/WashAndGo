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
    public class ModelosController : Controller
    {
        private WGentities db = new WGentities();

        // GET: Modelos
        public ActionResult Index()
        {
            var modelos = db.Modelos.Include(m => m.Marcas).Include(m => m.Segmentos);
            return View(modelos.ToList());
        }

        // GET: Modelos/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Modelos modelos = db.Modelos.Find(id);
            if (modelos == null)
            {
                return HttpNotFound();
            }
            return View(modelos);
        }

        // GET: Modelos/Create
        public ActionResult Create()
        {
            ViewBag.IdMarca = new SelectList(db.Marcas, "IdMarca", "Descripcion");
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion");
            return View();
        }

        // POST: Modelos/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "IdModelo,IdMarca,Descripcion,IdSegmento")] Modelos modelos)
        {
            if (ModelState.IsValid)
            {
                db.Modelos.Add(modelos);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdMarca = new SelectList(db.Marcas, "IdMarca", "Descripcion", modelos.IdMarca);
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion", modelos.IdSegmento);
            return View(modelos);
        }

        // GET: Modelos/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Modelos modelos = db.Modelos.Find(id);
            if (modelos == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdMarca = new SelectList(db.Marcas, "IdMarca", "Descripcion", modelos.IdMarca);
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion", modelos.IdSegmento);
            return View(modelos);
        }

        // POST: Modelos/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "IdModelo,IdMarca,Descripcion,IdSegmento")] Modelos modelos)
        {
            if (ModelState.IsValid)
            {
                db.Entry(modelos).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdMarca = new SelectList(db.Marcas, "IdMarca", "Descripcion", modelos.IdMarca);
            ViewBag.IdSegmento = new SelectList(db.Segmentos, "IdSegmento", "Descripcion", modelos.IdSegmento);
            return View(modelos);
        }

        // GET: Modelos/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Modelos modelos = db.Modelos.Find(id);
            if (modelos == null)
            {
                return HttpNotFound();
            }
            return View(modelos);
        }

        // POST: Modelos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Modelos modelos = db.Modelos.Find(id);
            db.Modelos.Remove(modelos);
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
