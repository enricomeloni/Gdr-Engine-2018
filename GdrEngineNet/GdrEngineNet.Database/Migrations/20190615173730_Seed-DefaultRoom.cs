using Microsoft.EntityFrameworkCore.Migrations;

namespace GdrEngineNet.Database.Migrations
{
    public partial class SeedDefaultRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 1,
                column: "ConcurrencyStamp",
                value: "6335f070-d91f-40ab-aa55-41be6eaa8779");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 2,
                column: "ConcurrencyStamp",
                value: "d8088471-beba-4fad-bd5b-e9e0b34ea70d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 3,
                column: "ConcurrencyStamp",
                value: "b5f188d4-1ccb-4986-a3f6-5e6ad69d4433");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 4,
                column: "ConcurrencyStamp",
                value: "5476c72b-065c-41ba-ae66-f18d15189cfe");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 5,
                column: "ConcurrencyStamp",
                value: "6cc5db89-2ad7-4412-a0c7-91ecf8f19043");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "81c584e2-b8a6-4efc-8bc9-f22f9f81480e", "AQAAAAEAACcQAAAAECm6TqDl5h0FcOAijDz1MEk6PakTxGYsyvsp+1swwPVFhqLsfSRVP5FrCrwp6vgvZA==" });

            migrationBuilder.InsertData(
                table: "Rooms",
                columns: new[] { "Id", "Description", "ImageUrl", "Name" },
                values: new object[] { 1, "Default Room", "", "Default" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Rooms",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 1,
                column: "ConcurrencyStamp",
                value: "dc475f7f-cd3e-4fe0-8957-6b4cde7f4fe2");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 2,
                column: "ConcurrencyStamp",
                value: "09ba08f9-2c4a-42c4-af67-76a81ecf68ee");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 3,
                column: "ConcurrencyStamp",
                value: "42cefa8c-b029-4f1d-87e0-2ad6adbe04e6");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 4,
                column: "ConcurrencyStamp",
                value: "099d3fd7-6a9c-4596-8754-42a227dbfb2b");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: 5,
                column: "ConcurrencyStamp",
                value: "813f7358-4fc9-4ed7-a4a6-3ebdb4d57a6a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ConcurrencyStamp", "PasswordHash" },
                values: new object[] { "a0447121-e343-4515-91b1-5b2bd76c4844", "AQAAAAEAACcQAAAAEHsWmv0YmnpTFr2Y70g9Li9/20CpCfM+PEWPqfzVxLZFsMDcdrhoYlBjXLqXZ02vZw==" });
        }
    }
}
