using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser: IdentityUser
    {
        public string? ProviderId { get; set; }
        public string? Provider { get; set; }
        //Relation
        public List<Cart> Carts { get; set; } = new List<Cart>();
        public List<Order> Orders { get; set; } = new List<Order>();
         
    }
}
