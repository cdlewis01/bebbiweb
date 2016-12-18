using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers{
    public class ContactController : Controller{
        public IActionResult Index()
        {
            return View();
        }
    }
}