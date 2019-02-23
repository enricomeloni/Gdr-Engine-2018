using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class ConsumableItem : Item
    {
        public CharacteristicsSet Bonuses { get; set; }
        public int Duration { get; set; }
    }
}
