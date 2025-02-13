using System.ComponentModel.DataAnnotations;

namespace alay_trabaho_api.Models
{
    public class Admin
    {
        [Key]
        public int ProfileID { get; set; }

        [Required]
        public required string FirstName { get; set; }

        public string? MiddleName { get; set; }

        [Required]
        public required string LastName { get; set; }

        [Required, EmailAddress]
        public required string Email { get; set; }

        [Required]
        public required string Password { get; set; }

        [Required]
        public required string Role { get; set; }

        public DateTime? Birthday { get; set; }

        public string? ProfilePicture { get; set; }

        public string? ContactNumber { get; set; }
    }
}
