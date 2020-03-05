using Microsoft.AspNetCore.Razor.Language;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FrontEndExpertiseAssigment.Models;

namespace WebApplication10.Models
{
    public class Course
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Tag[] Tags { get; set; }
        public int Duration { get; set; }
    }
       
}
