using System.Collections.Generic;

namespace GdrEngineNet.Database.Models
{
    public class GuildRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GuildId { get; set; }
        public Guild Guild { get; set; }


        public List<CharacterGuildRole> CharacterGuildRoles { get; set; }
    }
}
