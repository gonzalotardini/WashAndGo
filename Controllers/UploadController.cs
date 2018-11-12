using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Excel = Microsoft.Office.Interop.Excel;
using System.IO;
using System.Runtime.InteropServices;
using DAL;
using DAL.Views;
using BLL;

namespace WashAndGo.Controllers
{
    public class UploadController : Controller
    {
        // GET: Upload
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Import(HttpPostedFileBase excelfile)
        {

            try
            {
                var modelobll = new ModelosBLL();
                if (excelfile == null || excelfile.ContentLength == 0)
                {
                    ViewBag.Message = "Selecciona un archivo";
                    return View("Index");
                }
                else
                {
                    if (excelfile.FileName.EndsWith("xls") || excelfile.FileName.EndsWith("xlsx"))
                    {
                        string path = Server.MapPath("~/xls/" + DateTime.Now.ToString("yyyyMMddHHmmssfff") + excelfile.FileName);

                        if (System.IO.File.Exists(path))
                        {
                            System.IO.File.Delete(path);
                        }
                        
                        excelfile.SaveAs(path);
                        Excel.Application xlApp = new Excel.Application();
                        Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(path);
                        Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[1];
                        Excel.Range xlRange = xlWorksheet.UsedRange;

                        int rowCount = xlRange.Rows.Count;
                        int colCount = xlRange.Columns.Count;


                        //excelfile.SaveAs(path);
                        //Excel.Application application = new Excel.Application();
                        //Excel.Workbook workbook = application.Workbooks.Open(path);
                        //Excel.Worksheet worksheet = workbook.ActiveSheet;
                        //Excel.Range range = worksheet.UsedRange;

                        var listamodelos = new List<ModeloView>();

                        for (int i = 1; i <= rowCount; i++)
                        {
                            var modelo = new ModeloView();
                            modelo.Marca = xlRange.Cells[i, 1].Value2.ToString();                            
                            modelo.Modelo = xlRange.Cells[i, 2].Value2.ToString();
                            modelo.Segmento = xlRange.Cells[i, 3].Value2.ToString();

                            if (i==1 && modelo.Marca!="MARCA")
                            {
                                ViewBag.Message = "Archivo incorrecto, revise encabezados";
                                return View("Index");
                            }
                            if (i>1)
                            {
                                listamodelos.Add(modelo);
                            }                           
                        }
                                               
                        //cleanup
                        GC.Collect();
                        GC.WaitForPendingFinalizers();

                        //rule of thumb for releasing com objects:
                        //  never use two dots, all COM objects must be referenced and released individually
                        //  ex: [somthing].[something].[something] is bad

                        //release com objects to fully kill excel process from running in the background
                        Marshal.ReleaseComObject(xlRange);
                        Marshal.ReleaseComObject(xlWorksheet);

                        //close and release
                        xlWorkbook.Close();
                        Marshal.ReleaseComObject(xlWorkbook);

                        //quit and release
                        xlApp.Quit();
                        Marshal.ReleaseComObject(xlApp);


                        var resultado = modelobll.ImportarModelos(listamodelos);


                        return View("Success");
                    }
                    else
                    {
                        ViewBag.Message = "NO ES EXCEL";
                        return View("Index");
                    }
                }
            }
            catch (Exception ex)
            {
                ViewBag.Message = "Error";
                return View("Index");
                throw;
            }
            
           

        }
    }
}