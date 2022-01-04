const RandomTextGenerator = require("random-text-generator");

let randomTextGenerator = new RandomTextGenerator();

const usernames = [
    "StinkyPoop", "Alextron234",
    "BattleDash", "berkey10",
    "Ezblox23", "robiko858",
    "zakizakowski", "MrArtur1337",
    "AzisDeus", "AustrianPainter1889",
    "pomidorek2pl", "JoeMamma",
    "MafiaBoss75", "SciManDan",
    "siuras_ogoras986", "jacob.flix",
    "malario", "BenDrowned",
    "pickupthefox", "okboomer",
    "GHPL", "Firstbober"
];

for (const item of usernames) { randomTextGenerator.learn(item) }
const newUsernamesLearn = []
for (let i = 0; i < usernames.length; ++i) { newUsernamesLearn.push(randomTextGenerator.generate()) }

for (const item of usernames) { randomTextGenerator.learnRight(item) }
const newUsernamesLearnRight = []
for (let i = 0; i < usernames.length; ++i) { newUsernamesLearnRight.push(randomTextGenerator.generate()) }

for (const item of usernames) { randomTextGenerator.learnLeft(item) }
const newUsernamesLearnLeft = []
for (let i = 0; i < usernames.length; ++i) { newUsernamesLearnLeft.push(randomTextGenerator.generate()) }

console.log(newUsernamesLearn, newUsernamesLearnRight, newUsernamesLearnLeft);

