import "dotenv/config";
import "../../config/database.js";
import Sport from "../Sport.js";

const sports = [
  {
    name: "Soccer",
    description: "A team sport played by two teams of eleven players with a spherical ball.",
    image: "https://example.com/images/soccer.png",
    players: 11
  },
  {
    name: "Basketball",
    description: "A team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court.",
    image: "https://example.com/images/basketball.png",
    players: 5
  },
  {
    name: "Baseball",
    description: "A bat-and-ball game played between two opposing teams who take turns batting and fielding.",
    image: "https://example.com/images/baseball.png",
    players: 9
  },
  {
    name: "Tennis",
    description: "A racket sport that can be played individually against a single opponent or between two teams of two players each.",
    image: "https://example.com/images/tennis.png",
    players: 1
  },
  {
    name: "Volleyball",
    description: "A team sport in which two teams of six players are separated by a net.",
    image: "https://example.com/images/volleyball.png",
    players: 6
  },
  {
    name: "Cricket",
    description: "A bat-and-ball game played between two teams of eleven players on a field at the center of which is a 22-yard pitch.",
    image: "https://example.com/images/cricket.png",
    players: 11
  },
  {
    name: "Rugby",
    description: "A team sport that originated in England in the first half of the 19th century.",
    image: "https://example.com/images/rugby.png",
    players: 15
  },
  {
    name: "Hockey",
    description: "A sport in which two teams play against each other by trying to maneuver a ball or a puck into the opponent's goal using a hockey stick.",
    image: "https://example.com/images/hockey.png",
    players: 6
  },
  {
    name: "Golf",
    description: "A club-and-ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.",
    image: "https://example.com/images/golf.png",
    players: 1
  },
  {
    name: "Swimming",
    description: "An individual or team racing sport that requires the use of one's entire body to move through water.",
    image: "https://example.com/images/swimming.png",
    players: 1
  },
  {
    name: "Boxing",
    description: "A combat sport in which two people, usually wearing protective gloves and other protective equipment such as hand wraps and mouthguards, throw punches at each other for a predetermined amount of time in a boxing ring.",
    image: "https://example.com/images/boxing.png",
    players: 1
  },
  {
    name: "Cycling",
    description: "A sport that involves riding bicycles for competition or recreation.",
    image: "https://example.com/images/cycling.png",
    players: 1
  },
  {
    name: "Table Tennis",
    description: "A sport in which two or four players hit a lightweight ball back and forth across a table using small rackets.",
    image: "https://example.com/images/table_tennis.png",
    players: 1
  },
  {
    name: "Badminton",
    description: "A racquet sport played using racquets to hit a shuttlecock across a net.",
    image: "https://example.com/images/badminton.png",
    players: 1
  },
  {
    name: "Wrestling",
    description: "A combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins, and other grappling holds.",
    image: "https://example.com/images/wrestling.png",
    players: 1
  }
];

Sport.insertMany(sports);