﻿using System.ComponentModel.DataAnnotations;

namespace api.DTOs.AppUserDTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage ="User name is required")]
        public string? UserName { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string? Email { get; set; }
        [Required(ErrorMessage ="Password is required")]
        public string? Password { get; set; }
    }
}
