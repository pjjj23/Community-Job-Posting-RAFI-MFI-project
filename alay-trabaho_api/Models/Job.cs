using System;

namespace JobPostingAPI.Models
{
    public class Job
    {
        public int JobId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public decimal Salary { get; set; }
        public int EmployerId { get; set; } // Foreign key

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        // Navigation property
        public User Employer { get; set; }
    }
}
