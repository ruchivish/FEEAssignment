using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Description;
using FrontEndExpertiseAssigment.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace WebApplication10.Controllers
{
    [Microsoft.AspNetCore.Mvc.Route("[controller]")]
    [ApiController]
    public class FeatureController : Controller
    {
        private readonly ILogger<FeatureController> _logger;
        public FeatureController(ILogger<FeatureController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [ResponseType(typeof(List<Feature>))]
        public ActionResult<List<Feature>> GetFeature()
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
            string Json = System.IO.File.ReadAllText(Directory.GetCurrentDirectory() + "\\Controllers\\FeatureDataset.json");
            var features = JsonConvert.DeserializeObject<List<Feature>>(Json);

            return Ok(features);

        }
    }
}