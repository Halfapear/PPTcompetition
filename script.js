document.addEventListener('DOMContentLoaded', function() {
    var dp = new DayPilot.Scheduler("dpScheduler");

    // 设置开始日期为3月15日
    dp.startDate = new DayPilot.Date("2024-03-15");
    dp.days = 7; // 显示从开始日期起的7天，即3月15日至3月21日

    dp.scale = "CellDuration";
    dp.cellDuration = 120; // 每个格代表120分钟
    dp.cellWidth = 30; // 单元格宽度
    dp.timeHeaders = [
        { groupBy: "Month" },
        { groupBy: "Day", format: "MMMM d, yyyy" }, // 显示完整的日期
    ];

    // 定义一天中的时间段
    dp.resources = [
        { name: "08:00 - 10:00", id: "1" },
        { name: "10:00 - 12:00", id: "2" },
        { name: "12:00 - 14:00", id: "3" },
        { name: "14:00 - 16:00", id: "4" },
        { name: "16:00 - 18:00", id: "5" }
    ];

    dp.events.list = [];

    // 时间段选择处理
    dp.timeRangeSelectedHandling = "Enabled";
    dp.onTimeRangeSelected = function(args) {
        var name = prompt("New event name:", "Event");
        if (!name) return;
        var colorIndex = prompt("Choose a color (1-Blue, 2-Red, 3-Yellow):", "1");
        var color = "#3777ff"; // 默认蓝色
        switch(colorIndex) {
            case "1":
                color = "#3777ff"; // 蓝色
                break;
            case "2":
                color = "#ff0000"; // 红色
                break;
            case "3":
                color = "#ffff00"; // 黄色
                break;
        }

        dp.clearSelection();
        var e = new DayPilot.Event({
            start: args.start,
            end: args.end,
            id: DayPilot.guid(),
            resource: args.resource,
            text: name,
            backColor: color
        });
        dp.events.add(e);
    };

    dp.init();
});
