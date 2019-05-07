using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace GdrEngineNet.Database
{
    public class GdrDbContextFactory : IDesignTimeDbContextFactory<GdrDbContext>
    {
        private IConfigurationRoot Configuration;
        public DbContextOptionsBuilder<GdrDbContext> OptionsBuilder { get; }
        public GdrDbContextFactory()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("dbsettings.json");

            Configuration = builder.Build();
            OptionsBuilder = new DbContextOptionsBuilder<GdrDbContext>();

            ConfigureOptionsBuilder(OptionsBuilder);
        }

        public GdrDbContext CreateDbContext(string[] args)
        {
            return new GdrDbContext(OptionsBuilder.Options);
        }

        public void ConfigureOptionsBuilder(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = Configuration.GetConnectionString("GdrEngineDb");
            optionsBuilder.UseMySQL(connectionString);
        }
    }
}
