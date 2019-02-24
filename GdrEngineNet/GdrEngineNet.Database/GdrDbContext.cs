using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using GdrEngineNet.Database.Models;

namespace GdrEngineNet.Database
{
    public class GdrDbContext : DbContext
    {
        public GdrDbContext(DbContextOptions<GdrDbContext> options) : base(options)
        { }

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

        public DbSet<User> Users { get; set; }

        public DbSet<Room> Rooms { get; set; }

        public DbSet<Race> Races { get; set; }

        public DbSet<Character> Characters { get; set; }

        public DbSet<Class> Classes { get; set; }

        public DbSet<Guild> Guilds { get; set; }

        public DbSet<Item> Items { get; set; }
    }
}
