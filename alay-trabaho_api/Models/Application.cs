using System;

namespace JobPostingAPI.Models
{
    public class Application
    {
        public int ApplicationId { get; set; }
        public int JobId { get; set; } // Foreign key
        public int UserId { get; set; } // Foreign key
        public string Status { get; set; } = "Pending"; // Default value

        public DateTime AppliedAt { get; set; } = DateTime.Now;

        // Navigation properties
        public Job Job { get; set; }
        public User User { get; set; }
    }
}
