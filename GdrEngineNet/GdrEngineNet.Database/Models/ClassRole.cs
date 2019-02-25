using System.Collections.Generic;

namespace GdrEngineNet.Database.Models
{
    public class ClassRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ClassId { get; set; }
        public Class Class { get; set; }

        public List<CharacterClassRole> CharacterClassRoles { get; set; }
    }
}
