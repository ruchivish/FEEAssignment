using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication10.Models;

namespace FrontEndExpertiseAssigment.Models
{
    public class Courses
    {
        public int id { get; set; }
        public Course Course { get; set; }
        public string Type { get; set; }
    }
}
