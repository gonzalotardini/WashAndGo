//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Lavados
    {
        public int IdLavado { get; set; }
        public string IdLavador { get; set; }
        public string IdCliente { get; set; }
        public Nullable<System.DateTime> Fecha { get; set; }
        public string Estado { get; set; }
        public Nullable<decimal> Total { get; set; }
        public Nullable<int> IdSegmento { get; set; }
        public Nullable<int> IdModelo { get; set; }
        public Nullable<int> IdMarca { get; set; }
        public string Direccion { get; set; }
        public Nullable<int> Calificacion { get; set; }
        public string Comentario { get; set; }
        public Nullable<int> IdServicio { get; set; }
    
        public virtual Clientes Clientes { get; set; }
        public virtual Marcas Marcas { get; set; }
        public virtual Modelos Modelos { get; set; }
        public virtual Segmentos Segmentos { get; set; }
        public virtual Servicios Servicios { get; set; }
    }
}
