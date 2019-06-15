using Microsoft.EntityFrameworkCore.Migrations;

namespace GdrEngineNet.Database.Migrations
{
    public partial class EditDiceAction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "CharacterGuildRoles");

            migrationBuilder.AddColumn<int>(
                name: "CharacteristicValue",
                table: "Actions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CharacteristicValue",
                table: "Actions");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "CharacterGuildRoles",
                nullable: true);
        }
    }
}
