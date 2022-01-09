const correct = document.querySelector("#correct");
const incorrect = document.querySelector("#incorrect");
const points = document.querySelector(".points");
const timeRange = document.querySelector("#time");
const teamsRange = document.querySelector("#teams");
const roundsRange = document.querySelector("#rounds");
const text2 = document.querySelector("#textInput2");
const text3 = document.querySelector("#textInput3");
const text4 = document.querySelector("#textInput4");
const card = document.querySelectorAll(".card li");
const start = document.querySelector(".start");
const teams = document.querySelectorAll(".team li");
const timeDisplay = document.querySelector("#timeDisplay");
const roundsDisplay = document.querySelector("#roundsDisplay");
const teamDisplay = document.querySelectorAll("#teamDisplay li");
const buzzer = document.querySelector(".buzzer");

const words = [
  ["Architect", "Create", "Build", "House", "Blueprint", "Design"],
  ["Mouse", "Cat", "Trap", "Cheese", "Tom & Jerry", "Animal"],
  ["Argument", "Fight", "Anger", "Yell", "Quarrel", "Couple"],
  ["CITATION", "TICKET", "SPEEDING", "POLICE", "LAW", "PULL OVER"],
  ["GOLF BALL", "TEE", "SWING", "CLUB", "IRON", "WOOD"],
  ["SAIL", "VACATION", "FLY", "BOAT", "WATER", "OCEAN"],
  ["BADGE", "COPS", "LAW", "RULES", "TICKET", "POLICE"],
  ["FROG", "GREEN", "ANIMAL", "HOPS", "SLIMY", "LEAP"],
  ["BLUSH", "RED", "MAKE-UP", "FACE", "EMBARRASED", "CHEEKS"],
  ["TENNIS SHOES", "GYM", "SNEAKERS", "RUNNING", "FEET", "WEAR"],
  ["SCARY MOVIE", "FRIGHT", "FUNNY", "COMEDY", "SEQUEL", "MOCK"],
  ["VERIZON", "CELL", "PHONE", "WIRELESS", "NETWORK", "ROAM"],
  ["WHATS UP", "GREETING", "HELLO", "HI", "DOING", "YOU"],
  ["AUTHORITY", "POLICE", "COPS", "GOVERNMENT", "CHARGE", "FIGHT"],
  ["SODA", "COKE", "POP", "DRINK", "CAN", "VENDING"],
  ["CARBOHYDRATES", "NUTRITION", "SUGAR", "BREAD", "BEER", "ATKINS"],
  ["thrifty", "cheap", "spend", "money", "stingy"],
  ["double", "twice", "number", "triple", "amount"],
  ["tragedy", "terrible", "sad", "victim", "disaster"],
  ["lawn", "grass", "mow", "green", "yard"],
  ["arrest", "jail", "criminal", "police", "handcuffs"],
  ["educate", "child", "teach", "learn", "school"],
  ["myth", "Greek", "legend", "history", "culture"],
  ["measurement", "unit", "height", "distance", "length"],
  ["prescription", "doctor", "paper", "medicine", "pharmacy"],
  ["grave", "bury", "cemetery", "dig", "funeral"],
  ["makeup", "women", "lipstick", "pretty", "put on"],
  ["hunt", "deer", "gun", "woods", "food"],
  ["surgeon", "doctor", "surgery", "operation", "hospital"],
  ["suburb", "city", "outside", "quiet", "live"],
  ["minimum", "maximum", "lowest", "wage", "amount"],
  ["sacred", "holy", "religious", "blessed", "cow"],
  ["warrior", "soldier", "war", "attack", "battle"],
  ["retired", "work", "relax", "old", "pension"],
  ["survey", "ask", "questions", "opinion", "fill out"],
  ["corruption", "politician", "bribe", "government", "scandal"],
  ["hook", "fishing", "metal", "sharp", "bait"],
  ["ankle", "sprain", "leg", "foot", "break"],
  ["steep", "climb", "mountain", "hill", "angle"],
  ["spread", "disease", "virus", "infection", "prevent"],
  ["cooperate", "together", "everyone", "unite", "work"],
  ["sacrifice", "human", "kill", "ritual", "blood"],
  ["bubble", "gum", "soap", "blow", "pop"],
  ["jaw", "mouth", "teeth", "bones", "chew"],
  ["sail", "ship", "boat", "ocean", "wind"],
  ["tropical", "hot", "storm", "island", "exotic"],
  ["mushroom", "white", "eat", "fungus", "sauce"],
  ["workout", "gym", "weight", "train", "exercise"],
  ["chew", "gum", "food", "eat", "teeth"],
  ["fragile", "delicate", "break", "glass", "careful"],
  ["mansion", "house", "home", "live", "expensive"],
  ["crowd", "people", "many", "herd", "street"],
  ["spit", "mouth", "saliva", "liquid", "tobacco"],
  ["hike", "walk", "woods", "mountain", "backpack"],
  ["dinosaur", "giant", "extinct", "lizard", "Barney"],
  ["polite", "nice", "smile", "manners", "friendly"],
  ["fried", "chicken", "cook", "food", "oil"],
  ["jail", "prison", "criminals", "bars", "arrest"],
  ["cigar", "Cuban", "smoke", "tobacco", "cigarette"],
  ["sip", "drink", "taste", "mouth", "try"],
  ["torture", "prisoner", "information", "pain", "guard"],
  ["nun", "Catholic", "woman", "priest", "sister"],
  ["owl", "night", "bird", "hoot", "tree"],
  ["lottery", "win", "money", "ticket", "gambling"],
  ["click", "mouse", "select", "tap", "noise"],
  ["hammer", "nail", "swing", "build", "tool"],
  ["coconut", "fruit", "oil", "white", "milk"],
  ["syrup", "pancakes", "sweet", "maple", "butter"],
  ["tornado", "storm", "wind", "damage", "hurricane"],
  ["float", "boat", "water", "surface", "top"],
  ["pearl", "oyster", "white", "jewelry", "diver"],
  ["allergy", "sneeze", "itch", "spring", "season"],
  ["pirate", "ship", "Caribbean", "Johnny Depp", "Captain Hook"],
  ["shovel", "dig", "hole", "shed", "snow"],
  ["cash", "money", "check", "payment", "dollar"],
  ["diaper", "Pampers", "Huggies", "change", "baby"],
  ["adult", "child", "grown up", "responsibilities", "mature"],
  ["wink", "eye", "close", "look", "blink"],
  ["imported", "exported", "foreign", "expensive", "product"],
  ["hen", "rooster", "chicken", "farm", "eggs"],
  ["mustache", "hair", "beard", "lip", "shave"],
  ["microwave", "heat", "food", "fast", "cook"],
  ["grill", "barbecue", "cook", "fire", "meat"],
  ["drummer", "Ringo", "beat", "sticks", "band"],
  ["toast", "bread", "butter", "breakfast", "jelly"],
  ["chart", "graph", "numbers", "visual", "data"],
  ["pajamas", "bed", "night", "sleepover", "clothes"],
  ["barber", "haircut", "shave", "scissors", "hairdresser"],
  ["barefoot", "shoes", "socks", "summer", "beach"],
  ["donkey", "gray", "cart", "stubborn", "ride"],
  ["blizzard", "snow", "cold", "weather", "storm"],
  ["save", "money", "time", "later", "bank"],
  ["pay", "money", "price", "buy", "sell"],
  ["head", "top", "face", "round", "hair"],
  ["word", "write", "sentence", "letter", "speak"],
  ["storm", "lighting", "thunder", "hurricane", "weather"],
  ["museum", "art", "history", "quiet", "national"],
  ["company", "business", "corporation", "work", "employer"],
  ["speak", "talk", "language", "English", "mouth"],
  ["war", "violence", "army", "world", "weapons"],
  ["team", "sport", "play", "national", "together"],
  ["married", "single", "husband", "wife", "wedding"],
  ["star", "sun", "bright", "yellow", "night"],
  ["army", "soldiers", "war", "fight", "guns"],
  ["invite", "guest", "attend", "party", "wedding"],
  ["busy", "work", "time", "school", "rush"],
  ["sky", "blue", "clouds", "birds", "sun"],
  ["teacher", "student", "class", "explain", "school"],
  ["poor", "rich", "money", "buy", "pay"],
  ["blood", "red", "cut", "vein", "heart"],
  ["discover", "scientist", "research", "find", "new"],
  ["outside", "inside", "roof", "park", "yard"],
  ["lawyer", "court", "sue", "trial", "judge"],
  ["nurse", "care", "patient", "sick", "hospital"],
  ["camera", "picture", "take", "digital", "video"],
  ["heavy", "light", "metal", "weight", "lift"],
  ["skin", "cover", "color", "outside", "protect"],
  ["coach", "team", "player", "leader", "sport"],
  ["travel", "vacation", "visit", "plane", "country"],
  ["weekend", "work", "free", "Saturday", "Sunday"],
  ["mountain", "climb", "Everest", "tall", "snow"],
  ["celebrate", "party", "birthday", "anniversary", "friends"],
  ["desert", "dry", "hot", "Sahara", "sand"],
  ["home", "live", "house", "sleep", "family"],
  ["wine", "grapes", "white", "red", "alcohol"],
  ["fire", "hot", "red", "fighter", "camping"],
  ["photo", "picture", "camera", "color", "frame"],
  ["flower", "rose", "funeral", "wedding", "garden"],
  ["border", "between", "country", "limit", "line"],
  ["fun", "enjoy", "activity", "game", "time"],
  ["cigarette", "smoke", "Marlboro", "cancer", "habit"],
  ["private", "personal", "secret", "information", "public"],
  ["wake up", "morning", "bed", "early", "get up"],
  ["weak", "strong", "muscle", "small", "strength"],
  ["dark", "light", "night", "see", "sleep"],
  ["knife", "fork", "spoon", "cut", "sharp"],
  ["kiss", "lips", "love", "cheek", "romantic"],
  ["smoke", "gray", "burn", "cook", "fire"],
  ["bear", "woods", "brown", "black", "animal"],
  ["professor", "teacher", "university", "students", "class"],
  ["dirty", "clean", "clothes", "shower", "soap"],
  ["raw", "sushi", "cook", "eat", "meat"],
  ["stairs", "up", "down", "climb", "house"],
  ["blanket", "warm", "bed", "sheet", "cover"],
  ["dessert", "cake", "pie", "sweet", "cookie"],
  ["T-shirt", "wear", "casual", "jeans", "white"],
  ["smart", "intelligent", "nerd", "brain", "knowledge"],
  ["king", "queen", "prince", "leader", "country"],
  ["refrigerator", "food", "kitchen", "cold", "freezer"],
  ["dance", "move", "music", "song", "ballet"],
  ["send", "email", "letter", "receive", "package"],
  ["late", "early", "meeting", "time", "arrive"],
  ["religion", "God", "belief", "culture", "faith"],
  ["couch", "sit", "living room", "TV", "relax"],
  ["finish", "stop", "start", "done", "task"],
  ["apple", "red", "fruit", "pie", "eat"],
  ["study", "test", "quiz", "remember", "school"],
  ["bus", "ride", "transportation", "stop", "public"],
  ["weather", "rain", "snow", "sun", "forecast"],
  ["sick", "well", "cold", "flu", "doctor"],
  ["vacation", "trip", "work", "travel", "beach"],
  ["gym", "weights", "work out", "sweat", "exercise"],
  ["window", "glass", "door", "outside", "open"],
  ["guitar", "instrument", "music", "play", "band"],
  ["cheese", "milk", "white", "pizza", "sandwich"],
  ["swim", "beach", "water", "bathing suit", "exercise"],
  ["Mystery Novel", "Book", "Detective", "Suspense", "Victim", "Surprise"],
  ["Ribs", "Bone", "Body", "BBQ", "Meat", "Grill"],
  ["Yearbook", "Photos", "Class", "Memories", "School", "Sign"],
  ["Whistle", "Noise", "Blow", "Referee", "Lips", "Sound"],
  ["Soccer", "Football", "Sport", "Goalie", "Kick", "Legs"],
  ["Hornet", "Bumble Bee", "Wasp", "Sting", "Yellowjacket", "Insect"],
  [
    "Tom Hanks",
    "Forrest Gump",
    "Saving Private Ryan",
    "Toy Story",
    "Actor",
    "Wilson!",
  ],
  ["Legos", "Toys", "Build", "Blocks", "Kids", "Minifigures"],
  ["Stork", "Crane", "Bird", "Babies", "Legs", "Beak"],
  ["King David", "Goliath", "Bathsheba", "Bible", "Israel", "Jesse"],
  ["Pepsi", "Soda", "Coca-Cola", "Soft Drink", "Mountain Dew", "Pop"],
  [
    "Alice in Wonderland",
    "Disney",
    "Mad Hatter",
    "Cheshire Cat",
    "Movie",
    "Johnny Depp",
  ],
  ["Lawn Mower", "Grass", "Drive", "Push", "Blades", "Cut"],
  ["High Heels", "Footwear", "Feet", "Ladies", "Arch", "Walk"],
  ["Bicycle", "Peddle", "Helmet", "Pads", "Wheels", "Trail"],
  ["Maple Syrup", "Pancakes", "Sticky", "Jar", "Waffles", "French Toast"],
  ["Convertible", "Car", "Vehicle", "Top Down", "Fancy", "Roof"],
  ["Villain", "Hero", "Evil", "Movie", "Book", "Bad Guy"],
  [
    "The Three Stooges",
    "Curly",
    "Moe",
    "Comedians",
    "Black & White Movies",
    "Funny",
  ],
  ["Kiwis", "Fruit", "Eat", "Bird", "Green", "Fuzzy"],
  [
    "Aaron Rodgers",
    "Green Bay Packers",
    "Football",
    "Quarterback",
    "Wisconsin",
    "Cheeseheads",
  ],
  ["Break A Leg", "Acting", "Saying", "Phrase", "Body", "Luck"],
  ["Texas", "State", "Accent", "Lone Star", "Dallas", "Houston"],
  ["Frame", "Picture", "Figure", "Body", "Border", "Photograph"],
  [
    "Vacation Bible School",
    "VBS",
    "Summer Camp",
    "Kids",
    "Volunteers",
    "Ministry",
  ],
  [
    "FDR",
    "President",
    "Polio",
    "World War Two",
    "The Great Depression",
    "Three Terms",
  ],
  ["Taiwan", "China", "Island", "Coast", "Asia", "Pacific Ocean"],
  ["Bing Crosby", "Singer", "Christmas", "Actor", "Music", "Famous"],
  [
    "St. Louis Cardinals",
    "Baseball",
    "Team",
    "Chicago Cubs",
    "Rivalry",
    "Birds",
  ],
  ["Orlando", "Florida", "City", "Magic", "Beach", "Miami"],
  ["Flapjacks", "Pancakes", "Maple Syrup", "Breakfast Food", "Eat", "Batter"],
  ["Proverbs", "Bible", "Psalms", "Wisdom", "Book", "Scriptures"],
  ["Mullett", "Haircut", "Bad/Ugly", "Sideburns", "Guys", "Style"],
  [
    "To Kill A Mockingbird",
    "Harper Lee",
    "Atticus Finch",
    "Boo Radley",
    "Read",
    "Book/Novel",
  ],
  [
    "Mary Shelly",
    "Frankenstien Monster",
    "Author",
    "Novel",
    "Literature",
    "Scary",
  ],
  [
    "Hurricane",
    "Tornado",
    "Funnel Cloud",
    "Ocean",
    "Water",
    "High Speed Winds",
  ],
  ["Weed Wacker", "Grass", "Lawn Mower", "Cut", "Edges", "Blade"],
  ["Magenta", "Purple", "Color", "Shade", "Name", "Light"],
  ["Four Leaf Clover", "Good Luck", "Irish", "Field", "Leprechaun", "Ireland"],
  ["Testimony", "Speak", "Truth", "Life Story", "Trial", "Church"],
  ["Frog Legs", "Toads", "Eat", "Amphibian", "Ribbit", "Tadpole"],
  ["Barbados", "Caribbean", "Island", "Ocean", "Rum", "Bajan"],
  [
    "Scooby Doo",
    "Great Dane",
    "Shaggy Rodgers",
    "Mystery Machine",
    "Cartoon",
    "Dog",
  ],
  ["Ottoman", "Empire", "Furniture", "Feet", "Couch", "World War 1"],
  [
    "Aretha Franklin",
    "Singer",
    "Queen of Soul",
    "Gospel",
    "Respect",
    "I Say A Little Prayer",
  ],
  [
    "Jude (Bible Book)",
    "Revelation",
    "End",
    "Short",
    "Bible/Scripture",
    "Disciple",
  ],
  ["Hickory", "Tree", "Smoke", "Cooking", "Fire", "Wood"],
  ["AM Radio", "FM", "Listen", "Technology", "Talk Show", "Dial"],
  ["Coffee", "Beans", "Morning", "Wake Up", "Mug", "Filter"],
  ["Flip Flops", "Sandals", "Feet", "Shoes", "Beach/Summer", "Toes"],
  ["Mangos", "Tropical Fruit", "Sweet", "Food", "Orange", "Eat"],
  ["Air Conditioner", "Summertime", "Cool", "Heater", "Fan", "House"],
  ["Oboe", "Wind Instrument", "Clarinet", "Music", "Reed", "Play"],
  ["Taxidermy", "Stuffed", "Profession", "Animals", "Nature", "Study"],
  ["Y.M.C.A.", "Village People", "Song", "Workout", "Recreation", "Building"],
  [
    "Spurs",
    "Cowboy Boots",
    "Basketball Team",
    "San Antonio Texas",
    "Jingle",
    "Horse Riding",
  ],
  ["Gyser", "Hot Water", "Spring", "Cave", "Steam", "Erupt"],
  [
    "The Tin Man",
    "The Wizard of Oz",
    "Dorthy",
    "The Cowardly Lion",
    "The Wicked Witch",
    "Yellowbrick Road",
  ],
  ["Skydiving", "Jump", "Airplane", "Falling", "Parachute", "High Up"],
  ["Headphones", "Sound", "Earbuds", "Computer", "Plug-In", "Ears"],
  ["Great Wall of China", "Asia", "Long", "Landmark", "Ancient", "Defense"],
  [
    "Johnny Cash",
    "Country Singer",
    "Ring of Fire",
    "June Carter",
    "Famous",
    "Folsom Prison Blues",
  ],
  ["Bobcat", "Feline", "Panther", "Animal", "Charlotte", "Lynx"],
  ["Criquet", "Insect/Bug", "Chirp", "Sport", "Clubs", "Noise"],
  ["Haiku", "Poem/Poetry", "Seven", "Japanese", "Flow", "Short"],
  ["Textbook", "School Subject", "Reading", "Students", "Backpack", "Heavy"],
  [
    "Peter Pan",
    "Captain Hook",
    "Disney Movie",
    "Tinker Bell",
    "Neverland",
    "Book",
  ],
  ["Rosemary", "Herb", "Garden", "Spice", "Mint", "Sage"],
  [
    "March Madness",
    "Basketball",
    "Catchphrase",
    "NCAA National Tournament",
    "Month",
    "Bracket",
  ],
  ["Speed Limit", "Car", "Sign", "Ticket", "Pulled-Over", "Highway"],
  ["Thimble", "Knitting", "Needle", "Yarn", "Thread", "Thumb/Fingers"],
  [
    "Titan",
    "Moon of Saturn",
    "Clash of The . . .",
    "Goliath",
    "Tennessee",
    "Football Team",
  ],
  ["Lutefisk", "Whitefish", "Potluck", "Swedish", "Lye", "Food"],
  ["Channel", "Funnel", "TV", "Remote Controller", "Station", "Perfume"],
  ["Abram (Bible)", "Abraham", "Patriarch", "Sarah", "Isaac", "Covenant"],
  ["Pulpit", "Pastor", "Sermon", "Reading", "Sanctuary", "Service"],
  ["King Cobra", "Snake", "Hood", "Charmer/Piper", "Poisonous", "Slither"],
  ["Ukelele", "String Instrument", "Hawaii", "Play", "Guitar", "Small"],
  ["Paul Bunyan", "Woodsman", "Legend", "Story", "Axe", "Timber"],
  ["Rock of Ages", "Hymn", "Musical", "Sing", "Red Books", "Composed"],
  ["Mercury", "Planet", "Element", "Sun", "Venus", "Space/Solar-System"],
  ["The Flintstones", "Pre-Historic", "Cartoon", "Fred", "Barney", "Bam-Bam"],
  ["Typewriter", "Computer", "Keyboard", "Old", "Message", "Pound"],
  ["Water Balloons", "Fill", "Hose", "Burst", "Pulled-Splash", "Helium"],
  ["Bull Thistle", "Spike", "Weed", "Sharp", "Thorn", "Prickly"],
  [
    "Jackie Kennedy",
    "John. F.",
    "President",
    "First Lady",
    "Wife",
    "White House",
  ],
  [
    "Better Late Than Never",
    "Catchphrase",
    "Proverb",
    "Delayed",
    "Saying",
    "Decision",
  ],
  [
    "Calvin & Hobbes",
    "Comic Strip",
    "Bill Watterson",
    "Tiger",
    "Boy",
    "Sunday Papers",
  ],
  ["Patio", "House", "Deck", "Backyard", "Porch", "Outside"],
  ["Cinnamon", "Spice", "Sugar", "Toast Crunch", "Bagel", "Brown"],
  [
    "Orson Wells",
    "Citizen Kane",
    "War of the Worlds",
    "Rosebud",
    "Sled",
    "Actor",
  ],
  ["Cassette Player", "Tape", "Movie", "TV", "CDs", "VHS"],
  ["Patio", "House", "Deck", "Backyard", "Porch", "Outside"],
  ["Jazz", "Utah", "Type of Music", "Basketball Team", "Trumpets", "Smooth"],
  ["Water Bed", "Sleep", "60s & 70s", "Squishy", "Rare", "Covers"],
  ["Hula Hoop", "Ring", "Hips", "Shake", "Circle", "Kids"],
  [
    "The Great Gatsby",
    "Book/Novel",
    "F. Scott Fitzgerald",
    "Leonardo DiCaprio",
    "1920s",
    "New York City",
  ],
  ["Millimeter", "Measurement", "Unit", "Centimeter", "Inch", "Ruler"],
  [
    "Methodism",
    "Denomination",
    "Reformation",
    "Church",
    "Christianity",
    "Nearby",
  ],
  [
    "Clint Eastwood",
    "The Good, Bad & Ugly",
    "Dirty Harry",
    "Westerns",
    "Old",
    "Actor",
  ],
  [
    "Black Hills (SD)",
    "South Dakota",
    "Wyoming",
    "National Forest",
    "Hiking",
    "North",
  ],
  ["Hydrogen", "Element", "Oxygen", "H20", "Periodic Table", "Peroxide"],
  ["Arithmetic", "Math", "Subject", "School", "Students", "Numbers"],
  ["Stained Glass", "Church", "Windows", "Bible", "Colors", "Chapel"],
  ["Butlers", "Mansions", "Servants", "Alfred", "Wealthy", "Manners"],
  ["Trifle", "Dont", "Without Respect", "Dessert", "With Me", "Frivolous"],
  [
    "The Lion King",
    "Disney",
    "Simba",
    "James Earl Jones",
    "Akuna-Matata",
    "Animated Movie",
  ],
  [
    "Alfred Hitchcock",
    "Director",
    "Suspense",
    "Psycho",
    "Dial M for Murder",
    "Films",
  ],
  ["Mustard", "Condiment", "Ketchup", "Mayonnaise", "Yellow", "Seeds"],
  ["Buffalo", "Bills", "Bison", "Wings", "Sauce", "New York"],
  [
    "Radiation",
    "Nuclear",
    "Treatment",
    "Therapy",
    "Hot Zones",
    "Geiger counter",
  ],
  [
    "First Date",
    "Movies",
    "Girlfriend/Boyfriend",
    "Relationship",
    "Car",
    "Significant Other",
  ],
  ["Feta Cheese", "Greek", "Crumble", "White", "Texture", "Olives"],
  ["Nose Dive", "Plane", "Pilot", "Manuever", "Aircraft", "Sky"],
  ["Poker", "Fire", "Chips", "Stick", "Cards", "Game"],
  [
    "Plot Twist",
    "Movie/Book",
    "Didnt See Coming",
    "Suspense",
    "Surprise",
    "Unexpected",
  ],
  ["Wafers", "Communion", "Intinction", "Vanilla", "Wine", "Dip"],
  ["Bluegill", "Sunfish", "Local", "Native", "Ponds", "Poles"],
  [
    "What a Wonderful World",
    "Stevie Wonder",
    "Song",
    "I Think to Myself",
    "Voice",
    "The Colors of the Rainbow",
  ],
  ["Miscellaneous", "Categorized", "No Place", "Random", "Book", "Topics"],
  ["Phoenix", "Arizona", "Fire Bird", "Rise", "City", "Suns"],
  [
    "Regis Philbin",
    "Who Wants to be A Millionaire?",
    "Host",
    "Talk Show",
    "Live! With Regis & Kathie/Kelly",
    "Accent",
  ],
  ["Kilt", "Scottish", "Skirt", "Bagpipes", "Men/Guys", "Plaid"],
  ["Indian Ocean", "Sea", "Asia", "Pacific", "Atlantic", "Arctic"],
  ["Thunder", "Lightning", "Storm", "Sound", "Loud", "Rain"],
  [
    "Mt. Sinai",
    "Ten Commandments",
    "Moses",
    "Exodus",
    "Peninsula",
    "Israel/Egypt",
  ],
  [
    "Earth, Wind & Fire",
    "Elements",
    "Trio",
    "Singers",
    "Boogie Wonderland",
    "September",
  ],
  [
    "The G.I. Bill",
    "World War Two",
    "Veterans",
    "Baby Boomers",
    "1950s",
    "College",
  ],
  ["Giant Squid", "Octopus", "Ocean Depths", "Calamari", "Ink", "Tentacles"],
  ["Swing Dancing", "Style", "Feet", "Rhythm", "Partner", "Lifts"],
  ["Tissue", "Kleenex", "Paper", "Boogers/Boogie", "Scar", "Nose"],
  ["August", "Month", "July", "September", "Summer", "Emperor"],
  ["Shutes & Ladders", "Board Game", "Snakes", "Kids", "Up & Down", "Climb"],
  ["Speedometer", "Car", "Dash Board", "Limit", "Dial", "Look"],
  ["Basil", "Herb", "Spice", "Time", "Parsley", "Green"],
  ["Fossils", "Bones", "Dinosaurs", "Paleontologists", "Fuel", "Pre-Historic"],
  ["Lukewarm", "Hot", "Cold", "Coffee", "Drink", "Cool"],
  [
    "Tim Allen",
    "Buzz Lightyear",
    "Home Improvement",
    "Santa Clause",
    "Tool Time",
    "Last Man Standing",
  ],
  ["Philadelphia", "Pennsylvania", "State", "Pittsburgh", "Eagles", "Phillies"],
  ["Ferrari", "Sports Car", "Expensive", "Horsepower", "Red", "Luxury"],
  ["Charger Cord", "Phone", "Outlet", "Computer", "Electronic", "Adapter"],
];
const makeCards = (str) => {
  let arr = str.split("\n");
  let cards = [];
  for (let idx = 0; idx < arr.length - 5; idx += 6) {
    cards.push(arr.slice(idx, idx + 6));
  }
  return cards;
};

//show values for range inputs in settings
const changeTime = (time) => {
  timeRange.value = time;
};
const changeTeams = (teams) => {
  teamsRange.value = teams;
};
const changeRounds = (rounds) => {
  roundsRange.value = rounds;
};

//disable text inputs as user slides teams range input
const disableTextInput = (numTeams) => {
  if (numTeams === "1") {
    text2.classList.add("disabledTextInput");
    text2.disabled = true;

    text3.classList.add("disabledTextInput");
    text3.disabled = true;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (numTeams === "2") {
    text2.classList.remove("disabledTextInput");
    text2.disabled = false;

    text3.classList.add("disabledTextInput");
    text3.disabled = true;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (numTeams === "3") {
    text3.classList.remove("disabledTextInput");
    text3.disabled = false;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (numTeams === "4") {
    text4.classList.remove("disabledTextInput");
    text4.disabled = false;
  }
};

const nextCard = () => {
  let wordIdx = Math.floor(Math.random() * words.length);
  card.forEach((word, idx) => {
    console.log(word, idx);
    word.innerText = words[wordIdx][idx] || " ";
  });
};
const blankCard = () => {
  card.forEach((word) => {
    word.innerText = "";
  });
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    buzzer.addEventListener("click", () => {
      console.log("..");
      let audio = new Audio("./stylesheets/foghi.mp3");
      audio.play();
    });
  },
  false
);

//show next card, and change score accordingly
correct.addEventListener("click", () => {
  nextCard();
  points.innerText++;
});
incorrect.addEventListener("click", () => {
  nextCard();
  points.innerText--;
});

const startTime = timeDisplay.innerText;
let teamIdx = 0;
let round = 1;
teams[teamIdx].classList.add("currentTeam");

const nextTeam = () => {
  teams[teamIdx].classList.remove("currentTeam");
  if (teamIdx >= teams.length - 1) {
    teamIdx = 0;
    nextRound();
  } else {
    teamIdx++;
  }
  teams[teamIdx].classList.add("currentTeam");
};
nextRound = () => {
  let maxRound = +roundsDisplay.innerText.split("/")[1];
  let currentRound = +roundsDisplay.innerText.split("/")[0];
  if (currentRound < maxRound) {
    currentRound++;
    roundsDisplay.innerText = `${currentRound}/${maxRound}`;
  } else {
    computeResults();
    start.innerText = "RESET";
    start.addEventListener("click", () => {
      window.location.href = "/play";
    });
  }
};

const startTimer = () => {
  +timeDisplay.innerText--;
  let timer = setInterval(() => {
    +timeDisplay.innerText--;
    if (+timeDisplay.innerText === 0) {
      stopTimer();
      reset();
    }
  }, 1000);
  const stopTimer = () => {
    clearInterval(timer);
  };
};

start.addEventListener("click", () => {
  points.innerText = 0;
  timeDisplay.innerText = startTime;
  correct.disabled = false;
  incorrect.disabled = false;
  start.classList.add("hidden");
  nextCard();
  startTimer();
});

const reset = () => {
  displayScore();
  correct.disabled = true;
  incorrect.disabled = true;
  start.classList.remove("hidden");
  blankCard();
  nextTeam();
};
let finalScore = {};

displayScore = () => {
  let teamName = teamDisplay[teamIdx].innerText.split(" | ")[0];
  let teamPoints = +teamDisplay[teamIdx].innerText.split(" | ")[1];
  teamPoints += +points.innerText;
  teamDisplay[teamIdx].innerText = `${teamName} | ${teamPoints}`;
  addScore(teamName, +points.innerText);
};
addScore = (team, score) => {
  if (!(team in finalScore)) {
    finalScore[team] = [];
  }
  finalScore[team].push(score);
};
let computeResults = () => {
  let winner;
  let winningScore = 0;
  let arr = [];
  for (team in finalScore) {
    let scoreTotal = finalScore[team].reduce((a, b) => a + b, 0);

    arr.push([team, finalScore[team], scoreTotal]);
  }
  arr.sort((a, b) => b[2] - a[2]);
  displayResults(arr);
};

const displayResults = (results) => {
  if (results[1] === undefined) {
    card[0].innerText = `${results[0][2]} points`;
  } else if (results[0][2] === results[1][2]) {
    card[0].innerText = `Tie!`;
    results.forEach((team, idx) => {
      card[idx + 2].innerText = `${team[0]} | ${team[2]}`;
    });
  } else {
    card[0].innerText = `${results[0][0]} wins!`;
    results.forEach((team, idx) => {
      card[idx + 2].innerText = `${team[0]} | ${team[2]}`;
    });
  }
  card.forEach((line, idx) => {
    if (idx !== 0) {
      line.classList.add("right");
    }
  });
};

window.onbeforeunload = function () {
  return "Leave?";
};
