using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace api.Helpers.Token
{
    public static class CartToken
    {
        private const string SecretKey = "aksjdnakjsn_as9A8SDHIuaskjAS79BIAsbabSYOBCiaybscjhasboHSJKCH-bHAZsbpcihasbkJH"; // Задайте секретний ключ
        private const int TokenExpirationMinutes = 30; // Термін дії токена

        public static string GenerateToken()
        {
            // Налаштування ключа шифрування
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Створення claims (даних, які будуть в токені)
            var claims = new[]
            {
            new Claim(JwtRegisteredClaimNames.Sub, "user_id"),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

            // Створення токена
            var token = new JwtSecurityToken(
                issuer: "pizza_store", // Видавець токена
                audience: "client_pizza_store", // Аудиторія
                claims: claims,
                expires: DateTime.Now.AddMinutes(TokenExpirationMinutes),
                signingCredentials: credentials
            );

            // Повернення токена у вигляді рядка
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
