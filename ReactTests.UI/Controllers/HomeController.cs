using System.Web.Mvc;

namespace ReactTests.UI.Controllers {
    public class HomeController : Controller {
        // GET: Home
        public ActionResult Index() {
            return this.View();
        }
    }
}