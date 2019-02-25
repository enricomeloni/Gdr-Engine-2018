using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace GdrEngineNet.Database
{
    class GdrDbContextFactory : IDesignTimeDbContextFactory<GdrDbContext>
    {
        public GdrDbContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("dbsettings.json");

            var configuration = builder.Build();
            var connectionString = configuration.GetConnectionString("GdrEngineDb");

            var optionsBuilder = new DbContextOptionsBuilder<GdrDbContext>();
            optionsBuilder.UseMySQL(connectionString);

            return new GdrDbContext(optionsBuilder.Options);
        }
    }
}
