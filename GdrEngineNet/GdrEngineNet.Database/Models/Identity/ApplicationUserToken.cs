using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace GdrEngineNet.Database.Models.Identity
{
    public class ApplicationUserToken : IdentityUserToken<int>
    {
        [MaxLength(256)]
        public override string LoginProvider { get; set; }

        [MaxLength(256)]
        public override string Name { get; set; }
    }
}
