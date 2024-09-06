using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Update_Cart : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2d22a6d0-cb08-47c0-bef9-0f9f952e6233");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74fb5727-a8eb-4770-9e11-1b78a5c909e8");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4596160e-cc48-4ae2-8eb1-70abea1af219", null, "User", "USER" },
                    { "a533ed45-ecd4-4362-817b-67614bfe95e0", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4596160e-cc48-4ae2-8eb1-70abea1af219");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a533ed45-ecd4-4362-817b-67614bfe95e0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "2d22a6d0-cb08-47c0-bef9-0f9f952e6233", null, "User", "USER" },
                    { "74fb5727-a8eb-4770-9e11-1b78a5c909e8", null, "Admin", "ADMIN" }
                });
        }
    }
}
