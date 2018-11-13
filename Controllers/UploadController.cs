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
using System.Data.OleDb;
using System.Data;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

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
                        string path2 = HttpRuntime.AppDomainAppPath; 
                        string path = path2 + "Reports\\" + DateTime.Now.ToString("yyyyMMddHHmmssfff") + excelfile.FileName;

                        if (System.IO.File.Exists(path))
                        {
                            System.IO.File.Delete(path);
                        }
                        
                        excelfile.SaveAs(path);
                        //Excel.Application xlApp = new Excel.Application();
                        //Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(path);
                        //Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[1];
                        //Excel.Range xlRange = xlWorksheet.UsedRange;

                        //int rowCount = xlRange.Rows.Count;
                        //int colCount = xlRange.Columns.Count;


                        //excelfile.SaveAs(path);
                        //Excel.Application application = new Excel.Application();
                        //Excel.Workbook workbook = application.Workbooks.Open(path);
                        //Excel.Worksheet worksheet = workbook.ActiveSheet;
                        //Excel.Range range = worksheet.UsedRange;
                        var listamodelos = new List<ModeloView>();

                        ISheet sheet; //Create the ISheet object to read the sheet cell values  
                        string filename = Path.GetFileName(Server.MapPath(excelfile.FileName)); //get the uploaded file name  
                        var fileExt = Path.GetExtension(filename); //get the extension of uploaded excel file  
                        if (fileExt == ".xls")
                        {
                            HSSFWorkbook hssfwb = new HSSFWorkbook(excelfile.InputStream); //HSSWorkBook object will read the Excel 97-2000 formats  
                            sheet = hssfwb.GetSheetAt(0); //get first Excel sheet from workbook  
                        }
                        else
                        {
                            XSSFWorkbook hssfwb = new XSSFWorkbook(excelfile.InputStream); //XSSFWorkBook will read 2007 Excel format  
                            sheet = hssfwb.GetSheetAt(0); //get first Excel sheet from workbook   
                        }
                        for (int row = 0; row <= sheet.LastRowNum; row++) //Loop the records upto filled row  
                        {
                            if (sheet.GetRow(row) != null) //null is when the row only contains empty cells   
                            {
                                var modelo = new ModeloView();
                                modelo.Marca = sheet.GetRow(row).GetCell(0).ToString().ToUpper(); //Here for sample , I just save the value in "value" field, Here you can write your custom logics...  
                                modelo.Modelo= sheet.GetRow(row).GetCell(1).ToString().ToUpper();
                                modelo.Segmento = sheet.GetRow(row).GetCell(2).ToString().ToUpper();

                                if (row == 0 && modelo.Marca != "MARCA")
                                {
                                    ViewBag.Message = "Archivo incorrecto, revise encabezados";
                                    return View("Index");
                                }
                                if (row > 1)
                                {
                                    listamodelos.Add(modelo);
                                }


                                listamodelos.Add(modelo);
                            }
                        }


                       

                        //for (int i = 1; i <= rowCount; i++)
                        //{
                        //    var modelo = new ModeloView();
                        //    modelo.Marca = xlRange.Cells[i, 1].Value2.ToString();                            
                        //    modelo.Modelo = xlRange.Cells[i, 2].Value2.ToString();
                        //    modelo.Segmento = xlRange.Cells[i, 3].Value2.ToString();

                        //    if (i==1 && modelo.Marca!="MARCA")
                        //    {
                        //        ViewBag.Message = "Archivo incorrecto, revise encabezados";
                        //        return View("Index");
                        //    }
                        //    if (i>1)
                        //    {
                        //        listamodelos.Add(modelo);
                        //    }                           
                        //}
                                               
                        //cleanup
                        //GC.Collect();
                        //GC.WaitForPendingFinalizers();

                        //rule of thumb for releasing com objects:
                        //  never use two dots, all COM objects must be referenced and released individually
                        //  ex: [somthing].[something].[something] is bad

                        //release com objects to fully kill excel process from running in the background
                        //Marshal.ReleaseComObject(xlRange);
                        //Marshal.ReleaseComObject(xlWorksheet);

                        //close and release
                        //xlWorkbook.Close();
                        //Marshal.ReleaseComObject(xlWorkbook);

                        //quit and release
                        //xlApp.Quit();
                        //Marshal.ReleaseComObject(xlApp);


                        var resultado = modelobll.ImportarModelos(listamodelos);

                        ViewBag.Resultado = resultado;

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
                ViewBag.Message = "Error" + ex.Message;
                return View("Index");
                throw;
            }           
           

        }
    }
}