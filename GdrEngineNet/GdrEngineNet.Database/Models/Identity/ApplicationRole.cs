using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace GdrEngineNet.Database.Models.Identity
{
    public class ApplicationRole : IdentityRole<int>
    {
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }


        public static readonly ApplicationRole UserRole = new ApplicationRole
        {
            Id = 1,
            Name = "User",
            NormalizedName = "user"
        };
        public static readonly ApplicationRole MasterRole = new ApplicationRole
        {
            Id = 2,
            Name = "Master",
            NormalizedName = "master"
        };
        public static readonly ApplicationRole AdminRole = new ApplicationRole
        {
            Id = 3,
            Name = "Admin",
            NormalizedName = "admin"
        };
        public static readonly ApplicationRole ModeratorRole = new ApplicationRole
        {
            Id = 4,
            Name = "Moderator",
            NormalizedName = "moderator"
        };
        public static readonly ApplicationRole SuperRole = new ApplicationRole
        {
            Id = 5,
            Name = "Super",
            NormalizedName = "super"
        };

        public static readonly ApplicationRole[] Roles =
        {
            UserRole, MasterRole, AdminRole, ModeratorRole, SuperRole
        };
    }
}
