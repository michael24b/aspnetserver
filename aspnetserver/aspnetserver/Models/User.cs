using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace aspnetserver.Models
{
    public class User
    {
        [Key]
        public int userId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string firstName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string lastName { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string phoneNumber { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string birthDate { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string emailAddress { get; set; }

    }
}
