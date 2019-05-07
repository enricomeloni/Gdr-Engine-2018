using GdrEngineNet.Database.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GdrEngineNet.WebApp.ModelView
{
    public class ActionView
    {
        public string Text { get; set; }
        public string Tag { get; set; }
        public int CharacterId { get; set; }
        public int RoomId { get; set; }
        public string ActionType { get; set; }

        public GameAction GetGameAction()
        {
            GameAction gameAction;

            switch(ActionType)
            {
                case "TextAction":
                    gameAction = new TextAction()
                    {
                        Text = Text,
                        Tag = Tag,
                        CharacterId = CharacterId,
                        RoomId = RoomId
                    };
                    break;
                default:
                    throw new NotImplementedException();
                    break;
            }

            return gameAction;
        }
    }
}
