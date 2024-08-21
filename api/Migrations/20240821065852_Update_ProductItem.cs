using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Update_ProductItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a3912280-b71b-4b54-bf65-b5089a229e98");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed83cfcc-5b59-4a47-8774-26191adc9d7c");

            migrationBuilder.AddColumn<int>(
                name: "PizzaType",
                table: "ProductItems",
                type: "int",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "ac9914bd-55cd-4cb5-83fa-ce0316ce95ec", null, "User", "USER" },
                    { "b7dfca24-4ebb-4783-8074-26181b72d542", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ac9914bd-55cd-4cb5-83fa-ce0316ce95ec");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b7dfca24-4ebb-4783-8074-26181b72d542");

            migrationBuilder.DropColumn(
                name: "PizzaType",
                table: "ProductItems");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a3912280-b71b-4b54-bf65-b5089a229e98", null, "Admin", "ADMIN" },
                    { "ed83cfcc-5b59-4a47-8774-26191adc9d7c", null, "User", "USER" }
                });
        }
    }
}
