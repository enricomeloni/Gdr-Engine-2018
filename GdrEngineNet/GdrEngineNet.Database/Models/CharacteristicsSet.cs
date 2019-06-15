using System;
using System.Linq;

namespace GdrEngineNet.Database.Models
{
    public class CharacteristicsSet
    {
        public int Id { get; set; }
        public int Health { get; set; }
        public int Mana { get; set; }
        public int Strength { get; set; }
        public int Toughness { get; set; }
        public int Agility { get; set; }
        public int Intelligence { get; set; }
        public int Willpower { get; set; }

        public int this[string key]
        {
            get
            {
                if (!Characteristics.Contains(key))
                    throw new ArgumentOutOfRangeException(nameof(key), key,
                        message: "Characteristic must be one of " + string.Join(",", Characteristics));

                switch (key)
                {
                    case "Health":
                        return Health;
                    case "Mana":
                        return Mana;
                    case "Strength":
                        return Strength;
                    case "Toughness":
                        return Toughness;
                    case "Agility":
                        return Agility;
                    case "Intelligence":
                        return Intelligence;
                    case "Willpower":
                        return Willpower;
                }

                return 0;
            }

            set
            {
                if (!Characteristics.Contains(key))
                    throw new ArgumentOutOfRangeException(nameof(key), key,
                        message: "Characteristic must be one of " + string.Join(",", Characteristics));
                switch (key)
                {
                    case "Health":
                        Health = value;
                        break;
                    case "Mana":
                        Mana = value;
                        break;
                    case "Strength":
                        Strength = value;
                        break;
                    case "Toughness":
                        Toughness = value;
                        break;
                    case "Agility":
                        Agility = value;
                        break;
                    case "Intelligence":
                        Intelligence = value;
                        break;
                    case "Willpower":
                        Willpower = value;
                        break;
                }
            }
        }


        public static readonly string[] Characteristics = {
            "Health",
            "Mana",
            "Strength",
            "Toughness",
            "Agility",
            "Intelligence",
            "Willpower"
        };
    }
}
