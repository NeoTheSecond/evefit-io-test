const columns = [
    {
        id: "mon-05",
        title: "MON",
        date: "05",
        workouts: ["workout-1"],
    },
    {
        id: "tue-06",
        title: "TUE",
        date: "06",
        workouts: ["workout-2", "workout-3"],
    },
    {
        id: "wed-07",
        title: "WED",
        date: "07",
        workouts: ["workout-4"],
    },
    {
        id: "thu-08",
        title: "THU",
        date: "08",
        workouts: [],
    },
    {
        id: "fri-09",
        title: "FRI",
        date: "09",
        workouts: [],
    },
    {
        id: "sat-10",
        title: "SAT",
        date: "10",
        workouts: [],
    },
    {
        id: "sun-11",
        title: "SUN",
        date: "11",
        workouts: ["workout-5"],
    },
];

const workouts = {
    "workout-1": {
        id: "workout-1",
        name: "Chest Day - With Arm Movement",
        exercises: [
            {
                name: "Bench Press Medium Grip",
                info: "50 lb x 5,60 lb x 5, 70 lb x 5",
                sets: 1,
            },
            {
                name: "Exercise B",
                info: "40 lb x 10",
                sets: 2,
            },
        ],
    },
    "workout-2": {
        id: "workout-2",
        name: "Leg Day",
        exercises: [
            {
                name: "Exercise B",
                info: "30 lb x 6",
                sets: 3,
            },
            {
                name: "Exercise D",
                info: "30 lb x 6",
                sets: 2,
            },
            {
                name: "Exercise F",
                info: "20 lb x 6",
                sets: 5,
            },
        ],
    },
    "workout-3": {
        id: "workout-3",
        name: "Arm Day",
        exercises: [
            {
                name: "Exercise C",
                info: "50 lb x 6",
                sets: 1,
            },
        ],
    },
    "workout-4": {
        id: "workout-4",
        name: "Cardio",
        exercises: [
            {
                name: "Exercise D",
                info: "30 lb x 6",
                sets: 2,
            },
        ],
    },
    "workout-5": {
        id: "workout-5",
        name: "Strength training",
        exercises: [
            {
                name: "Exercise H",
                info: "30 lb x 6",
                sets: 1,
            },
            {
                name: "Exercise K",
                info: "30 lb x 6",
                sets: 2,
            },
        ],
    },
};

const columnOrder = columns.map((col) => col.id);

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var curr = new Date(); // get current date
var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
for (let i = 0; i < 7; i++) {
    let date = new Date(curr.setDate(first + i));
    columns[i].date = date.getDate();
    columns[i].title = days[date.getDay()].toUpperCase();
    columns[i].id = date.toDateString();
    columnOrder[i] = date.toDateString();
}

// creating initial data
const data = {
    workouts,
    columns,
    columnOrder,
};

export default data;
