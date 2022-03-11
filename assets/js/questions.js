/* jshint esversion: 8 */

// Javascript for questions.
const questions = [{
        // 1
        question: "At which bridge does the annual Oxford and Cambridge boat race start?",
        answers: [{
                text: "Hammersmith",
                correct: false
            },
            {
                text: "Vauxhall ",
                correct: false
            },
            {
                text: "Putney",
                correct: true
            },
            {
                text: "Battersea",
                correct: false
            },
        ]
    },

    {
        // 2
        question: "With which team did Michael Schumacher make his Formula One debut at the 1991 Belgian Grand Prix?",
        answers: [{
                text: "Jordan",
                correct: true
            },
            {
                text: "Benetton",
                correct: false
            },
            {
                text: "Ferrari",
                correct: false
            },
            {
                text: "Mercedes",
                correct: false
            },
        ]
    },
    {
        // 3
        question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
        answers: [{
                text: "Bye",
                correct: false
            },
            {
                text: "Beamer",
                correct: false
            },
            {
                text: "Carry",
                correct: false
            },
            {
                text: "Duck",
                correct: true
            },
        ]
    },
    {
        // 4
        question: "Who was the British professional wrestler Shirley Crabtree better known as?",
        answers: [{
                text: "Giant Haystacks",
                correct: false
            },
            {
                text: "Big Daddy",
                correct: true
            },
            {
                text: "Kendo Nagasaki",
                correct: false
            },
            {
                text: "Masambula",
                correct: false
            },
        ]
    },
    {
        // 5
        question: "A stimpmeter measures the speed of a ball over what surface?",
        answers: [{
                text: "Golf Putting Green",
                correct: true
            },
            {
                text: "Football Pitch",
                correct: false
            },
            {
                text: "Cricket Outfield",
                correct: false
            },
            {
                text: "Pinball Table",
                correct: false
            },
        ]
    },
    {
        // 6
        question: `Which Formula One driver was nicknamed "The Professor"?`,
        answers: [{
                text: "Ayrton Senna",
                correct: false
            },
            {
                text: "Niki Lauda",
                correct: false
            },
            {
                text: "Alain Prost",
                correct: true
            },
            {
                text: "Emerson Fittipaldi",
                correct: false
            },
        ]
    },

    {
        // 7
        question: "How many scoring zones are there on a conventional dart board?",
        answers: [{
                text: "82",
                correct: true
            },
            {
                text: "62",
                correct: false
            },
            {
                text: "102",
                correct: false
            },
            {
                text: "42",
                correct: false
            },
        ]
    },

    {
        // 8
        question: "In a game of snooker, what colour ball is worth 3 points?",
        answers: [{
                text: "Yellow",
                correct: false
            },
            {
                text: "Brown",
                correct: false
            },
            {
                text: "Green",
                correct: true
            },
            {
                text: "Blue",
                correct: false
            },
        ]
    },

    {
        // 9
        question: "Which nation hosted the FIFA World Cup in 2006?",
        answers: [{
                text: "United Kingdom",
                correct: false
            },
            {
                text: "Brazil",
                correct: false
            },
            {
                text: "South Africa",
                correct: false
            },
            {
                text: "Germany",
                correct: true
            },
        ]
    },

    {
        // 10
        question: "The F1 season of 1994 is remembered for what tragic event?",
        answers: [{
                text: "The Showdown (Australia)",
                correct: false
            },
            {
                text: "Death of Ayrton Senna (San Marino)",
                correct: true
            },
            {
                text: "Verstappen on Fire (Germany)",
                correct: false
            },
            {
                text: `Schumacher's Ban (Britain)`,
                correct: false
            },
        ]
    },
    {
        // 11
        question: "Which country is hosting the 2022 FIFA World Cup?",
        answers: [{
                text: "Uganda",
                correct: false
            },
            {
                text: "Vietnam",
                correct: false
            },
            {
                text: "Qatar",
                correct: true
            },
            {
                text: "Bolivia",
                correct: false
            },
        ]
    },
    {
        // 12
        question: "Which team was the 2015-2016 NBA Champions?",
        answers: [{
                text: "Cleveland Cavaliers",
                correct: true
            },
            {
                text: "Golden State Warriors",
                correct: false
            },
            {
                text: "Toronto Raptors",
                correct: false
            },
            {
                text: "Oklahoma City Thunders",
                correct: false
            },
        ]
    },
    {
        // 13
        question: "Josh Mansour is part of what NRL team?",
        answers: [{
                text: "Melbourne Storm",
                correct: false
            },
            {
                text: "Penrith Panthers",
                correct: true
            },
            {
                text: "Sydney Roosters",
                correct: false
            },
            {
                text: "North Queensland Cowboys",
                correct: false
            },
        ]
    },
    {
        // 14
        question: "Which car manufacturer won the 2016 24 Hours of Le Mans?",
        answers: [{
                text: "Ferrari",
                correct: false
            },
            {
                text: "Audi",
                correct: false
            },
            {
                text: "Toyota",
                correct: false
            },
            {
                text: "Porsche",
                correct: true
            },
        ]
    },
    {
        // 15
        question: "What is the oldest team in the NFL?",
        answers: [{
                text: "Chicago Bears",
                correct: false
            },
            {
                text: "Arizona Cardinals",
                correct: true
            },
            {
                text: "Green Bay Packers",
                correct: false
            },
            {
                text: "New York Giants",
                correct: false
            },
        ]
    },
    {
        // 16
        question: "What is the oldest team in Major League Baseball?",
        answers: [{
                text: "Atlanta Braves",
                correct: true
            },
            {
                text: "Chicago Cubs",
                correct: false
            },
            {
                text: "Cincinnati Reds",
                correct: false
            },
            {
                text: "St. Louis Cardinals",
                correct: false
            },
        ]
    },
    {
        // 17
        question: "Which of the following Grand Slam tennis tournaments occurs LAST?",
        answers: [{
                text: "Wimbledon",
                correct: false
            },
            {
                text: "French Open",
                correct: false
            },
            {
                text: "Australian Open",
                correct: false
            },
            {
                text: "US Open",
                correct: true
            },
        ]
    },
    {
        // 18
        question: "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
        answers: [{
                text: "84.39m",
                correct: true
            },
            {
                text: "100m",
                correct: false
            },
            {
                text: "100yd",
                correct: false
            },
            {
                text: "109.36yd",
                correct: false
            },
        ]
    },
    {
        // 19
        question: "Which portuguese island is soccer player Cristiano Ronaldo from?",
        answers: [{
                text: "Terceira",
                correct: false
            },
            {
                text: "Madeira",
                correct: true
            },
            {
                text: "Santa Maria",
                correct: false
            },
            {
                text: "Porto Santo",
                correct: false
            },
        ]
    },
    {
        // 20
        question: "Who won the 2015 College Football Playoff (CFP) National Championship? ",
        answers: [{
                text: "Alabama Crimson Tide",
                correct: false
            },
            {
                text: "Clemson Tigers",
                correct: false
            },
            {
                text: "Ohio State Buckeyes",
                correct: true
            },
            {
                text: "Wisconsin Badgers",
                correct: false
            },
        ]
    },
    {
        // 21
        question: "Which country won the UEFA euro 2020",
        answers: [{
                text: "England",
                correct: false
            },
            {
                text: "Italy",
                correct: true
            },
            {
                text: "France",
                correct: false
            },
            {
                text: `Denmark`,
                correct: false
            },
        ]
    },
    {
        // 22
        question: "What year was hockey legend Wayne Gretzky born?",
        answers: [{
                text: "1965",
                correct: false
            },
            {
                text: "1959",
                correct: false
            },
            {
                text: "1963",
                correct: false
            },
            {
                text: "1961",
                correct: true
            },
        ]
    },
    {
        // 23
        question: "Which of the following pitchers was named National League Rookie of the Year for the 2013 season?",
        answers: [{
                text: "Jose Fernandez",
                correct: true
            },
            {
                text: "Jacob deGrom",
                correct: false
            },
            {
                text: "Shelby Miller",
                correct: false
            },
            {
                text: "Matt Harvey",
                correct: false
            },
        ]
    },
    {
        // 24
        question: "Why was The Green Monster at Fenway Park was originally built?",
        answers: [{
                text: "To make getting home runs harder.",
                correct: false
            },
            {
                text: "To prevent viewing games from outside the park.",
                correct: true
            },
            {
                text: "To display advertisements.",
                correct: false
            },
            {
                text: "To provide extra seating.",
                correct: false
            },
        ]
    },
    {
        // 25
        question: "Which sport is NOT traditionally played during the Mongolian Naadam festival?",
        answers: [{
                text: "Wrestling",
                correct: false
            },
            {
                text: "American Football",
                correct: true
            },
            {
                text: "Archery",
                correct: false
            },
            {
                text: "Horse-Racing",
                correct: false
            },
        ]
    },
    {
        // 26
        question: "Which car manufacturer won the 2017 24 Hours of Le Mans?",
        answers: [{
                text: "Ford",
                correct: false
            },
            {
                text: "Toyota",
                correct: false
            },
            {
                text: "Porsche",
                correct: true
            },
            {
                text: "Audi",
                correct: false
            },
        ]
    },
    {
        // 27
        question: "How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?",
        answers: [{
                text: "13",
                correct: true
            },
            {
                text: "11",
                correct: false
            },
            {
                text: "20",
                correct: false
            },
            {
                text: "22",
                correct: false
            },
        ]
    },
    {
        // 28
        question: "Who was the topscorer for England national football team?",
        answers: [{
                text: "David Beckham",
                correct: false
            },
            {
                text: "Steven Gerrard",
                correct: false
            },
            {
                text: "Michael Owen",
                correct: false
            },
            {
                text: "Wayne Rooney",
                correct: true
            },
        ]
    },
    {
        // 29
        question: "What country hosted the 2014 Winter Olympics?",
        answers: [{
                text: "Canada",
                correct: false
            },
            {
                text: "Russia",
                correct: true
            },
            {
                text: "United States",
                correct: false
            },
            {
                text: "Germany",
                correct: false
            },
        ]
    },
    {
        // 30
        question: "Which NBA player has the most games played over the course of their career?",
        answers: [{
                text: "Robert Parish",
                correct: true
            },
            {
                text: "Kareem Abdul-Jabbar",
                correct: false
            },
            {
                text: "Kevin Garnett",
                correct: false
            },
            {
                text: "Kobe Bryant",
                correct: false
            },
        ]
    },


]