﻿// <auto-generated />
using System;
using GdrEngineNet.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GdrEngineNet.Database.Migrations
{
    [DbContext(typeof(GdrDbContext))]
    partial class GdrDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity("GdrEngineNet.Database.Models.Action", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CharacterId");

                    b.Property<int>("RoomId");

                    b.HasKey("Id");

                    b.HasIndex("CharacterId");

                    b.HasIndex("RoomId");

                    b.ToTable("Action");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("CharacteristicsId");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<int>("Experience");

                    b.Property<string>("FirstName")
                        .IsRequired();

                    b.Property<string>("LastName");

                    b.Property<string>("MiddleName");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CharacteristicsId");

                    b.HasIndex("UserId");

                    b.ToTable("Characters");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.CharacteristicsSet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Agility");

                    b.Property<int>("Health");

                    b.Property<int>("Intelligence");

                    b.Property<int>("Mana");

                    b.Property<int>("Strength");

                    b.Property<int>("Toughness");

                    b.Property<int>("Willpower");

                    b.HasKey("Id");

                    b.ToTable("CharacteristicsSet");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Class", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Availability");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Classes");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Guild", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Availability");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Guilds");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Items");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Race", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Agility");

                    b.Property<int>("Availability");

                    b.Property<int>("Health");

                    b.Property<int>("Intelligence");

                    b.Property<int>("Mana");

                    b.Property<string>("Name");

                    b.Property<int>("Strength");

                    b.Property<int>("Toughness");

                    b.Property<int>("Willpower");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Races");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("ImageUrl");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Email");

                    b.Property<DateTime>("LastLogin");

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<int>("Role");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Action", b =>
                {
                    b.HasOne("GdrEngineNet.Database.Models.Character", "Character")
                        .WithMany()
                        .HasForeignKey("CharacterId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GdrEngineNet.Database.Models.Room", "Room")
                        .WithMany("Actions")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GdrEngineNet.Database.Models.Character", b =>
                {
                    b.HasOne("GdrEngineNet.Database.Models.CharacteristicsSet", "Characteristics")
                        .WithMany()
                        .HasForeignKey("CharacteristicsId");

                    b.HasOne("GdrEngineNet.Database.Models.User", "User")
                        .WithMany("Characters")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}