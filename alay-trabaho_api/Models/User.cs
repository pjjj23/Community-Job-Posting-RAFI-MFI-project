using System;
using System.Collections.Generic;

namespace JobPostingAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; } // Store hashed password
        public string Role { get; set; } // "job_seeker" or "employer"
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        
        // Navigation property
        public ICollection<Job> Jobs { get; set; }
    }
}
