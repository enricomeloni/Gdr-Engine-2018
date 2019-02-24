namespace GdrEngineNet.Database.Models
{
    public class CharacterRaceRole
    {
        public int CharacterId { get; set; }
        public Character Character { get; set; }
        public int RaceRoleId { get; set; }
        public RaceRole RaceRole { get; set; }
    }
}
