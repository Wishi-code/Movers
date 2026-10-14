namespace MoversBackend.Models;
public class QuoteRequest
{
    public int Id { get; set; }
    public string Name { get; set; } ="";
    public string PhoneNumber { get; set; } ="";

    public string MovingFrom { get; set; } ="";
    public string MovingTo { get; set; } ="";

    public string PropertyType { get; set; } ="";
    public string ItemsToMove { get; set; } ="";
    public string Status { get; set; } ="Pending";
    public DateTime dateTime { get; set; } = DateTime.Now;
}