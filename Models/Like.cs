using System.ComponentModel.DataAnnotations.Schema;

namespace DatingApp.Models
{
    [Table("Likes")]
    public class Like
    {
        public int LikerId { get; set; }
        public int LikeeId { get; set; }
        public User Liker { get; set; }
        public User Likee { get; set; }
    }
}