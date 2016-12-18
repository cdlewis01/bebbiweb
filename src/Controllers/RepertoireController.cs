using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class RepertoireController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}