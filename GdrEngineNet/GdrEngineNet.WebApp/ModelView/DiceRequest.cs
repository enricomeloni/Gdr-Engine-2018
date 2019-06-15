using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GdrEngineNet.WebApp.ModelView
{
    public class DiceRequest
    {
        //max value for dice
        public int Dice { get; set; }
        //characteristic on which to throw dice
        public string Characteristic { get; set; }
        public int CharacterId { get; set; }
        public int RoomId { get; set; }
    }
}
