using System.Collections.Generic;

namespace GdrEngineNet.Database.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public List<Action> Actions { get; set; }
    }
}
