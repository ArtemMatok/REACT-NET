using api.Models;

namespace api.Repositories.AuthToken
{
   
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
