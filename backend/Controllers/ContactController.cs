using Microsoft.AspNetCore.Mvc;
using WifinetSolutions.Models;

namespace WifinetSolutions.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] ContactRequest req)
        {
            // Aquí podrías guardar en DB, enviar email, etc.
            // Por ahora devolvemos un 200 OK simple.
            return Ok(new { status = "received", data = req });
        }
    }
}
