using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.Migrations
{
    public partial class SecondAttempt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData("Users", "Id", 1);
            migrationBuilder.DeleteData("Users", "Id", 2);
            migrationBuilder.DeleteData("Users", "Id", 3);
            migrationBuilder.DeleteData("Users", "Id", 4);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            
        }
    }
}
