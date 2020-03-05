using FrontEndExpertiseAssigment.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Services.DelegatedAuthorization;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication10.Models;
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;

namespace WebApplication10.Controllers
{

    [Microsoft.AspNetCore.Mvc.Route("[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ILogger<CourseController> _logger;
        public CourseController(ILogger<CourseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [ResponseType(typeof(List<Course>))]
        public ActionResult<List<Course>> GetCourse()
        {

            //if (!_repository.TryGetProduct(id, out var product))
            //{
            //    return NotFound();
            //}

            //List<Course> course = new List<Course>() { 
            //    new Course()
            //    {
            //        Title = "Introduction to C#",
            //        Description = "C# is object oriented language"
            //    }
            //};
            string Json = System.IO.File.ReadAllText(Directory.GetCurrentDirectory() + "\\Controllers\\Catalog_DataSet_V1.json");
            var courses = JsonConvert.DeserializeObject<List<Courses>>(Json);

            return Ok(courses);

        }
    }
}