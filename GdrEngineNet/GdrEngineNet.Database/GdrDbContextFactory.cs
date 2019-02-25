using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace GdrEngineNet.Database
{
    class GdrDbContextFactory : IDesignTimeDbContextFactory<GdrDbContext>
    {
        public GdrDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<GdrDbContext>();
            optionsBuilder.UseMySQL(Environment.GetEnvironmentVariable("GdrEngineDb"));

            return new GdrDbContext(optionsBuilder.Options);
        }
    }
}
