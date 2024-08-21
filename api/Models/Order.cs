using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public string Token { get;set; }
        public OrderStatus Status { get; set; }
        public string? PaymentId { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Comment { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdateAt { get;set; }
        //Relation
        public string? AppUserId { get; set; }
        public AppUser? AppUser { get; set; }
        public double TotalAmout { get; set; }
        public int CartId { get; set; }
        public Cart Cart { get; set; }
    }

    public enum OrderStatus
    {
        PENDING,
        SUCCEEDED,
        CANCELLED
    }
}
