document.addEventListener('DOMContentLoaded', function() {
    var dp = new DayPilot.Scheduler("dpScheduler");

    dp.startDate = DayPilot.Date.today();
    dp.days = 7;
    dp.scale = "Day";
    dp.timeHeaders = [
        { groupBy: "Month" },
        { groupBy: "Day", format: "dddd" }
    ];

    dp.resources = [
        { name: "Resource A", id: "A" },
        { name: "Resource B", id: "B" }
    ];

    dp.events.list = [
        {
            id: 1,
            text: "Event 1",
            start: DayPilot.Date.today().addHours(10),
            end: DayPilot.Date.today().addHours(14),
            resource: "A"
        },
        {
            id: 2,
            text: "Event 2",
            start: DayPilot.Date.today().addDays(1).addHours(9),
            end: DayPilot.Date.today().addDays(1).addHours(12),
            resource: "B"
        }
    ];

    // Event handlers for interaction
    dp.onEventClicked = function(args) {
        alert("Event clicked: " + args.e.text());
    };

    dp.eventMoveHandling = "Update";
    dp.onEventMoved = function (args) {
        alert("Event moved: " + args.e.text());
    };

    dp.eventResizeHandling = "Update";
    dp.onEventResized = function (args) {
        alert("Event resized: " + args.e.text());
    };

    // Additional interaction features can be added here

    dp.init();
});
