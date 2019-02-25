using System.Collections.Generic;

namespace GdrEngineNet.Database.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<CharacterItem> CharacterItems { get; set; }
    }
}
