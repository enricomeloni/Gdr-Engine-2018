using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class CharacterRaceRole
    {
        public int CharacterId { get; set; }
        public Character Character { get; set; }
        public int RaceRoleId { get; set; }
        public RaceRole RaceRole { get; set; }
    }
}
