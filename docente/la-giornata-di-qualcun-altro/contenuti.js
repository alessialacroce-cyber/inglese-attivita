// =====================================================================
// PERSONAGGI, IMPREVISTI, MISSIONI E PAROLE VIETATE
// Si può modificare tutto il testo tra i due accenti gravi ` qui sotto,
// anche senza saper programmare. Regole:
//
// - Le sezioni iniziano con una riga tipo  === SEMPLICI ===
// - Ogni personaggio è un blocco di righe "chiave: valore",
//   separato dal successivo da una riga vuota.
//   nome:      nome ed età (deve essere diverso per ogni personaggio)
//   chi:       che lavoro fa
//   icona:     due emoji: la persona e un simbolo del lavoro (es. 👩‍⚕️ 🚲)
//   foto:      facoltativa. Nome di un file messo nella cartella "foto"
//              (es. anouk.jpg). Se c'è, prende il posto dell'icona.
//              Usare solo foto con licenza libera (es. Unsplash, Pexels)
//              e di persone non famose.
//   dove:      luogo, come compare sulla scheda
//   paese:     nome del paese sulla mappa, in inglese (si colora).
//              Si può lasciare vuoto (per esempio nello spazio).
//   posizione: latitudine, longitudine (sud e ovest con il meno)
//   fuso:      fuso orario, per l'ora locale (es. Europe/Rome).
//              Se vuoto, l'ora locale non viene mostrata.
//   fatto:     un fatto reale sul luogo o sul lavoro (anche più righe "fatto:")
//   parole:    parole utili, separate da virgole
//   giornata:  un momento della giornata: orario e appunti (una riga per momento)
// - Imprevisti e missioni: una riga ciascuno, che inizia con il trattino.
// - Non usare l'accento grave ` dentro i testi.
//
// I fatti sono una prima bozza: controllarli prima di usarli in classe.
// =====================================================================

window.TESTO_CONTENUTI = `

=== SEMPLICI ===

nome: Anouk, 29
chi: a nurse who cycles to the hospital
icona: 👩‍⚕️ 🚲
foto:
dove: Utrecht, the Netherlands
paese: Netherlands
posizione: 52.09, 5.12
fuso: Europe/Amsterdam
fatto: There are more bicycles than people in the Netherlands.
fatto: Utrecht Central Station has the biggest bicycle parking in the world, with space for about 12,500 bikes.
fatto: Cyclists ride in rain and strong wind for most of the year.
parole: bike lane, ward, early shift, rush hour, raincoat
giornata: 06:15 Alarm, quick breakfast
giornata: 06:40 Cycle 20 minutes to the hospital
giornata: 07:00 Shift starts: check on patients
giornata: 15:30 Shift ends, cycle home in the rain
giornata: 19:00 Dinner and a series on TV

nome: Min-jun, 31
chi: an English teacher at a hagwon (a private evening academy)
icona: 👨‍🏫 📚
foto:
dove: Seoul, South Korea
paese: South Korea
posizione: 37.57, 126.98
fuso: Asia/Seoul
fatto: Many Korean teenagers go to private academies after normal school.
fatto: In Seoul, hagwons must close by 10 p.m.
fatto: Hagwon teachers usually start work in the afternoon and finish late at night.
parole: academy, entrance exam, late shift, subway, pressure
giornata: 10:00 Wake up late, gym
giornata: 13:00 Lunch and lesson planning
giornata: 15:00 Subway to the academy
giornata: 16:00 Teach five classes until 10 p.m.
giornata: 23:00 Home, dinner, bed after midnight

nome: Wei Ling, 45
chi: a hawker (a street-food cook with her own stall)
icona: 👩‍🍳 🍜
foto:
dove: Singapore
paese:
posizione: 1.35, 103.82
fuso: Asia/Singapore
fatto: Singapore's hawker culture is on UNESCO's list of Intangible Cultural Heritage (2020).
fatto: Hawker centres are big open-air food courts with dozens of small stalls.
fatto: It is hot and humid all year round, usually between 25 and 32°C.
parole: stall, queue, ingredients, humid, regular customers
giornata: 04:30 Alarm, drive to the hawker centre
giornata: 05:00 Prepare soup and vegetables
giornata: 07:00 The stall opens: breakfast customers
giornata: 14:00 Lunch rush over, clean the stall
giornata: 20:00 Close, count the money, home

nome: Julien, 38
chi: a baker
icona: 👨‍🍳 🥖
foto:
dove: Lyon, France
paese: France
posizione: 45.76, 4.84
fuso: Europe/Paris
fatto: Many French bakers start work at around 3 or 4 a.m.
fatto: Many French families buy fresh bread daily.
fatto: Lyon is often called the capital of French cooking.
parole: dough, oven, rise, flour, customers
giornata: 03:00 Alarm in the dark
giornata: 03:30 Make the dough, heat the oven
giornata: 06:30 The shop opens: first customers
giornata: 13:00 Finish work, sleep in the afternoon
giornata: 21:00 Early night

nome: Yuki, 27
chi: a video game designer who commutes by train
icona: 🧑‍💻 🚆
foto:
dove: Tokyo, Japan
paese: Japan
posizione: 35.68, 139.69
fuso: Asia/Tokyo
fatto: Shinjuku Station is the busiest train station in the world, with over 3 million passengers a day.
fatto: Tokyo trains are famous for being on time.
fatto: Convenience stores (konbini) are open 24 hours a day.
parole: commute, crowded, deadline, overtime, team meeting
giornata: 07:00 Alarm, coffee from the konbini
giornata: 07:45 Crowded train to Shinjuku (50 minutes)
giornata: 09:00 Team meeting, design work
giornata: 19:00 Leave the office (later before a deadline)
giornata: 21:00 Ramen with friends near the station

nome: Darren, 50
chi: a double-decker bus driver
icona: 🧔 🚌
foto:
dove: London, United Kingdom
paese: United Kingdom
posizione: 51.51, -0.13
fuso: Europe/London
fatto: London has about 9,000 buses.
fatto: Some routes run 24 hours a day with night buses.
fatto: Drivers work early, late or night shifts.
parole: route, passengers, traffic, timetable, shift
giornata: 04:30 Alarm: early shift
giornata: 05:15 Check the bus at the depot
giornata: 05:30 First trip of the day
giornata: 10:00 Break: tea and a sandwich
giornata: 13:30 Shift ends, walk the dog

nome: Maya, 26
chi: a professional dog walker
icona: 👩 🐕
foto:
dove: New York City, USA
paese: United States of America
posizione: 40.78, -73.97
fuso: America/New_York
fatto: Central Park is about 341 hectares: bigger than the whole of Monaco.
fatto: Many New Yorkers work long hours and pay someone to walk their dog.
fatto: Summers are hot and winters can be very snowy.
parole: leash, apartment block, owner, tips, pack
giornata: 07:00 Coffee, check the weather
giornata: 08:00 Collect six dogs from their apartments
giornata: 09:00 Long walk in Central Park
giornata: 12:00 Second group of dogs
giornata: 16:00 Finish work, yoga class

nome: Lucía, 34
chi: a primary school teacher
icona: 👩‍🏫 ✏️
foto:
dove: Mexico City, Mexico
paese: Mexico
posizione: 19.43, -99.13
fuso: America/Mexico_City
fatto: Mexico City is about 2,240 metres above sea level.
fatto: Many public schools have a morning shift and an afternoon shift, with different pupils.
fatto: The metro carries millions of people every day.
parole: pupils, shift, metro, altitude, marking
giornata: 06:00 Alarm
giornata: 06:45 Metro to school (40 minutes)
giornata: 08:00 Morning shift: 35 pupils
giornata: 13:00 School ends, lunch
giornata: 16:00 Mark homework, prepare lessons

nome: Liam, 24
chi: a lifeguard
icona: 👱‍♂️ 🌊
foto:
dove: Bondi Beach, Sydney, Australia
paese: Australia
posizione: -33.89, 151.27
fuso: Australia/Sydney
fatto: Bondi is one of the most famous beaches in Australia.
fatto: Lifeguards put up red and yellow flags to show where it is safe to swim.
fatto: Summer in Sydney is from December to February.
parole: rip current, flags, rescue, sunscreen, waves
giornata: 05:30 Surf before work
giornata: 07:00 Check the sea, put up the flags
giornata: 08:00 Watch the swimmers from the tower
giornata: 12:00 Lunch break on the beach
giornata: 18:00 Barbecue with friends

nome: Thandiwe, 33
chi: a cable car operator on Table Mountain
icona: 👩 🚡
foto:
dove: Cape Town, South Africa
paese: South Africa
posizione: -33.96, 18.40
fuso: Africa/Johannesburg
fatto: Table Mountain is about 1,085 metres high.
fatto: The cable car closes when the wind is too strong.
fatto: The floor of the cabin turns round, so everyone can enjoy the view.
parole: cabin, wind, forecast, tourists, safety check
giornata: 06:30 Check the wind forecast
giornata: 07:30 Safety checks on the cable car
giornata: 08:00 The first cabin goes up
giornata: 13:00 Strong wind? The cable car may close
giornata: 18:30 Last cabin down, home

nome: Gunnar, 41
chi: a lifeguard at a public geothermal swimming pool
icona: 🧔 ♨️
foto:
dove: Reykjavík, Iceland
paese: Iceland
posizione: 64.15, -21.94
fuso: Atlantic/Reykjavik
fatto: Most homes in Iceland are heated with natural hot water from underground.
fatto: Outdoor pools are open all year, even when it snows.
fatto: In December there are only about 4 hours of daylight.
parole: hot tub, geothermal, daylight, steam, regulars
giornata: 06:00 The pool opens: first swimmers
giornata: 06:30 Check the water temperature
giornata: 11:00 Sunrise (in December)
giornata: 14:00 School groups arrive
giornata: 22:00 The pool closes

nome: Martín, 30
chi: a waiter in a traditional café-restaurant
icona: 👨 ☕
foto:
dove: Buenos Aires, Argentina
paese: Argentina
posizione: -34.60, -58.38
fuso: America/Argentina/Buenos_Aires
fatto: Many people in Argentina have dinner at 9 or 10 p.m., or even later.
fatto: Buenos Aires is famous for its historic cafés.
fatto: About 15 million people live in the Buenos Aires area.
parole: tip, menu, regulars, late, order
giornata: 11:00 Wake up, mate tea for breakfast
giornata: 12:30 Start work: lunch customers
giornata: 16:00 Break, walk in the park
giornata: 20:00 Dinner service begins
giornata: 00:30 Last customers leave, home at 1:30

nome: Chloé, 36
chi: an accountant
icona: 👩‍💼 ❄️
foto:
dove: Montreal, Canada
paese: Canada
posizione: 45.50, -73.57
fuso: America/Toronto
fatto: Montreal has an "underground city": over 30 km of tunnels linking the metro, shops and offices.
fatto: In winter the temperature can drop below -20°C.
fatto: Most people speak French, and many also speak English.
parole: tunnel, snowstorm, bilingual, commute, spreadsheet
giornata: 07:00 Alarm: -20°C outside
giornata: 08:00 Metro and underground city to the office
giornata: 09:00 Accounts and spreadsheets
giornata: 12:00 Lunch in the underground shops
giornata: 18:00 Ice skating with friends

nome: Ramesh, 48
chi: a dabbawala (a lunchbox delivery man)
icona: 👨 🍱
foto:
dove: Mumbai, India
paese: India
posizione: 19.08, 72.88
fuso: Asia/Kolkata
fatto: Dabbawalas deliver about 200,000 home-made lunches a day to offices.
fatto: They use local trains and bicycles, and a code of colours and symbols on each box.
fatto: They have been doing this job since 1890.
parole: lunchbox, local train, code, deliver, collect
giornata: 07:00 Collect lunchboxes from homes by bicycle
giornata: 09:00 Sort the boxes at the station by colour code
giornata: 10:00 Local train to the city centre
giornata: 12:30 Deliver lunches to offices
giornata: 14:00 Collect the empty boxes, take them back

nome: Faith, 28
chi: a running coach
icona: 🏃‍♀️ ⏱️
foto:
dove: Iten, Kenya
paese: Kenya
posizione: 0.67, 35.51
fuso: Africa/Nairobi
fatto: Iten is about 2,400 metres above sea level.
fatto: Many world champions train here: it is called the "Home of Champions".
fatto: Runners often train at 6 a.m., before it gets hot.
parole: altitude, training camp, track, recover, stretch
giornata: 05:30 Wake up: still dark
giornata: 06:00 Morning run with the athletes (20 km)
giornata: 09:00 Breakfast and rest
giornata: 16:00 Track training
giornata: 20:30 Early bed

nome: Inês, 39
chi: a tram driver
icona: 👩 🚋
foto:
dove: Lisbon, Portugal
paese: Portugal
posizione: 38.72, -9.14
fuso: Europe/Lisbon
fatto: Tram 28 is famous and is often packed with tourists.
fatto: Lisbon is built on seven hills, so many streets are very steep.
fatto: The yellow trams are based on models from the 1930s.
parole: steep, brakes, narrow street, tourists, rails
giornata: 06:30 Alarm
giornata: 07:30 First tram out of the depot
giornata: 08:00 Drive Tram 28 up and down the hills
giornata: 10:00 Tourists get on at every stop
giornata: 15:00 Shift ends, coffee and a custard tart

=== DIFFICILI ===

nome: Camila, 35
chi: an engineer at the ALMA radio telescope
icona: 👩‍🔬 🔭
foto:
dove: Atacama Desert, Chile
paese: Chile
posizione: -23.02, -67.75
fuso: America/Santiago
fatto: ALMA's antennas are at 5,000 metres: staff need medical checks and sometimes extra oxygen.
fatto: Staff work shifts of several days and sleep at a base camp at about 2,900 metres.
fatto: The Atacama is one of the driest deserts on Earth.
parole: antenna, altitude sickness, shift, base camp, night sky
giornata: 07:00 Breakfast at base camp (2,900 m)
giornata: 08:00 Medical check
giornata: 09:00 Bus up to 5,000 m: repair antennas
giornata: 14:00 Back down to base camp
giornata: 22:00 Look at the night sky; after 8 days, fly home

nome: Ryan, 44
chi: an ice road truck driver
icona: 👨 🚚
foto:
dove: Northwest Territories, Canada
paese: Canada
posizione: 64.0, -112.0
fuso: America/Edmonton
fatto: The Tibbitt to Contwoyto winter road is about 400 km long, and most of it is on frozen lakes.
fatto: It is open for only about 8 to 10 weeks a year, in late winter.
fatto: Trucks drive slowly on the ice, about 25 km/h, so they don't damage it.
parole: frozen lake, load, crack, convoy, mine
giornata: 04:00 Alarm at the camp: -35°C
giornata: 05:00 Check the truck and the load
giornata: 06:00 Drive at 25 km/h on the frozen lake
giornata: 13:00 Rest camp: hot meal
giornata: 20:00 Arrive near the mine, sleep

nome: Bat-Erdene, 40
chi: a nomadic herder
icona: 👨‍🌾 🐎
foto:
dove: The steppe, Mongolia
paese: Mongolia
posizione: 47.5, 103.0
fuso: Asia/Ulaanbaatar
fatto: Herder families move several times a year to find fresh grass for their animals.
fatto: They live in a ger, a round tent that can be taken down in a few hours.
fatto: Many gers have a solar panel for lights, TV and phones. Winter can reach -30°C.
parole: herd, pasture, move camp, solar panel, livestock
giornata: 05:30 Wake up in the ger, light the stove
giornata: 06:00 Milk the animals
giornata: 08:00 Ride out with the herd
giornata: 13:00 Lunch: tea with milk and meat
giornata: 21:00 Charge phones with the solar panel

nome: Sarah, 37
chi: a teacher at the School of the Air
icona: 👩‍🏫 💻
foto:
dove: Alice Springs, Australia
paese: Australia
posizione: -23.70, 133.88
fuso: Australia/Darwin
fatto: Her pupils live on huge, remote farms called stations, hundreds of kilometres away.
fatto: Lessons used to be on the radio; now they are online.
fatto: The school opened in 1951.
parole: remote, station, online lesson, outback, connection
giornata: 07:00 Coffee, check the internet connection
giornata: 08:30 Online lesson with six pupils on different stations
giornata: 11:00 Call parents, prepare materials
giornata: 13:00 Lunch
giornata: 15:00 Plan a trip to visit pupils in person

nome: Ingrid, 32
chi: a climate scientist
icona: 👩‍🔬 🌙
foto:
dove: Longyearbyen, Svalbard (Norway)
paese: Norway
posizione: 78.22, 15.65
fuso: Arctic/Longyearbyen
fatto: From late October to mid-February the sun doesn't rise at all.
fatto: In summer it is the opposite: the sun never sets.
fatto: Outside town, people must carry protection against polar bears.
parole: polar night, polar bear, fieldwork, data, darkness
giornata: 08:00 Alarm: dark outside (polar night)
giornata: 09:00 Lab work: analyse data
giornata: 11:00 Fieldwork by snowmobile, with protection against bears
giornata: 15:00 Back in town, write reports
giornata: 19:00 Quiz night at the pub

nome: Tunde, 29
chi: an app developer at a start-up
icona: 👨‍💻 📱
foto:
dove: Lagos, Nigeria
paese: Nigeria
posizione: 6.52, 3.38
fuso: Africa/Lagos
fatto: Lagos is one of the biggest cities in Africa, with over 15 million people.
fatto: Traffic jams, called "go-slows", can last for hours.
fatto: Power cuts are common, so many offices use generators.
parole: deadline, generator, remote work, client, bug
giornata: 06:00 Leave early to beat the traffic
giornata: 08:00 Arrive at the office (2 hours!)
giornata: 10:00 Video call with clients in London
giornata: 15:00 Power cut: generator on
giornata: 21:00 Work from home: fix a bug

nome: Pemba, 42
chi: a Sherpa mountain guide
icona: 🧗‍♂️ 🏔️
foto:
dove: Khumbu Valley, Nepal
paese: Nepal
posizione: 27.9, 86.8
fuso: Asia/Kathmandu
fatto: The main climbing season on Everest is April and May.
fatto: Everest Base Camp is at about 5,300 metres.
fatto: During the season guides live in tents for weeks; the rest of the year many run lodges or farms.
parole: expedition, base camp, acclimatise, oxygen, rope
giornata: 04:00 Wake up in the tent at base camp
giornata: 05:00 Check the weather, prepare the ropes
giornata: 06:00 Climb with clients
giornata: 14:00 Back at camp: tea, check the oxygen
giornata: 19:00 Radio call with the team, sleep

nome: Fatima, 46
chi: the owner of a bakery, during the month of Ramadan
icona: 👩‍🍳 🌙
foto:
dove: Fez, Morocco
paese: Morocco
posizione: 34.03, -5.00
fuso: Africa/Casablanca
fatto: During Ramadan, Muslims don't eat or drink from dawn to sunset, for a whole month.
fatto: Families eat a meal before dawn (suhoor) and break the fast at sunset (iftar).
fatto: The old town of Fez is one of the largest car-free urban areas in the world.
parole: fast, dawn, sunset, medina, sweets
giornata: 03:30 Suhoor: meal before dawn
giornata: 05:00 Bake bread and sweets
giornata: 08:00 The shop opens
giornata: 19:00 Sunset: break the fast with the family (iftar)
giornata: 21:00 Open the shop again: busy until late

nome: João, 33
chi: a teacher in a river community
icona: 👨‍🏫 🛶
foto:
dove: Near Manaus, Amazonas, Brazil
paese: Brazil
posizione: -3.12, -60.02
fuso: America/Manaus
fatto: Pupils travel to school by boat.
fatto: Between the dry and the rainy season the river can rise more than 10 metres.
fatto: Some schools in the region float on the river.
parole: boat, flood, dry season, community, canoe
giornata: 06:00 Wake up, coffee by the river
giornata: 06:30 Drive the school boat to collect pupils
giornata: 07:30 Lessons start in the floating school
giornata: 12:00 Take pupils home by boat
giornata: 15:00 Go fishing, prepare lessons

nome: Chiara, 41
chi: an astronaut
icona: 👩‍🚀 🛰️
foto:
dove: The International Space Station, 400 km above the Earth
paese:
posizione: 20.0, -150.0
fuso: UTC
fatto: The station goes round the Earth about every 90 minutes, so astronauts see 16 sunrises a day.
fatto: Astronauts exercise about 2 hours a day to keep their muscles and bones strong.
fatto: Life on the station follows GMT, the time in London in winter.
parole: orbit, weightless, experiment, spacewalk, mission control
giornata: 06:00 Wake up in a sleeping bag fixed to the wall
giornata: 07:00 Breakfast, call with mission control
giornata: 08:00 Experiments
giornata: 13:00 Two hours of exercise
giornata: 21:30 Look at the Earth from the window, sleep

nome: Omar, 39
chi: a construction engineer
icona: 👷‍♂️ 🏗️
foto:
dove: Dubai, United Arab Emirates
paese: United Arab Emirates
posizione: 25.20, 55.27
fuso: Asia/Dubai
fatto: In summer the temperature is often above 40°C.
fatto: From mid-June to mid-September, outdoor work is banned in the middle of the day (12:30 to 3 p.m.).
fatto: The Burj Khalifa, 828 metres, is the tallest building in the world.
parole: building site, crane, heat, safety, workers
giornata: 05:00 Alarm
giornata: 05:30 On the building site before the heat
giornata: 12:30 Outdoor work stops: meetings in the office
giornata: 15:00 Workers go back outside
giornata: 20:00 Dinner with the family

nome: Luca, 34
chi: the chef at Concordia research station
icona: 👨‍🍳 🧊
foto:
dove: Concordia Station, Antarctica
paese: Antarctica
posizione: -75.10, 123.33
fuso:
fatto: Concordia is run by Italy and France, at 3,200 metres on the ice.
fatto: In winter about a dozen people live there alone for 9 months: no plane can land.
fatto: The temperature can fall below -80°C, and in the middle of winter the sun doesn't rise for weeks.
parole: supplies, crew, isolation, freezer, frozen
giornata: 07:00 Wake up: dark outside (winter)
giornata: 08:00 Breakfast for the crew
giornata: 10:00 Check supplies in the freezer
giornata: 12:30 Lunch: Italian food for everyone
giornata: 20:00 Dinner, film night with the crew

nome: Rosa, 31
chi: a guide on the Inca Trail
icona: 👩 🥾
foto:
dove: Near Cusco, Peru
paese: Peru
posizione: -13.2, -72.5
fuso: America/Lima
fatto: The classic trek to Machu Picchu takes 4 days and climbs to about 4,200 metres.
fatto: Only 500 people a day, guides and porters included, can start the trail.
fatto: The trail closes every February for maintenance.
parole: trek, porter, permit, campsite, mountain pass
giornata: 05:00 Wake up the group with hot tea
giornata: 06:00 Start walking
giornata: 12:00 Lunch cooked by the porters
giornata: 15:00 Arrive at the campsite: talk about Inca history
giornata: 20:00 Sleep in a tent

nome: Joy, 26
chi: a call-centre agent
icona: 👩‍💼 🎧
foto:
dove: Manila, the Philippines
paese: Philippines
posizione: 14.60, 120.98
fuso: Asia/Manila
fatto: Manila is 12 or 13 hours ahead of New York.
fatto: Many agents work at night to answer calls from customers in the USA.
fatto: The Philippines is one of the biggest call-centre countries in the world.
parole: night shift, customer, headset, time difference, complaint
giornata: 16:00 Wake up
giornata: 20:00 Travel to the office
giornata: 21:00 Night shift starts: first calls from the USA
giornata: 01:00 Lunch break in the middle of the night
giornata: 06:00 Shift ends, breakfast with colleagues, sleep

nome: Ahmed, 47
chi: an archaeologist
icona: 👨‍🔬 🏺
foto:
dove: Luxor, Egypt
paese: Egypt
posizione: 25.69, 32.64
fuso: Africa/Cairo
fatto: Excavations often start at dawn and stop around midday because of the heat.
fatto: Luxor is home to the Valley of the Kings, where pharaohs were buried.
fatto: It almost never rains in Luxor.
parole: dig, tomb, brush, team, discovery
giornata: 04:30 Wake up
giornata: 05:30 At the dig: start at sunrise
giornata: 09:00 Breakfast in the shade
giornata: 12:00 Stop: too hot
giornata: 17:00 Clean and photograph the finds, write notes

=== IMPREVISTI ===

- A power cut lasts the whole day.
- A journalist follows you for the whole day and asks you lots of questions.
- You have to train a new colleague who knows absolutely nothing.
- It's 20 years ago: tell the same day as it was then.
- A huge storm hits your area.
- Today is a national holiday, but you have to work.
- You moved here from Italy six months ago: what are you still not used to?
- You lose your phone first thing in the morning.
- A famous person turns up at your workplace.
- You feel ill, but nobody can replace you.
- Your boss says that from next month your timetable will change completely.
- Your best friend from Italy is visiting and spends the whole day with you.

=== MISSIONI BASE ===

- What time do you start and finish work?
- How do you get to work? How long does it take?
- What do you usually eat, and when?
- What do you do in your free time?
- What do you like about your job? What don't you like?

=== MISSIONI AVANZATO ===

- How often do you...? Use always, usually, sometimes, never.
- Why do you start so early (or so late)?
- What do you do when something goes wrong?
- Is your day different in winter, or at the weekend?

=== MISSIONI SFIDA ===

- Write your day with affirmative AND negative sentences: what you do and what you don't do. (I start work at 5. I don't have lunch at home.)
- Write at least 4 negative sentences, with don't or never.
- Write 6 questions to discover your partner's character: 3 with "Do you...?" and 3 with What / When / Where / How...?
- When you speak, ask your questions and guess your partner's job and country.

=== PAROLE VIETATE ===

get up, go, then, after that, every day, nice, very, like, good

`;
