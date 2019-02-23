using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
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
        public User User { get; set; }

        //todo: add many to many relationships
    }
}
