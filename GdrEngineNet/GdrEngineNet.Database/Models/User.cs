using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gdr_engine_net.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; } 
        public string Password { get; set; }
        public Roles Role { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime LastLogin { get; set; }

        public List<Character> Characters { get; set; }
    }


    public enum Roles
    {
        User,
        Master,
        Moderator,
        Admin,
        Super
    }
}
