using Microsoft.EntityFrameworkCore;

namespace GdrEngineNet.Database.Models
{
    public class GdrDbContext : DbContext
    { 

        public GdrDbContext(DbContextOptions<GdrDbContext> options)
            : base(options)
        { }

        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(e => e.Email)
                .IsUnique();

            modelBuilder.Entity<Race>()
                .HasIndex(e => e.Name)
                .IsUnique();

            modelBuilder.Entity<Guild>()
                .HasIndex(e => e.Name)
                .IsUnique();
        }
    }
}
