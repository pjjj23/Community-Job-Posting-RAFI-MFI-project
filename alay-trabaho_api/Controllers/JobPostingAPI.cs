using Microsoft.AspNetCore.Mvc;

using JobPostingAPI.Models; // Add this line if Job class is defined in Models namespace

namespace JobPostingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]  // This attribute is necessary for Swagger to detect the controller.
    public class JobController : ControllerBase
    {
        // Example GET endpoint
        [HttpGet]
        public IActionResult GetJobs()
        {
            // Your logic to get jobs from the database
            return Ok(new { message = "List of Jobs" });
        }

        // Example POST endpoint
        [HttpPost]
        public IActionResult PostJob([FromBody] Job job)
        {
            // Your logic to create a new job
            return CreatedAtAction(nameof(GetJobs), new { id = job.JobId }, job);
        }
    }
}
