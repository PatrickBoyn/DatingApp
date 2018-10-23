using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.Migrations
{
    public partial class AddValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData("Values", "Name", "Value1");
            migrationBuilder.InsertData("Values", "Name", "Value2");
            migrationBuilder.InsertData("Values", "Name", "Value3");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData("Values", "Name", "Value1");
            migrationBuilder.DeleteData("Values", "Name", "Value2");
            migrationBuilder.DeleteData("Values", "Name", "Value3");
        }
    }
}
