using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.Migrations
{
    public partial class RemoveFourUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //This didn't work. Deleting data goes in the up method if there is not
            //Anything else you wish to do.
            migrationBuilder.DeleteData("Users", "Id", 1);
            migrationBuilder.DeleteData("Users", "Id", 2);
            migrationBuilder.DeleteData("Users", "Id", 3);
            migrationBuilder.DeleteData("Users", "Id", 4);
            
        }
    }
}
