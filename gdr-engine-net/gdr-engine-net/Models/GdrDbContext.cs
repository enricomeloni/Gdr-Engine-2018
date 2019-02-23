using gdr_engine_net.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
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
        }
    }
}
