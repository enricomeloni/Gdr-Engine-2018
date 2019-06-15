using System;
using System.Linq;
using GdrEngineNet.Database.Models;
using GdrEngineNet.WebApp.ModelView;

namespace GdrEngineNet.WebApp.Services
{
    public class DiceService
    {
        private Random rng = new Random();

        public Dice GenerateDiceAction(int max)
        {
            var diceResult = rng.Next(max);

            return new Dice()
            {
                Max = max,
                Result = diceResult,
            };

        }
    }
}