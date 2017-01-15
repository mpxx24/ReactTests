using System.Web.Http;
using Newtonsoft.Json;

namespace ReactTests.WebApi {
    public static class WebApiConfig {
        public static void Register(HttpConfiguration config) {
            GlobalConfiguration.Configuration.Formatters.Remove(GlobalConfiguration.Configuration.Formatters.XmlFormatter);

            // Web API configuration and services
            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new {id = RouteParameter.Optional});
        }
    }
}