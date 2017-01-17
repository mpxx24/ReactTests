using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ReactTests.WebApi.Models;

namespace ReactTests.WebApi.Controllers {
    public class UsersController : ApiController {
        // GET: Users
        public HttpResponseMessage Get() {
            var users = new List<User>
            {
                new User
                {
                    Id = 1,
                    Name = "Mariusz",
                    LastName = "Piątkowski"
                },
                new User
                {
                    Id = 2,
                    Name = "Harry",
                    LastName = "Hole"
                }
            };
            return this.Request.CreateResponse(HttpStatusCode.OK, users);
        }
    }
}