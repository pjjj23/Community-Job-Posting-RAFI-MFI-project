using System.ComponentModel.DataAnnotations;

namespace alay_trabaho_api.Models
{
    public class CompanyApproval
    {
        [Key]
        public int CompanyListApprovedID { get; set; }

        [Required]
        public required string EmployeeName { get; set; }

        [Required]
        public DateTime DateApproved { get; set; }

        [Required]
        public decimal IncomePer { get; set; }
    }
}
