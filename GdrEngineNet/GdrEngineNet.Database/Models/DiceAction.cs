using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class DiceAction : Action
    {
        public int RolledDice { get; set; }
        public int Result { get; set; }

        /**
         * todo: this could be tricky to do.
         * The property should be used to remember on which characteristics the dice was thrown
         */
        public string Characteristic { get; set; }

        //json string with applied bonuses?
        public string Bonuses { get; set; }
    }
}
