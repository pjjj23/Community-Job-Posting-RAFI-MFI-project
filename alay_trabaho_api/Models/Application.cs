using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace alay_trabaho_api.Models
{
    public class Application
    {
        [Key]
        public int ApplicationID { get; set; }

        [Required]
        public int UserID { get; set; }
        [ForeignKey("UserID")]
        public User? User { get; set; }

        [Required]
        public int JobID { get; set; }
        [ForeignKey("JobID")]
        public JobPosting? JobPosting { get; set; }

        public DateTime DateApplied { get; set; }

        public DateTime? ApprovedDate { get; set; }
    }
}
