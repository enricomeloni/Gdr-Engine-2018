namespace GdrEngineNet.Database.Models
{
    public class ClassRole
    {
        public string Name { get; set; }
        public int ClassId { get; set; }
        public Class Class { get; set; }
    }
}
