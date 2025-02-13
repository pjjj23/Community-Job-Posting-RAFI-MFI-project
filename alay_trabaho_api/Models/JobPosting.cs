using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace alay_trabaho_api.Models
{
    public class JobPosting
    {
        [Key]
        public int JobID { get; set; }

        [Required]
        public required string JobTitle { get; set; }

        [Required]
        public required string JobDescription { get; set; }

        [Required]
        public required string JobType { get; set; } // e.g., Full-time, Part-time

        [Required]
        public decimal Salary { get; set; }

        public string? Location { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        public int CompanyID { get; set; }
        [ForeignKey("CompanyID")]
        public Company? Company { get; set; }
    }
}
