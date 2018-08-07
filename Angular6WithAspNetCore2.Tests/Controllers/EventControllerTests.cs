using Angular6WithAspNetCore2.Models;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Angular6WithAspNetCore2.Controllers;
using Xunit;
using Microsoft.AspNetCore.Mvc;

namespace Angular6WithAspNetCore2.Tests.Controllers
{
    public class EventControllerTests
    {
        private readonly IQueryable<Event> events;
        private const int EventId = 1;

        public EventControllerTests()
        {
            events = new List<Event>
            {
                new Event
                {
                    Id=1,
                    EventName = "Event1",
                    Description = "Anything",
                    Place = "City1"
                },
                new Event
                {
                    Id=2,
                    EventName = "Event2",
                    Description = "Anything",
                    Place = "City2"
                }

            }.AsQueryable();
        }

        [Fact]
        public void GetEvents_EventsExist_EventsReturned()
        {
            // Arrange

            var mockSet = new Mock<DbSet<Event>>();
            mockSet.As<IQueryable<Event>>().Setup(m => m.Provider).Returns(events.Provider);
            mockSet.As<IQueryable<Event>>().Setup(m => m.Expression).Returns(events.Expression);
            mockSet.As<IQueryable<Event>>().Setup(m => m.ElementType).Returns(events.ElementType);
            mockSet.As<IQueryable<Event>>().Setup(m => m.GetEnumerator()).Returns(events.GetEnumerator());

            var mockContext = new Mock<EventContext>();
            mockContext.Setup(c => c.Event).Returns(mockSet.Object);

            var eventController = new EventController(mockContext.Object);

            // Act
            var actual = (OkObjectResult)eventController.GetEvents();

            // Assert
            var actualValue = actual.Value as List<Event>;
            Assert.Equal(2, actualValue.Count);
        }

        [Fact]
        public void GetEvent_ValidEventIdPassedIn_EventReturned()
        {
            // Arrange

            var mockSet = new Mock<DbSet<Event>>();
            mockSet.As<IQueryable<Event>>().Setup(m => m.Provider).Returns(events.Provider);
            mockSet.As<IQueryable<Event>>().Setup(m => m.Expression).Returns(events.Expression);
            mockSet.As<IQueryable<Event>>().Setup(m => m.ElementType).Returns(events.ElementType);
            mockSet.As<IQueryable<Event>>().Setup(m => m.GetEnumerator()).Returns(events.GetEnumerator());

            var mockContext = new Mock<EventContext>();
            mockContext.Setup(c => c.Event).Returns(mockSet.Object);

            var eventController = new EventController(mockContext.Object);

            // Act
            var actual = (OkObjectResult)eventController.GetEvent(EventId);

            // Assert
            var actualValue = actual.Value as Event;
            Assert.NotNull(actualValue);
            Assert.Equal("Event1", actualValue.EventName);
        }
    }
}
