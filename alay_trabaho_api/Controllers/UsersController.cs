using Microsoft.AspNetCore.Mvc;
using alay_trabaho_api.Data;
using alay_trabaho_api.Models;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace alay_trabaho_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var users = await _context.Users
                .Include(u => u.UserStatus)
                .Select(user => new
                {
                    user.ProfileID,
                    user.FirstName,
                    user.LastName,
                    user.Email,
                    user.ContactNumber,
                    user.Role,
                    user.Birthday,
                    user.Address,
                    user.Description,
                    user.ProfilePicture,
                    user.UserStatusID
                }) // Exclude password field
                .ToListAsync();

            return Ok(users);
        }

        // GET: api/Users/{id}
        [HttpGet("{id:int}")] // Ensure 'id' is an integer
        public async Task<ActionResult> GetUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.UserStatus)
                .Where(u => u.ProfileID == id)
                .Select(user => new
                {
                    user.ProfileID,
                    user.FirstName,
                    user.LastName,
                    user.Email,
                    user.ContactNumber,
                    user.Role,
                    user.Birthday,
                    user.Address,
                    user.Description,
                    user.ProfilePicture,
                    user.UserStatusID
                }) // Exclude password field
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            return Ok(user);
        }

        // POST: api/Users
        [HttpPost]
        public async Task<IActionResult> Register(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if the email already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (existingUser != null)
            {
                return BadRequest(new { message = "Email already exists" });
            }

            // Hash the password
            user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            // Save the user to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully" });
        }

        // PUT: api/Users/{id}
        [HttpPut("{id:int}")] // Ensure 'id' is an integer
        public async Task<IActionResult> UpdateUser(int id, User updatedUser)
        {
            if (id != updatedUser.ProfileID)
            {
                return BadRequest(new { message = "User ID mismatch." });
            }

            var existingUser = await _context.Users.FindAsync(id);
            if (existingUser == null)
            {
                return NotFound(new { message = "User not found." });
            }

            // Update fields
            existingUser.FirstName = updatedUser.FirstName;
            existingUser.MiddleName = updatedUser.MiddleName;
            existingUser.LastName = updatedUser.LastName;
            existingUser.ContactNumber = updatedUser.ContactNumber;
            existingUser.Email = updatedUser.Email;
            existingUser.Role = updatedUser.Role;
            existingUser.Birthday = updatedUser.Birthday;
            existingUser.Address = updatedUser.Address;
            existingUser.Description = updatedUser.Description;
            existingUser.ProfilePicture = updatedUser.ProfilePicture;
            existingUser.UserStatusID = updatedUser.UserStatusID;

            // Only hash the password if it was updated
            if (!string.IsNullOrEmpty(updatedUser.Password))
            {
                existingUser.Password = BCrypt.Net.BCrypt.HashPassword(updatedUser.Password);
            }

            _context.Entry(existingUser).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Users/{id}
        [HttpDelete("{id:int}")] // Ensure 'id' is an integer
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/Users/Login
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Find user by email
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginRequest.Email);
            if (user == null)
                return Unauthorized(new { message = "Invalid email or password" });

            // Verify password
            if (!BCrypt.Net.BCrypt.Verify(loginRequest.Password, user.Password))
                return Unauthorized(new { message = "Invalid email or password" });

            return Ok(new
            {
                message = "Login successful",
                user = new
                {
                    user.ProfileID,
                    user.FirstName,
                    user.LastName,
                    user.Email,
                    user.Role
                }
            });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
