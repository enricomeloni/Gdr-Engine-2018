using System;
using System.Collections.Generic;

namespace GdrEngineNet.Database.Models
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
