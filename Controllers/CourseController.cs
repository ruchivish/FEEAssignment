using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.Services.DelegatedAuthorization;
using System.Collections.Generic;
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

            List<Course> course = new List<Course>() { 
                new Course()
                {
                    Title = "Introduction to C#",
                    Description = "C# is object oriented language"
                }
            };

            return Ok(course);

        }
    }
}