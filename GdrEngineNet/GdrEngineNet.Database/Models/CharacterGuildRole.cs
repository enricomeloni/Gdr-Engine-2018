namespace GdrEngineNet.Database.Models
{
    public class CharacterGuildRole
    {
        public int CharacterId { get; set; }
        public Character Character { get; set; }
        public int GuildRoleId { get; set; }
        public GuildRole GuildRole { get; set; }
    }
}
