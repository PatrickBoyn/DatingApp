using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.Models
{
    [Table("Values")]
    public class Value
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}