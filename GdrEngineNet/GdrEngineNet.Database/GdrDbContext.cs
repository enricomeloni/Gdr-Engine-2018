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

        DbSet<User> Users { get; set; }

        DbSet<Room> Rooms { get; set; }

        DbSet<Race> Races { get; set; }

        DbSet<Character> Characters { get; set; }

        DbSet<Class> Classes { get; set; }

        DbSet<Guild> Guilds { get; set; }

        DbSet<Item> Items { get; set; }
    }
}
