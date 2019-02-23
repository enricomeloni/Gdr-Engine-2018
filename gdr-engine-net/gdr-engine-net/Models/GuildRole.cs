using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class GuildRole
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int GuildId { get; set; }
        public Guild Guild { get; set; }

    }
}
