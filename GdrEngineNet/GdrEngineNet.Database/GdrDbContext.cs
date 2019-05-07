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

            modelBuilder.Entity<Guild>()
                .HasIndex(e => e.Name)
                .IsUnique();

            modelBuilder.Entity<Race>()
                .HasIndex(e => e.Name)
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(e => e.Email)
                .IsUnique();


            //Character to ClassRole many to many
            modelBuilder.Entity<CharacterClassRole>()
                .HasKey(ccr => new {ccr.CharacterId, ccr.ClassRoleId});

            modelBuilder.Entity<CharacterClassRole>()
                .HasOne(ccr => ccr.Character)
                .WithMany(ch => ch.CharacterClassRoles)
                .HasForeignKey(ccr => ccr.CharacterId);

            modelBuilder.Entity<CharacterClassRole>()
                .HasOne(ccr => ccr.ClassRole)
                .WithMany(cr => cr.CharacterClassRoles)
                .HasForeignKey(ccr => ccr.ClassRoleId);

            //Character to GuildRole many to many
            modelBuilder.Entity<CharacterGuildRole>()
                .HasKey(cgr => new {cgr.CharacterId, cgr.GuildRoleId});

            modelBuilder.Entity<CharacterGuildRole>()
                .HasOne(cgr => cgr.Character)
                .WithMany(ch => ch.CharacterGuildRoles)
                .HasForeignKey(cgr => cgr.CharacterId);

            modelBuilder.Entity<CharacterGuildRole>()
                .HasOne(cgr => cgr.GuildRole)
                .WithMany(gr => gr.CharacterGuildRoles)
                .HasForeignKey(cgr => cgr.GuildRoleId);

            //Character to Item many to many

            modelBuilder.Entity<CharacterItem>()
                .HasKey(ci => new {ci.CharacterId, ci.ItemId});

            modelBuilder.Entity<CharacterItem>()
                .HasOne(ci => ci.Character)
                .WithMany(ch => ch.CharacterItems)
                .HasForeignKey(ci => ci.CharacterId);

            modelBuilder.Entity<CharacterItem>()
                .HasOne(ci => ci.Item)
                .WithMany(it => it.CharacterItems)
                .HasForeignKey(ci => ci.ItemId);

            //Character to RaceRole many to many
            modelBuilder.Entity<CharacterRaceRole>()
                .HasKey(cgr => new { cgr.CharacterId, cgr.RaceRoleId });

            modelBuilder.Entity<CharacterRaceRole>()
                .HasOne(cgr => cgr.Character)
                .WithMany(ch => ch.CharacterRaceRoles)
                .HasForeignKey(cgr => cgr.CharacterId);

            modelBuilder.Entity<CharacterRaceRole>()
                .HasOne(cgr => cgr.RaceRole)
                .WithMany(gr => gr.CharacterRaceRoles)
                .HasForeignKey(cgr => cgr.RaceRoleId);


        }
        public DbSet<Models.GameAction> Actions { get; set; }
        public DbSet<Character> Characters { get; set; }
        public DbSet<CharacterClassRole> CharacterClassRoles { get; set; }
        public DbSet<CharacterGuildRole> CharacterGuildRoles { get; set; }
        public DbSet<CharacteristicsSet> CharacteristicsSets { get; set; }
        public DbSet<CharacterItem> CharacterItems { get; set; }
        public DbSet<CharacterRaceRole> CharacterRaceRoles { get; set; }
        public DbSet<Class> Classes { get; set; }
        public DbSet<ConsumableItem> ConsumableItems { get; set; }
        public DbSet<DiceAction> DiceActions { get; set; }
        public DbSet<EquipableItem> EquipableItems { get; set; }
        public DbSet<Guild> Guilds { get; set; }
        public DbSet<GuildRole> GuildRoles { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<KeyItem> KeyItems { get; set; }
        public DbSet<MasterAction> MasterActions { get; set; }
        public DbSet<ModeratorAction> ModeratorActions { get; set; }
        public DbSet<Race> Races { get; set; }
        public DbSet<RaceRole> RaceRoles { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<TextAction> TextActions { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
