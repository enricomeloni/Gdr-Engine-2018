using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using GdrEngineNet.Database.Models;
using GdrEngineNet.Database.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace GdrEngineNet.Database
{
    public class GdrDbContext : 
        IdentityDbContext<ApplicationUser, ApplicationRole, int, ApplicationUserClaim, ApplicationUserRole, ApplicationUserLogin, ApplicationRoleClaim, ApplicationUserToken>
    {
        public GdrDbContext(DbContextOptions<GdrDbContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Guild>()
                .HasIndex(e => e.Name)
                .IsUnique();

            modelBuilder.Entity<Race>()
                .HasIndex(e => e.Name)
                .IsUnique();

            modelBuilder.Entity<ApplicationUser>()
                .HasIndex(e => e.Email)
                .IsUnique();


            modelBuilder.Entity<ApplicationUser>(b =>
            {
                b.Property(o => o.EmailConfirmed).HasConversion<short>();
                b.Property(o => o.TwoFactorEnabled).HasConversion<short>();
                b.Property(o => o.LockoutEnabled).HasConversion<short>();
                b.Property(o => o.PhoneNumberConfirmed).HasConversion<short>();
            });


            /*
            modelBuilder.Entity<IdentityUserLogin<int>>(b =>
            {
                b.Property(o => o.LoginProvider).HasMaxLength(255);
                b.Property(o => )
            })*/

            modelBuilder.Entity<ApplicationUser>(b =>
            {
                b.HasMany(e => e.Claims)
                    .WithOne()
                    .HasForeignKey(uc => uc.UserId)
                    .IsRequired();

                // Each User can have many UserLogins
                b.HasMany(e => e.Logins)
                    .WithOne()
                    .HasForeignKey(ul => ul.UserId)
                    .IsRequired();

                // Each User can have many UserTokens
                b.HasMany(e => e.Tokens)
                    .WithOne()
                    .HasForeignKey(ut => ut.UserId)
                    .IsRequired();

                // Each User can have many entries in the UserRole join table
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.User)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

            modelBuilder.Entity<ApplicationRole>(b =>
            {
                // Each Role can have many entries in the UserRole join table
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.Role)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();
            });


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


            // -------- seeding ---------- //

            //seed roles
            modelBuilder.Entity<ApplicationRole>().HasData(
                ApplicationRole.Roles
            );

            modelBuilder.Entity<ApplicationUser>().HasData(
                ApplicationUser.DefaultUser
            );

            modelBuilder.Entity<ApplicationUserRole>().HasData(
                new ApplicationUserRole
                {
                    RoleId = ApplicationRole.SuperRole.Id,
                    UserId = ApplicationUser.DefaultUser.Id
                }
            );

            modelBuilder.Entity<Character>().HasData(
                Character.DefaultCharacter
            );

            modelBuilder.Entity<CharacteristicsSet>().HasData(
                CharacteristicsSet.DefaultCharacteristics
            );

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
        //public DbSet<ApplicationUser> Users { get; set; }
    }
}
