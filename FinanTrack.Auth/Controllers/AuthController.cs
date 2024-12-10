using FinanTrack.Auth.Helpers;
using FinanTrack.Auth.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace FinanTrack.Auth.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post(
            [FromBody]ConnectViewModel viewModel, 
            [FromServices] IOptions<SecuritySettings> securitySettings)
        {
            return Ok($"username: {viewModel.Username} - password: {viewModel.Password} - token: {new JwtHelper().GenerateToken(viewModel.Username, securitySettings.Value.Secret)}");
        }
    }
}