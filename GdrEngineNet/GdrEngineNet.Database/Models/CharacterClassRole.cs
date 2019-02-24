using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class CharacterClassRole
    {
        public int CharacterId { get; set; }
        public Character Character { get; set; }

        public int ClassRoleId { get; set; }
        public ClassRole ClassRole { get; set; }
    }
}
