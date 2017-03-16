using Microsoft.AspNetCore.Mvc;

namespace Bebbiweb.Controllers
{
    public class GalleryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}