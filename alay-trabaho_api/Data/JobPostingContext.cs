using Microsoft.EntityFrameworkCore;
using JobPostingAPI.Models;

namespace JobPostingAPI.Data
{
    public class JobPostingContext : DbContext
    {
        public JobPostingContext(DbContextOptions<JobPostingContext> options) : base(options) {}
        
        public DbSet<User> Users { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Application> Applications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasMany(u => u.Jobs).WithOne(j => j.Employer).HasForeignKey(j => j.EmployerId);
            modelBuilder.Entity<Application>().HasOne(a => a.Job).WithMany().HasForeignKey(a => a.JobId);
            modelBuilder.Entity<Application>().HasOne(a => a.User).WithMany().HasForeignKey(a => a.UserId);
        }
    }
}
