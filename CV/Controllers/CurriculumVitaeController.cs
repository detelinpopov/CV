using Microsoft.AspNetCore.Mvc;

namespace CV.Controllers
{
    public class CurriculumVitaeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}