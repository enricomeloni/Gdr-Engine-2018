using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace GdrEngineNet.Database.Models.Identity
{
    public class ApplicationUser : IdentityUser<int>
    {
        public DateTime CreatedAt { get; set; }
        public DateTime LastLogin { get; set; }
        public List<Character> Characters { get; set; }


        /*[MaxLength(255)]
        public override string Id { get; set; }*/

        public virtual ICollection<ApplicationUserClaim> Claims { get; set; }
        public virtual ICollection<ApplicationUserLogin> Logins { get; set; }
        public virtual ICollection<ApplicationUserToken> Tokens { get; set; }
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; }

        public static ApplicationUser DefaultUser
        {
            get
            {
                var hasher = new PasswordHasher<ApplicationUser>();

                var user = new ApplicationUser
                {
                    Id = 1,
                    UserName = "Super",
                    NormalizedUserName = "super",
                    Email = "super@super.ex",
                    NormalizedEmail = "super@super.ex",
                    EmailConfirmed = true,
                    SecurityStamp = string.Empty,
                    PhoneNumberConfirmed = true
                };

                user.PasswordHash = hasher.HashPassword(user, "super");
                return user;
            }
        }

    }

}
