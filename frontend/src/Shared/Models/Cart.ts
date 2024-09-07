import { CartItemGet } from "./CartItem";

export type CartGet = {
    // public int CartId { get; set; }
    // public double TotalAmount { get; set; } = 0;
    // public string Token { get; set; }  
    // //Relation
    // public string? AppUserId { get; set; }
    // public AppUser? AppUser { get; set; }
    // public List<CartItem> CartItems { get; set; } = new List<CartItem>();
    // //TODO: May be it should be ONE TO ONE,
    // public List<Order> Orders { get; set; } = new List<Order>();
    cartId:number;
    totalAmount:number;
    token:string;
    appUserId?:string;
    cartItems:CartItemGet[];
}