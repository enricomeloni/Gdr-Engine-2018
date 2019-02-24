namespace GdrEngineNet.Database.Models
{
    public class CharacterClassRole
    {
        public int CharacterId { get; set; }
        public Character Character { get; set; }

        public int ClassRoleId { get; set; }
        public ClassRole ClassRole { get; set; }
    }
}
