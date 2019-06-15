using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace GdrEngineNet.Database.Models.Identity
{
    public class ApplicationUserLogin : IdentityUserLogin<int>
    {
        [MaxLength(256)]
        public override string LoginProvider { get; set; }

        [MaxLength(256)]
        public override string ProviderKey { get; set; }

        public override int UserId { get; set; }

    }
}
