namespace GdrEngineNet.Database.Models
{
    public class DiceAction : GameAction
    {
        public int RolledDice { get; set; }
        public int Result { get; set; }
        public int CharacteristicValue { get; set; }

        /**
         * todo: this could be tricky to do.
         * The property should be used to remember on which characteristics the dice was thrown
         */
        public string Characteristic { get; set; }

        //json string with applied bonuses?
        public string Bonuses { get; set; }
    }
}
