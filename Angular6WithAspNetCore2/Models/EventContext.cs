using Microsoft.EntityFrameworkCore;

namespace Angular6WithAspNetCore2.Models
{
    public class EventContext : DbContext
    {
        public EventContext(DbContextOptions<EventContext> options) : base(options)
        {
        }

        public DbSet<Event> Event { get; set; }
    }
}
