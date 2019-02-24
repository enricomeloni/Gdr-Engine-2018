using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class Race
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Availability { get; set; }

        //bonus given by race
        public int Health { get; set; }
        public int Mana { get; set; }
        public int Strength { get; set; }
        public int Toughness { get; set; }
        public int Agility { get; set; }
        public int Intelligence { get; set; }
        public int Willpower { get; set; }
    }
}
