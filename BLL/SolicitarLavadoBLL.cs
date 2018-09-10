using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace BLL
{
    public class SolicitarLavadoBLL
    {
        public string ObtenerDireccion (string url)
        {
            return url;
        }



        private string Calcular(string url)
        {

            try
            {
                url = "a";  // "https://maps.googleapis.com/maps/api/directions/json?origin=" + calle + " " + numero + " " + localidad + " " + provincia + "+ &destination=Bernardo de Irigoyen 696, B1609BFJ San Isidro, Buenos Aires&key=AIzaSyBUYwRCVoIKPtjckkr_ncxZYa4SyH9U5SY ";
                string content = fileGetContents(url);
                //Envio envio = new Envio();
                string i;
                decimal kms;

                //Thread.Sleep(2000);

                JObject o = JObject.Parse(content);
                //envio.distance = (string)o.SelectToken("routes[0].legs[0].distance.text");
                //envio.duration = (string)o.SelectToken("routes[0].legs[0].duration.text");
                kms = (decimal)o.SelectToken("routes[0].legs[0].distance.value");


                //i = envio.distance.Replace(" km", "");

                //i = i.Replace(".", ",");


                //kms = Decimal.Parse(i, CultureInfo.InvariantCulture);

                //if (kms > 50)
                //{
                //  envio.distance = "-1";
                //}
                //else
                //{
                //envio.costo = Math.Round(kms * 15);
                //}

                // envio.kms = kms;

                //return JsonConvert.SerializeObject(envio, Formatting.None,
                //   new JsonSerializerSettings()
                // {
                //   ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                //});

                return url;
            }
            catch (Exception ex)
            {

                throw new Exception(ex.Message);
            }

        }


        private string fileGetContents(string fileName)
        {
            string sContents = string.Empty;
            string me = string.Empty;
            try
            {
                if (fileName.ToLower().IndexOf("https:") > -1)
                {
                    System.Net.WebClient wc = new System.Net.WebClient();
                    byte[] response = wc.DownloadData(fileName);
                    sContents = System.Text.Encoding.ASCII.GetString(response);

                }
                else
                {
                    System.IO.StreamReader sr = new System.IO.StreamReader(fileName);
                    sContents = sr.ReadToEnd();
                    sr.Close();
                }
            }
            catch { sContents = "unable to connect to server "; }
            return sContents;
        }


    }
}
