using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GdrEngineNet.Database.Models
{
    public class Character
    {
        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        //todo: ef core does not support complex types
        public CharacteristicsSet Characteristics { get; set; }
        public int Experience { get; set; }

        public int UserId { get; set; }
        public ApplicationUser User { get; set; }
        public DateTime CreatedAt { get; set; }

        //todo: add many to many relationships

        public ICollection<CharacterClassRole> CharacterClassRoles { get; set; }
        public ICollection<CharacterGuildRole> CharacterGuildRoles { get; set; }
        public ICollection<CharacterRaceRole> CharacterRaceRoles { get; set; }
        public ICollection<CharacterItem> CharacterItems { get; set; }
    }
}
