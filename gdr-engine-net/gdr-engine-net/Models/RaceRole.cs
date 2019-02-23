using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class RaceRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int RaceId { get; set; }
        public Race Race { get; set; }
    }
}
