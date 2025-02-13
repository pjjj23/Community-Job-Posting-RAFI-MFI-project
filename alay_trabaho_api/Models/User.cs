using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace alay_trabaho_api.Models
{
    public class User
    {
        [Key]
        public int ProfileID { get; set; }

        [Required]
        public required string FirstName { get; set; }

        public string? MiddleName { get; set; }

        [Required]
        public required string LastName { get; set; }

        public string? ContactNumber { get; set; }

        [Required, EmailAddress]
        public required string Email { get; set; }

        [Required]
        public required string Password { get; set; }

        [Required]
        public required string Role { get; set; }

        public DateTime? Birthday { get; set; }

        public string? Address { get; set; }

        public string? Description { get; set; }

        public string? ProfilePicture { get; set; }

        [ForeignKey("UserStatus")]
        public int? UserStatusID { get; set; }
        public UserStatus? UserStatus { get; set; }
    }
}
