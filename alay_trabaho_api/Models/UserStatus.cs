using System.ComponentModel.DataAnnotations;

namespace alay_trabaho_api.Models
{
    public class UserStatus
    {
        [Key]
        public int UserStatusID { get; set; }

        [Required]
        public required string StatusName { get; set; } // e.g., Active, Inactive, Pending
    }
}
