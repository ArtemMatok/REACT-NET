﻿using api.DTOs.IngredientDTOs;
using api.Models;

namespace api.Repositories.IngredientsRepo
{
    public interface IIngredientRepository
    {
        Task<List<IngredientFilter>?> GetAllIngredients();
    }
}
