using Microsoft.AspNetCore.Mvc;
using MoversBackend.Models;
 namespace MoversBackend.Controllers;
[ApiController]
[Route("api/[controller]")]
public class QuoteRequestController : ControllerBase

{
    [HttpGet]
    public  IActionResult GetQuotes()
    {
        return ok("All quote requests will appear here"); 
    }
    [HttpPost]
    public IActionResult CreateQuote(QuoteRequest quote )
    {
        return ok(quote);
    }
}