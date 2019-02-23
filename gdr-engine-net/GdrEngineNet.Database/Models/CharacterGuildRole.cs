using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class CharacterGuildRole
    {
        public int CharacterId { get; set; }
        public Character Character { get; set; }
        public int GuildRoleId { get; set; }
        public GuildRole GuildRole { get; set; }

        public string Name { get; set; }
    }
}
