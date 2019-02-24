namespace GdrEngineNet.Database.Models
{
    public class Action
    {
        public int Id { get; set; }
        public int CharacterId { get; set; }
        public Character Character { get; set; }
        public int RoomId { get; set; }
        public Room Room { get; set; }
    }
}
