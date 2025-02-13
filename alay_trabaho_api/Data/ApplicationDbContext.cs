using System;
using Microsoft.EntityFrameworkCore;
using alay_trabaho_api.Models;

namespace alay_trabaho_api.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        // Define DbSets for each table
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<JobPosting> JobPostings { get; set; }
        public DbSet<Application> Applications { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<UserStatus> UserStatuses { get; set; }
        public DbSet<CompanyApproval> CompanyApprovals { get; set; }

}
