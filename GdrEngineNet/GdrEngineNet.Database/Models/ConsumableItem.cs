namespace GdrEngineNet.Database.Models
{
    public class ConsumableItem : Item
    {
        public CharacteristicsSet Bonuses { get; set; }
        public int Duration { get; set; }
    }
}
