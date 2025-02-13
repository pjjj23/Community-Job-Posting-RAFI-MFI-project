using Microsoft.AspNetCore.Mvc;
using alay_trabaho_api.Data;
using alay_trabaho_api.Models;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.Include(u => u.UserStatus).ToListAsync();
        }

        // GET: api/Users/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.Include(u => u.UserStatus).FirstOrDefaultAsync(u => u.ProfileID == id);

            if (user == null)
            {
                return NotFound("User not found.");
            }

            return user;
        }

        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            // Check for duplicate email
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
            {
                return BadRequest("Email already exists.");
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.ProfileID }, user);
        }

        // PUT: api/Users/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User updatedUser)
        {
            if (id != updatedUser.ProfileID)
            {
                return BadRequest("User ID mismatch.");
            }

            var existingUser = await _context.Users.FindAsync(id);
            if (existingUser == null)
            {
                return NotFound("User not found.");
            }

            // Update fields
            existingUser.FirstName = updatedUser.FirstName;
            existingUser.MiddleName = updatedUser.MiddleName;
            existingUser.LastName = updatedUser.LastName;
            existingUser.ContactNumber = updatedUser.ContactNumber;
            existingUser.Email = updatedUser.Email;
            existingUser.Password = updatedUser.Password;
            existingUser.Role = updatedUser.Role;
            existingUser.Birthday = updatedUser.Birthday;
            existingUser.Address = updatedUser.Address;
            existingUser.Description = updatedUser.Description;
            existingUser.ProfilePicture = updatedUser.ProfilePicture;
            existingUser.UserStatusID = updatedUser.UserStatusID;

            _context.Entry(existingUser).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Users/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
