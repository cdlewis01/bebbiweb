using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    public class TeachingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}