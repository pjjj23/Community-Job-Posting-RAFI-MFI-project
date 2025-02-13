using System.ComponentModel.DataAnnotations;

namespace alay_trabaho_api.Models
{
    public class Company
    {
        [Key]
        public int CompanyID { get; set; }

        [Required]
        public required string CompanyName { get; set; }

        public string? CompanyLogo { get; set; }

        public string? Description { get; set; }

        [Required]
        public decimal Income { get; set; }

        public string? IncomeFrequency { get; set; } // e.g., Per day, Per month

        public double? Longitude { get; set; }

        public double? Latitude { get; set; }
    }
}
