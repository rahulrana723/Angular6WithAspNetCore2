using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular6WithAspNetCore2.Models;
using Microsoft.AspNetCore.Mvc;

namespace Angular6WithAspNetCore2.Controllers
{
    [Route("api/event")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly EventContext context;

        public EventController(EventContext context)
        {
            this.context = context;
        }

        // GET api/values
        [HttpGet]
        [Route("GetEvents")]
        public ActionResult GetEvents()
        {
            var events = this.context.Event.ToList();
            return this.Ok(events);
        }

        [HttpGet]
        [Route("GetEvent/{id}")]
        public ActionResult GetEvent(int id)
        {
            var eventInfo = this.context.Event.First(e => e.Id == id);
            return this.Ok(eventInfo);
        }

        [HttpPost]
        public ActionResult SaveEvent(Event eventInfo)
        {
            this.context.Event.Add(eventInfo);
            this.context.SaveChanges();

            return this.Ok();
        }

        [HttpPut]
        public ActionResult UpdateEvent(Event eventInfo)
        {
            this.context.Event.Update(eventInfo);
            this.context.SaveChanges();

            return this.Ok();
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            var eventInfo = this.context.Event.First(e => e.Id == id);
            this.context.Event.Remove(eventInfo);
            this.context.SaveChanges();

            return this.Ok();
        }
    }
}
