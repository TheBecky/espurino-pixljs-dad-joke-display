// Download/transmit this to your pixl.js


// Originally all the display messages were stored on a 365 long array
// but when testing, the espurino board chugged with an out-of-memory error.
// To solve this, using the .write method, the content is saved into the
// board's flash memory

// note: g is the global instance of Graphics


var f = require("Storage");
// clear up all what might be stored in the Flash memory
f.eraseAll();

// Storage.write(name, data, offset, size)
f.write("0",["How do you stay warm in any room? ??", "Huddle in the corner, it's always 90 degrees"]);
f.write("1",["How many tickles does it take to make an octopus laugh? ??", "Ten tickles"]);
f.write("2",["Today is Jane's Birthday! ??", ""]);
f.write("3",["How do trees get into their computers? ??", "The login"]);
f.write("4",["Why do fish have such a hard time keeping track of their weight? ??", "It's confusing to keep track of that many scales"]);
f.write("5",["Do you all know why the old man fell into the well? ??", "He didn't see that well"]);
f.write("6",["Why don't matches play baseball? ??", "One strike and they're out"]);
f.write("7",["How do prisoners call each other? ??", "With their cell phones"]);
f.write("8",["Paul's birthday is coming up. Send card ??", ""]);
f.write("9",["What would mugshots be called if the prisoners took the pictures? ??", "Cellfies"]);
f.write("10",["What do you call a man with a rubber toe? ??", "Roberto"]);
f.write("11",["What type of witch can you take to the beach? ??", "Sandwich"]);
f.write("12",["What does a clock do when it's hungry? ??", "I goes back four seconds"]);
f.write("13",["When is it ok to stop on green and go on red? ??", "When you're eating watermelon"]);
f.write("14",["Why do hamburgers fly south for the winter? ??", "So their buns don't freeze"]);
f.write("15",["Why was the cat afraid of the tree? ??", "Because of its bark"]);
f.write("16",["What has four letters, sometimes has nine, never has five. ??", ""]);
f.write("17",["Did you hear about the atheist who couldn't use exponents? ??", "He didn't believe in higher powers"]);
f.write("18",["Today is Paul's Birthday! ??", ""]);
f.write("19",["Happy birthday Auntie Ann! We love, love, love you! ??", ""]);
f.write("20",["When is a door not a door? ??", "When it's ajar"]);
f.write("21",["What's Forrest Gump's computer password? ??", "1forest1"]);
f.write("22",["What did the scarecrow win an award for? ??", "He was outstanding in the field"]);
f.write("23",["What do you call a person who doesn't toot in public? ??", "A private tutor"]);
f.write("24",["What kind of tree gives the best high fives? ??", "A palm tree"]);
f.write("25",["What do you call a fake noodle? ??", "An Impasta"]);
f.write("26",["How did the vegan fix a flat? ??", "A spare I guess"]);
f.write("27",["Did you hear about the party with all the lights? ??", "It was lit"]);
f.write("28",["What does a thesaurus eat for breakfast? ??", "A synonym roll"]);
f.write("29",["What do you say to a friend struggling with grammar? ??", "There, they're, their..."]);
f.write("30",["Jen's birthday is coming up. Send card ??", ""]);
f.write("31",["How does Harry Potter get down a hill? ??", "Walking. JK! Rolling."]);
f.write("32",["How do cheetahs change their spots? ??", "They get up and move somewhere else"]);
f.write("33",["I brought a math book with me to get a bank loan. ??", "They said I needed something to co-sign"]);
f.write("34",["Why don't plants like math? ??", "It gives them square roots"]);
f.write("35",["Why are math books so depressed? ??", "They're full of problems"]);
f.write("36",["Why are rustic cabins popular with mathematicians? ??", "They are fans of natural logs."]);
f.write("37",["Why are cats better than dogs? ??", "Dogs can't operate an MRI scanner but catscan"]);
f.write("38",["Today is Jen's Birthday! ??", ""]);
f.write("39",["Alice (5 yo): Why did the crow get out of the way of the car? ??", "It didn't want to get squawked!"]);
f.write("40",["Why are people surprised to see The Incredible Hulk? ??", "They didn't notice the Banner beforehand"]);
f.write("41",["If Bruce Wayne had a kid, what would they call it? ??", "Lil Wayne"]);
f.write("42",["The Edge and Bono walk into a bar... ??", "The bartender says: Oh no, not U2 again"]);
f.write("43",["What did the grape say after the elephant sat on it? ??", "Nothing it just let out a little wine"]);
f.write("44",["What did the cat say to the bat this afternoon? ??", "Nothing they were both sleeping"]);
f.write("45",["One tectonic plate bumped into another and said: ??", "Sorry, my fault."]);
f.write("46",["I ordered a chicken and an egg from Amazon ??", "I'll let you know"]);
f.write("47",["Alice (5 yo): What do you call it when your butt talks? ??", "Butt tocks"]);
f.write("48",["When does a joke become a dad joke? ??", "When it becomes apparent"]);
f.write("49",["I was going to tell you a Sodium and Hydrogen joke, but NaH ??", ""]);
f.write("50",["Ann (6 yo): : Which animal can dodge bullets? ??", "A duck"]);
f.write("51",["Why does a chicken coup only have two doors? ??", "If it had four doors, it'd be a chicken sedan"]);
f.write("52",["Why don't they play poker in the jungle? ??", "Too many cheetahs!"]);
f.write("53",["Where do all the cheetahs live? ??", "Vegas"]);
f.write("54",["What did the ocean say to the beach? ??", "Nothing! It just waved!"]);
f.write("55",["What's green and has wheels? ??", "Grass. I lied about the wheels."]);
f.write("56",["How do you catch a unique rabbit? ??", "u-nique up on em' "]);
f.write("57",["What does a grizzly bear say when he calls customer service? ??", "Just bear with me"]);
f.write("58",["Andres's birthday is coming up. Send card ??", ""]);
f.write("59",["Clerk: Would you like the milk in the bag? ??", "Dad: No, just leave it in the carton!"]);
f.write("60",["What do cows do when they sing? ??", "Make moo-sic"]);
f.write("61",["What do you call a man who has lost his car? ??", "Carlos"]);
f.write("62",["Want to hear a joke about paper? ??", "Nevermind it's tearable"]);
f.write("63",["What do you call a belt with a watch on it? ??", "A waist of time"]);
f.write("64",["What diet did the ghost developer go on? ??", "Boolean"]);
f.write("65",["Why was the developer unhappy at his job? ??", "She wanted arrays"]);
f.write("66",["Why was the function sad after a successful first call? ??", "He didn't get a callback"]);
f.write("67",["Today is Andres' birthday! ??", ""]);
f.write("68",["Whats the object-oriented way to become wealthy? ??", "Inheritance"]);
f.write("69",["What did the spider do on the computer? ??", "Made a website"]);
f.write("70",["Andrew's birthday is coming up. Send card ??", ""]);
f.write("71",["What does a baby computer call his father? ??", "Data"]);
f.write("72",["Why did the computer keep sneezing? ??", "Had a virus"]);
f.write("73",["What is a computer virus? ??", "A terminal illness"]);
f.write("74",["Why was the computer cold? ??", " It left its Windows open!"]);
f.write("75",["Why was there a bug in the computer? ??", "Because it was looking for a byte to eat"]);
f.write("76",["What do you get when you cross a computer and a life guard? ??", "A screensaver"]);
f.write("77",["What do you get when you cross a computer with an elephant? ??", "Lots of memory"]);
f.write("78",["Java truly is an OOP language... ??", "As in: OOPs I used Java!"]);
f.write("79",["How did pirates collaborate before computers ? ??", "Pier to pier networking"]);
f.write("80",["Today is your favorite nephew's birthday! ??", ""]);
f.write("81",["Why did the constant break up with the variable? ??", "Because she changed"]);
f.write("82",["Q: What did the SQL query ask the tables in the bar? ??", "May I JOIN you?"]);
f.write("83",["Why did the octopus beat the shark in a fight? ??", "Because it was well armed"]);
f.write("84",["How much does a hipster weigh? ??", "An Instagram"]);
f.write("85",["What did daddy spider say to baby spider? ??", "You spend too much time on the web"]);
f.write("86",["Atheism is a non-prophet organization ??", ""]);
f.write("87",["Towels can't tell jokes. ??", "They have a dry sense of humor"]);
f.write("88",["Why do teenagers travel in groups of 3 or 5? ??", "Because they can't even"]);
f.write("89",["Why are obtuse angles so depressed? ??", "Because they're never right"]);
f.write("90",["What's the best way to woo a math teacher? ??", "Use acute angle"]);
f.write("91",["My boyfriend is the square root of -100. ??", "He is perfect but imaginary"]);
f.write("92",["How do you stay warm in any room? ??", "Huddle in the corner, it's always 90 degrees"]);
f.write("93",["Did you hear the one about the statistician. ??", "Probably"]);
f.write("94",["How do you make seven an even number? ??", "Remove the 's'"]);
f.write("95",["Why is six afraid of seven? ??", "Because seven eight nine"]);
f.write("96",["Why DID seven eat nine? ??", "Because you're supposed to eat 3 squared meals a day"]);
f.write("97",["Why didn't the Romans find algebra very challenging? ??", "Because they always knew X was 10"]);
f.write("98",["Why does nobody talk to circles? ??", "Because there is no point"]);
f.write("99",["Why should you never argue with decimals? ??", "Decimals always have a point"]);
f.write("100",["Why didn't the lion win the race? ??", "Because he was racing a cheetah"]);
f.write("101",["Why should you never trust a train? ??", "They have loco motives"]);
f.write("102",["Did you hear about the restaurant on the moon? ??", "Great food, no atmosphere"]);
f.write("103",["How can you tell if a ant is a boy or a girl?  ??", "They're all girls, otherwise they'd be uncles"]);
f.write("104",["Without geometry life is pointless ??", ""]);
f.write("105",["Why aren't horses very good storytellers? ??", "They only have one tail"]);
f.write("106",["What did the computer do at lunchtime? ??", "Had a byte"]);
f.write("107",["What kind of art class does a coal miner take?  ??", "Minecrafts"]);
f.write("108",["Why did the Norwegian navy put barcodes on all of their ships? ??", "So they can Scandinavian"]);
f.write("109",["What would mugshots be called if the prisoners took the pictures? ??", "Cellfies"]);
f.write("110",["Paulo's birthday is coming up. Send card ??", ""]);
f.write("111",["How do trees get into their computers? ??", "The login"]);
f.write("112",["Why do fish have such a hard time keeping track of their weight? ??", "It's confusing to keep track of that many scales"]);
f.write("113",["Do you all know why the old man fell into the well? ??", "He didn't see that well"]);
f.write("114",["Why don't matches play baseball? ??", "One strike and they're out"]);
f.write("115",["How do prisoners call each other? ??", "With their cell phones"]);
f.write("116",["What do you call a man with a rubber toe? ??", "Roberto"]);
f.write("117",["What type of witch can you take to the beach? ??", "Sandwich"]);
f.write("118",["What does a clock do when it's hungry? ??", "I goes back four seconds"]);
f.write("119",["When is it ok to stop on green and go on red? ??", "When you're eating watermelon"]);
f.write("120",["Why do hamburgers fly south for the winter? ??", "So their buns don't freeze"]);
f.write("121",["Today is Paulo's Birthday! ??", ""]);
f.write("122",["Why was the cat afraid of the tree? ??", "Because of its bark"]);
f.write("123",["What has four letters, sometimes has nine, never has five. ??", ""]);
f.write("124",["Did you hear about the atheist who couldn't use exponents? ??", "He didn't believe in higher powers"]);
f.write("125",["When is a door not a door? ??", "When it's ajar"]);
f.write("126",["What's Forrest Gump's computer password? ??", "1forest1"]);
f.write("127",["What did the scarecrow win an award for? ??", "He was outstanding in the field"]);
f.write("128",["What do you call a person who doesn't toot in public? ??", "A private tutor"]);
f.write("129",["What kind of tree gives the best high fives? ??", "A palm tree"]);
f.write("130",["What do you call a fake noodle? ??", "An Impasta"]);
f.write("131",["How did the vegan fix a flat? ??", "A spare I guess"]);
f.write("132",["Did you hear about the party with all the lights? ??", "It was lit"]);
f.write("133",["What does a thesaurus eat for breakfast? ??", "A synonym roll"]);
f.write("134",["What do you say to a friend struggling with grammar? ??", "There, they're, their..."]);
f.write("135",["How does Harry Potter get down a hill? ??", "Walking. JK! Rolling."]);
f.write("136",["How do cheetahs change their spots? ??", "They get up and move somewhere else"]);
f.write("137",["I brought a math book with me to get a bank loan. ??", "They said I needed something to co-sign"]);
f.write("138",["Why don't plants like math? ??", "It gives them square roots"]);
f.write("139",["Why are math books so depressed? ??", "They're full of problems"]);
f.write("140",["Why are rustic cabins popular with mathematicians? ??", "They are fans of natural logs."]);
f.write("141",["Why are cats better than dogs? ??", "Dogs can't operate an MRI scanner but catscan"]);
f.write("142",["Alice (5 yo): Why did the crow get out of the way of the car? ??", "It didn't want to get squawked!"]);
f.write("143",["Why are people surprised to see The Incredible Hulk? ??", "They didn't notice the Banner beforehand"]);
f.write("144",["If Bruce Wayne had a kid, what would they call it? ??", "Lil Wayne"]);
f.write("145",["The Edge and Bono walk into a bar... ??", "The bartender says: Oh no, not U2 again"]);
f.write("146",["What did the grape say after the elephant sat on it? ??", "Nothing it just let out a little wine"]);
f.write("147",["What did the cat say to the bat this afternoon? ??", "Nothing they were both sleeping"]);
f.write("148",["One tectonic plate bumped into another and said: ??", "Sorry, my fault."]);
f.write("149",["I ordered a chicken and an egg from Amazon ??", "I'll let you know"]);
f.write("150",["Alice (5 yo): What do you call it when your butt talks? ??", "Butt tocks"]);
f.write("151",["When does a joke become a dad joke? ??", "When it becomes apparent"]);
f.write("152",["I was going to tell you a Sodium and Hydrogen joke, but NaH ??", ""]);
f.write("153",["Ann (6 yo): : Which animal can dodge bullets? ??", "A duck"]);
f.write("154",["Why does a chicken coup only have two doors? ??", "If it had four doors, it'd be a chicken sedan"]);
f.write("155",["Why don't they play poker in the jungle? ??", "Too many cheetahs!"]);
f.write("156",["Where do all the cheetahs live? ??", "Vegas"]);
f.write("157",["What did the ocean say to the beach? ??", "Nothing! It just waved!"]);
f.write("158",["What's green and has wheels? ??", "Grass. I lied about the wheels."]);
f.write("159",["How do you catch a unique rabbit? ??", "u-nique up on em' "]);
f.write("160",["What does a grizzly bear say when he calls customer service? ??", "Just bear with me"]);
f.write("161",["Clerk: Would you like the milk in the bag? ??", "Dad: No, just leave it in the carton!"]);
f.write("162",["What do cows do when they sing? ??", "Make moo-sic"]);
f.write("163",["What do you call a man who has lost his car? ??", "Carlos"]);
f.write("164",["Want to hear a joke about paper? ??", "Nevermind it's tearable"]);
f.write("165",["What do you call a belt with a watch on it? ??", "A waist of time"]);
f.write("166",["What diet did the ghost developer go on? ??", "Boolean"]);
f.write("167",["Why was the developer unhappy at his job? ??", "She wanted arrays"]);
f.write("168",["Why was the function sad after a successful first call? ??", "He didn't get a callback"]);
f.write("169",["Whats the object-oriented way to become wealthy? ??", "Inheritance"]);
f.write("170",["What did the spider do on the computer? ??", "Made a website"]);
f.write("171",["Why are rustic cabins popular with mathematicians? ??", "They are fans of natural logs."]);
f.write("172",["What does a baby computer call his father? ??", "Data"]);
f.write("173",["Why did the computer keep sneezing? ??", "Had a virus"]);
f.write("174",["Andrew & Becky's Anniversary is coming up. Send card ??", ""]);
f.write("175",["What is a computer virus? ??", "A terminal illness"]);
f.write("176",["Why was the computer cold? ??", " It left its Windows open!"]);
f.write("177",["Why was there a bug in the computer? ??", "Because it was looking for a byte to eat"]);
f.write("178",["What do you get when you cross a computer and a life guard? ??", "A screensaver"]);
f.write("179",["What do you get when you cross a computer with an elephant? ??", "Lots of memory"]);
f.write("180",["Java truly is an OOP language... ??", "As in: OOPs I used Java!"]);
f.write("181",["How did pirates collaborate before computers ? ??", "Pier to pier networking"]);
f.write("182",["Why did the constant break up with the variable? ??", "Because she changed"]);
f.write("183",["Andrew & Becky's Anniversary ??", ""]);
f.write("184",["Q: What did the SQL query ask the tables in the bar? ??", "May I JOIN you?"]);
f.write("185",["Why did the octopus beat the shark in a fight? ??", "Because it was well armed"]);
f.write("186",["How much does a hipster weigh? ??", "An Instagram"]);
f.write("187",["What did daddy spider say to baby spider? ??", "You spend too much time on the web"]);
f.write("188",["Atheism is a non-prophet organization ??", ""]);
f.write("189",["Towels can't tell jokes. ??", "They have a dry sense of humor"]);
f.write("190",["Why do teenagers travel in groups of 3 or 5? ??", "Because they can't even"]);
f.write("191",["Why are obtuse angles so depressed? ??", "Because they're never right"]);
f.write("192",["What's the best way to woo a math teacher? ??", "Use acute angle"]);
f.write("193",["My boyfriend is the square root of -100. ??", "He is perfect but imaginary"]);
f.write("194",["How do you stay warm in any room? ??", "Huddle in the corner, it's always 90 degrees"]);
f.write("195",["Did you hear the one about the statistician. ??", "Probably"]);
f.write("196",["How do you make seven an even number? ??", "Remove the 's'"]);
f.write("197",["Why is six afraid of seven? ??", "Because seven eight nine"]);
f.write("198",["Jane & Paul's Anniversary is coming up. Send card ??", ""]);
f.write("199",["Why DID seven eat nine? ??", "Because you're supposed to eat 3 squared meals a day"]);
f.write("200",["Why didn't the Romans find algebra very challenging? ??", "Because they always knew X was 10"]);
f.write("201",["Why does nobody talk to circles? ??", "Because there is no point"]);
f.write("202",["Why should you never argue with decimals? ??", "Decimals always have a point"]);
f.write("203",["What do you call a man with a rubber toe? ??", "Roberto"]);
f.write("204",["What type of witch can you take to the beach? ??", "Sandwich"]);
f.write("205",["What does a clock do when it's hungry? ??", "I goes back four seconds"]);
f.write("206",["When is it ok to stop on green and go on red? ??", "When you're eating watermelon"]);
f.write("207",["Why do hamburgers fly south for the winter? ??", "So their buns don't freeze"]);
f.write("208",["Jane & Paul Anniversary ??", ""]);
f.write("209",["Why didn't the lion win the race? ??", "Because he was racing a cheetah"]);
f.write("210",["Why should you never trust a train? ??", "They have loco motives"]);
f.write("211",["Did you hear about the restaurant on the moon? ??", "Great food, no atmosphere"]);
f.write("212",["How can you tell if a ant is a boy or a girl?  ??", "They're all girls, otherwise they'd be uncles"]);
f.write("213",["Without geometry life is pointless ??", ""]);
f.write("214",["Why aren't horses very good storytellers? ??", "They only have one tail"]);
f.write("215",["What did the computer do at lunchtime? ??", "Had a byte"]);
f.write("216",["What kind of art class does a coal miner take?  ??", "Minecrafts"]);
f.write("217",["Why did the Norwegian navy put barcodes on all of their ships? ??", "So they can Scandinavian"]);
f.write("218",["What would mugshots be called if the prisoners took the pictures? ??", "Cellfies"]);
f.write("219",["How do prisoners call each other? ??", "With their cell phones"]);
f.write("220",["How do trees get into their computers? ??", "The login"]);
f.write("221",["Why do fish have such a hard time keeping track of their weight? ??", "It's confusing to keep track of that many scales"]);
f.write("222",["Do you all know why the old man fell into the well? ??", "He didn't see that well"]);
f.write("223",["Why don't matches play baseball? ??", "One strike and they're out"]);
f.write("224",["Why was the cat afraid of the tree? ??", "Because of its bark"]);
f.write("225",["What has four letters, sometimes has nine, never has five. ??", ""]);
f.write("226",["Did you hear about the atheist who couldn't use exponents? ??", "He didn't believe in higher powers"]);
f.write("227",["When is a door not a door? ??", "When it's ajar"]);
f.write("228",["What's Forrest Gump's computer password? ??", "1forest1"]);
f.write("229",["What did the scarecrow win an award for? ??", "He was outstanding in the field"]);
f.write("230",["What do you call a person who doesn't toot in public? ??", "A private tutor"]);
f.write("231",["What kind of tree gives the best high fives? ??", "A palm tree"]);
f.write("232",["What do you call a fake noodle? ??", "An Impasta"]);
f.write("233",["How did the vegan fix a flat? ??", "A spare I guess"]);
f.write("234",["Did you hear about the party with all the lights? ??", "It was lit"]);
f.write("235",["What does a thesaurus eat for breakfast? ??", "A synonym roll"]);
f.write("236",["What do you say to a friend struggling with grammar? ??", "There, they're, their..."]);
f.write("237",["How does Harry Potter get down a hill? ??", "Walking. JK! Rolling."]);
f.write("238",["How do cheetahs change their spots? ??", "They get up and move somewhere else"]);
f.write("239",["I brought a math book with me to get a bank loan. ??", "They said I needed something to co-sign"]);
f.write("240",["Why don't plants like math? ??", "It gives them square roots"]);
f.write("241",["Why are math books so depressed? ??", "They're full of problems"]);
f.write("242",["Why are rustic cabins popular with mathematicians? ??", "They are fans of natural logs."]);
f.write("243",["Why are cats better than dogs? ??", "Dogs can't operate an MRI scanner but catscan"]);
f.write("244",["Alice (5 yo): Why did the crow get out of the way of the car? ??", "It didn't want to get squawked!"]);
f.write("245",["Why are people surprised to see The Incredible Hulk? ??", "They didn't notice the Banner beforehand"]);
f.write("246",["If Bruce Wayne had a kid, what would they call it? ??", "Lil Wayne"]);
f.write("247",["The Edge and Bono walk into a bar... ??", "The bartender says: Oh no, not U2 again"]);
f.write("248",["What did the grape say after the elephant sat on it? ??", "Nothing it just let out a little wine"]);
f.write("249",["What did the cat say to the bat this afternoon? ??", "Nothing they were both sleeping"]);
f.write("250",["One tectonic plate bumped into another and said: ??", "Sorry, my fault."]);
f.write("251",["I ordered a chicken and an egg from Amazon ??", "I'll let you know"]);
f.write("252",["Alice (5 yo): What do you call it when your butt talks? ??", "Butt tocks"]);
f.write("253",["When does a joke become a dad joke? ??", "When it becomes apparent"]);
f.write("254",["I was going to tell you a Sodium and Hydrogen joke, but NaH ??", ""]);
f.write("255",["Ann (6 yo): : Which animal can dodge bullets? ??", "A duck"]);
f.write("256",["Why does a chicken coup only have two doors? ??", "If it had four doors, it'd be a chicken sedan"]);
f.write("257",["Why don't they play poker in the jungle? ??", "Too many cheetahs!"]);
f.write("258",["Where do all the cheetahs live? ??", "Vegas"]);
f.write("259",["What did the ocean say to the beach? ??", "Nothing! It just waved!"]);
f.write("260",["What's green and has wheels? ??", "Grass. I lied about the wheels."]);
f.write("261",["How do you catch a unique rabbit? ??", "u-nique up on em' "]);
f.write("262",["What does a grizzly bear say when he calls customer service? ??", "Just bear with me"]);
f.write("263",["Clerk: Would you like the milk in the bag? ??", "Dad: No, just leave it in the carton!"]);
f.write("264",["What do cows do when they sing? ??", "Make moo-sic"]);
f.write("265",["What do you call a man who has lost his car? ??", "Carlos"]);
f.write("266",["Want to hear a joke about paper? ??", "Nevermind it's tearable"]);
f.write("267",["What do you call a belt with a watch on it? ??", "A waist of time"]);
f.write("268",["What diet did the ghost developer go on? ??", "Boolean"]);
f.write("269",["Why was the developer unhappy at his job? ??", "She wanted arrays"]);
f.write("270",["Why was the function sad after a successful first call? ??", "He didn't get a callback"]);
f.write("271",["Whats the object-oriented way to become wealthy? ??", "Inheritance"]);
f.write("272",["What did the spider do on the computer? ??", "Made a website"]);
f.write("273",["Why are rustic cabins popular with mathematicians? ??", "They are fans of natural logs."]);
f.write("274",["What does a baby computer call his father? ??", "Data"]);
f.write("275",["Why did the computer keep sneezing? ??", "Had a virus"]);
f.write("276",["What does a clock do when it's hungry? ??", "I goes back four seconds"]);
f.write("277",["What is a computer virus? ??", "A terminal illness"]);
f.write("278",["Why was the computer cold? ??", " It left its Windows open!"]);
f.write("279",["Why was there a bug in the computer? ??", "Because it was looking for a byte to eat"]);
f.write("280",["What do you get when you cross a computer and a life guard? ??", "A screensaver"]);
f.write("281",["What do you get when you cross a computer with an elephant? ??", "Lots of memory"]);
f.write("282",["Java truly is an OOP language... ??", "As in: OOPs I used Java!"]);
f.write("283",["How did pirates collaborate before computers ? ??", "Pier to pier networking"]);
f.write("284",["Why did the constant break up with the variable? ??", "Because she changed"]);
f.write("285",["What does a lobster do on its birthday? ??", "It shell-abrates"]);
f.write("286",["Q: What did the SQL query ask the tables in the bar? ??", "May I JOIN you?"]);
f.write("287",["Why did the octopus beat the shark in a fight? ??", "Because it was well armed"]);
f.write("288",["How much does a hipster weigh? ??", "An Instagram"]);
f.write("289",["What did daddy spider say to baby spider? ??", "You spend too much time on the web"]);
f.write("290",["Atheism is a non-prophet organization ??", ""]);
f.write("291",["Towels can't tell jokes. ??", "They have a dry sense of humor"]);
f.write("292",["Why do teenagers travel in groups of 3 or 5? ??", "Because they can't even"]);
f.write("293",["Why are obtuse angles so depressed? ??", "Because they're never right"]);
f.write("294",["What's the best way to woo a math teacher? ??", "Use acute angle"]);
f.write("295",["My boyfriend is the square root of -100. ??", "He is perfect but imaginary"]);
f.write("296",["How do you stay warm in any room? ??", "Huddle in the corner, it's always 90 degrees"]);
f.write("297",["Jen & Ron's Anniversary is coming up. Send card ??", ""]);
f.write("298",["How do trees get into their computers? ??", "The login"]);
f.write("299",["Why do fish have such a hard time keeping track of their weight? ??", "It's confusing to keep track of that many scales"]);
f.write("300",["Do you all know why the old man fell into the well? ??", "He didn't see that well"]);
f.write("301",["Why don't matches play baseball? ??", "One strike and they're out"]);
f.write("302",["Why was the cat afraid of the tree? ??", "Because of its bark"]);
f.write("303",["What's the scariest thing in the jungle? ??", "bamBOO"]);
f.write("304",["What's the best car to dress up as for Halloween? ??", "A Boo-wick"]);
f.write("305",["Why do hamburgers fly south for the winter? ??", "So their buns don't freeze"]);
f.write("306",["Jen & Ron's Anniversary! ??", ""]);
f.write("307",["What would mugshots be called if the prisoners took the pictures? ??", "Cellfies"]);
f.write("308",["What do you call a man with a rubber toe? ??", "Roberto"]);
f.write("309",["What type of witch can you take to the beach? ??", "Sandwich"]);
f.write("310",["What does a clock do when it's hungry? ??", "I goes back four seconds"]);
f.write("311",["When is it ok to stop on green and go on red? ??", "When you're eating watermelon"]);
f.write("312",["Why do hamburgers fly south for the winter? ??", "So their buns don't freeze"]);
f.write("313",["Ron's birthday is coming up. Send card ??", ""]);
f.write("314",["Did you hear about the party with all the lights? ??", "It was lit"]);
f.write("315",["What does a thesaurus eat for breakfast? ??", "A synonym roll"]);
f.write("316",["What do you say to a friend struggling with grammar? ??", "There, they're, their..."]);
f.write("317",["When does a joke become a dad joke? ??", "When it becomes apparent"]);
f.write("318",["How does Harry Potter get down a hill? ??", "Walking. JK! Rolling."]);
f.write("319",["How do cheetahs change their spots? ??", "They get up and move somewhere else"]);
f.write("320",["I brought a math book with me to get a bank loan. ??", "They said I needed something to co-sign"]);
f.write("321",["Why don't plants like math? ??", "It gives them square roots"]);
f.write("322",["Why are math books so depressed? ??", "They're full of problems"]);
f.write("323",["Today is Ron's Birthday! ??", ""]);
f.write("324",["Becky's birthday is coming up. Send card ??", ""]);
f.write("325",["When is a door not a door? ??", "When it's ajar"]);
f.write("326",["What's Forrest Gump's computer password? ??", "1forest1"]);
f.write("327",["What did the scarecrow win an award for? ??", "He was outstanding in the field"]);
f.write("328",["What do you call a person who doesn't toot in public? ??", "A private tutor"]);
f.write("329",["What kind of tree gives the best high fives? ??", "A palm tree"]);
f.write("330",["What do you call a fake noodle? ??", "An Impasta"]);
f.write("331",["How did the vegan fix a flat? ??", "A spare I guess"]);
f.write("332",["Why did the computer keep sneezing? ??", "Had a virus"]);
f.write("333",["Today is Becky's Birthday! ??", ""]);
f.write("334",["What diet did the ghost developer go on? ??", "Boolean"]);
f.write("335",["Why was the developer unhappy at his job? ??", "She wanted arrays"]);
f.write("336",["Why was the function sad after a successful first call? ??", "He didn't get a callback"]);
f.write("337",["How did pirates collaborate before computers ? ??", "Pier to pier networking"]);
f.write("338",["Whats the object-oriented way to become wealthy? ??", "Inheritance"]);
f.write("339",["What did the spider do on the computer? ??", "Made a website"]);
f.write("340",["Java truly is an OOP language... ??", "As in: OOPs I used Java!"]);
f.write("341",["What does a baby computer call his father? ??", "Data"]);
f.write("342",["What is a computer virus? ??", "A terminal illness"]);
f.write("343",["Why was the computer cold? ??", " It left its Windows open!"]);
f.write("344",["Why was there a bug in the computer? ??", "Because it was looking for a byte to eat"]);
f.write("345",["What do you get when you cross a computer and a life guard? ??", "A screensaver"]);
f.write("346",["What do you get when you cross a computer with an elephant? ??", "Lots of memory"]);
f.write("347",["How much does a hipster weigh? ??", "An Instagram"]);
f.write("348",["What did daddy spider say to baby spider? ??", "You spend too much time on the web"]);
f.write("349",["Atheism is a non-prophet organization ??", ""]);
f.write("350",["Towels can't tell jokes. ??", "They have a dry sense of humor"]);
f.write("351",["Why do teenagers travel in groups of 3 or 5? ??", "Because they can't even"]);
f.write("352",["Why are obtuse angles so depressed? ??", "Because they're never right"]);
f.write("353",["What's the best way to woo a math teacher? ??", "Use acute angle"]);
f.write("354",["Jane's birthday is coming up. Send card ??", ""]);
f.write("355",["Did you hear the one about the statistician. ??", "Probably"]);
f.write("356",["Where does Frosty the snowman keep his gold? ??", "In Snowbanks"]);
f.write("357",["What's a sea turtle's favorite song? ??", "Jingle shells"]);
f.write("358",["How did the gingerbread man make his bed? ??", "With cookie sheets"]);
f.write("359",["Feliz Navidad! ??", "Why are christmas trees so bad at sewing? ??", "they always drop their needles"]);
f.write("360",["What kind of music do elves listen to? ??", "Wrap"]);
f.write("361",["Don't trust atoms— they make up everything ??", ""]);
f.write("362",["Why did the constant break up with the variable? ??", "Because she changed"]);
f.write("363",["Q: What did the SQL query ask the tables in the bar? ??", "May I JOIN you?"]);
f.write("364",["Why did the octopus beat the shark in a fight? ??", "Because it was well armed"]);
f.write("365",["My boyfriend is the square root of -100. ??", "He is perfect but imaginary"]);


var greet = [
  'What are you doing that early?',
  'Good Morning',
  'Good Afternoon',
  'Good Evening'
][ parseInt(new Date().getHours() / 24 * 4) ];


var dt = new Date();
var day = Math.floor((dt - (new Date(dt.getFullYear(), 0, 0))) / (1000 * 60 * 60 * 24)); // used to get the day number e.g. 350
var suffix = (dt.getHours() >= 12)? 'pm' : 'am';
var time = ((dt.getHours() + 11) % 12 + 1)+":"+("0"+dt.getMinutes()).substr(-2)+suffix;
var temp = E.getTemperature().toFixed(1);
var tempF = (temp * 9 / 5 + 32).toFixed(1);
var dateToTest; leap; year; t1; arr;

if (leap) {
  t1 = f.read(day-1);
  arr = t1.split('??');
} else {
  t1 = f.read(day);
  arr = t1.split('??');
}

require("Font8x12").add(Graphics);
require("Font8x16").add(Graphics);

function writeName() {
// Used to update the time and temperature every minute
  dt = new Date();
  day = Math.floor((dt - (new Date(dt.getFullYear(), 0, 0))) / (1000 * 60 * 60 * 24));
  year = dt.getFullYear();
  leap = (year % 400 === 0  || (year % 100 !== 0 && year % 4 === 0)) && (day >= 60) ? true : false;
  suffix = (dt.getHours() >= 12)? 'pm' : 'am';
  time = ((dt.getHours() + 11) % 12 + 1)+":"+("0"+dt.getMinutes()).substr(-2)+suffix;
  temp = E.getTemperature().toFixed(1);
  tempF = (temp * 9 / 5 + 32).toFixed(1);


  if (day !== dateToTest){
    dateToTest = day;
    if (leap) {
      t1 = f.read(day-1);
      arr = t1.split('??');
      nextTag(arr);
    } else {
      t1 = f.read(day);
      arr = t1.split('??');
      nextTag(arr);
    }
  } else {
    writeOther(next);
  }
  g.flip();
}

function onInit() {
// initial view
  setInterval(writeName, 60000);
  g.flip();
}

function writeShortName() {
  g.clear();
  g.setFont8x16();
  g.drawString(time+"       "+tempF + " F",0,0);
}

// display the message starting in line 27
function writeOther(s) {
  writeShortName();
  g.setFont8x12();
  var wrapped = wordWrap(s, 22);
  g.drawString(wrapped, 0, 27);
}

// Factor out functionallity
function toggleLight() {
  var state = digitalRead(LED);
  digitalWrite(LED, !state);
}

// iterate through the elements of the array
function nextTag(tags) {
  next = tags.shift();
  writeOther(next);
  tags.push(next);
}

function resetName() {
  writeShortName();
  g.drawString(greet,0,36);
  g.drawString("Auntie Ann!",0,48);
  g.flip();
}

// Used to wrap the message on the tiny Pixl.js screen
function wordWrap (str,maxWidth){
  var newLineStr = "\n"; done = false; res = '';
  do {
    found = false;
    for (i = maxWidth - 1; i >= 0; i--) {
      if (testWhite(str.charAt(i))) {
        res = res + [str.slice(0, i), newLineStr].join('');
        str = str.slice(i + 1);
        found = true;
        break;
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      res += [str.slice(0, maxWidth), newLineStr].join('');
      str = str.slice(maxWidth);
    }
    if (str.length < maxWidth)
      done = true;
  } while (!done);
  return res + str;
}

// Helper function for the wordWrap
function testWhite(x) {
// Check for white space
    if (x === ' ') {
      return true;
    } else {
      return false;
    }
}

// set up buttons
function bindButton(fn, btn) {
  setWatch(fn, btn, {edge:"rising", debounce:50, repeat:true});
}

bindButton(toggleLight, BTN1);

bindButton(function() {
  writeShortName();
  nextTag(arr);
  g.flip();
}, BTN2);

bindButton(resetName, BTN3);
bindButton(resetName, BTN4);

digitalWrite(LED, 0);
onInit();
