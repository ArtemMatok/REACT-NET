using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Add_Models2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_VerificationCode_VerificationCodeId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "VerificationCode");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_VerificationCodeId",
                table: "AspNetUsers");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8be1792e-5797-4b17-a482-dafcb5b75024");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8d87cf96-88de-4962-bbe6-277af5201c23");

            migrationBuilder.DropColumn(
                name: "VerificationCodeId",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "273e4149-b16e-49bf-9fde-481ea0c54550", null, "Admin", "ADMIN" },
                    { "642e4744-ce50-488d-8712-8d71d49189f6", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "273e4149-b16e-49bf-9fde-481ea0c54550");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "642e4744-ce50-488d-8712-8d71d49189f6");

            migrationBuilder.AddColumn<int>(
                name: "VerificationCodeId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "VerificationCode",
                columns: table => new
                {
                    VerificationCodeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppUserId = table.Column<int>(type: "int", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VerificationCode", x => x.VerificationCodeId);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "8be1792e-5797-4b17-a482-dafcb5b75024", null, "User", "USER" },
                    { "8d87cf96-88de-4962-bbe6-277af5201c23", null, "Admin", "ADMIN" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_VerificationCodeId",
                table: "AspNetUsers",
                column: "VerificationCodeId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_VerificationCode_VerificationCodeId",
                table: "AspNetUsers",
                column: "VerificationCodeId",
                principalTable: "VerificationCode",
                principalColumn: "VerificationCodeId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
