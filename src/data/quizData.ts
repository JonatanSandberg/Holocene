const quizData = [ 
  {
    id: 1,
    question: "Where do the Sámi traditionally live?",
    options: [
      "Denmark",
      "Iceland",
      "Northern Norway, Sweden, Finland, and Russia",
      "Estonia"
    ],
    answer: "Northern Norway, Sweden, Finland, and Russia",
    difficulty: "easy",
    explanation: "The Sámi are an indigenous people traditionally residing in the northern regions of Norway, Sweden, Finland, and parts of Russia."
  },
  {
    id: 2,
    question: "What is another name for the Sámi homeland?",
    options: [
      "Sápmeland",
      "Sápmi",
      "Sáme",
      "Samiara"
    ],
    answer: "Sápmi",
    difficulty: "easy",
    explanation: "Sápmi is the traditional Sámi name for the region inhabited by the Sámi people."
  },
  {
    id: 3,
    question: "What is the primary language family of the Sámi languages?",
    options: [
      "Uralic",
      "Indo-European",
      "Altaic",
      "Sino-Tibetan"
    ],
    answer: "Uralic",
    difficulty: "medium",
    explanation: "Sámi languages belong to the Uralic language family, which also includes Finnish and Hungarian."
  },
  {
    id: 4,
    question: "The Sámi are indigenous to which areas?",
    options: [
      "Europe",
      "North America",
      "Asia",
      "Africa"
    ],
    answer: "Europe",
    difficulty: "easy",
    explanation: "The Sámi are recognized as an indigenous people of Europe."
  },
  {
    id: 5,
    question: "Which traditional activity is central to Sámi culture?",
    options: [
      "Whaling",
      "Reindeer herding",
      "Mining",
      "Tea cultivation"
    ],
    answer: "Reindeer herding",
    difficulty: "easy",
    explanation: "Reindeer herding is a vital aspect of Sámi culture and livelihood."
  },
  {
    id: 6,
    question: "What is 'joik'?",
    options: [
      "A traditional dance",
      "A Sámi vocal tradition",
      "A type of fishing tool",
      "A type of boat"
    ],
    answer: "A Sámi vocal tradition",
    difficulty: "medium",
    explanation: "Joik is a form of traditional Sámi singing that expresses emotions and tells stories."
  },
  {
    id: 7,
    question: "What is the estimated population of the Sámi people today?",
    options: [
      "20,000",
      "50,000 to 100,000",
      "1 million",
      "200,000"
    ],
    answer: "50,000 to 100,000",
    difficulty: "medium",
    explanation: "Current estimates suggest that there are between 50,000 and 100,000 Sámi people."
  },
  {
    id: 8,
    question: "In which country do the majority of Sámi live?",
    options: [
      "Finland",
      "Sweden",
      "Norway",
      "Russia"
    ],
    answer: "Norway",
    difficulty: "easy",
    explanation: "Norway is home to the largest population of Sámi people."
  },
  {
    id: 9,
    question: "What are the Sámi Parliaments?",
    options: [
      "Institutions for reindeer herding management",
      "Political bodies representing Sámi interests",
      "Traditional legal councils",
      "Language preservation centers"
    ],
    answer: "Political bodies representing Sámi interests",
    difficulty: "medium",
    explanation: "The Sámi Parliaments are political institutions in Norway, Sweden, and Finland that represent Sámi interests."
  },
  {
    id: 10,
    question: "Which Sámi language has the most speakers?",
    options: [
      "Skolt Sámi",
      "Northern Sámi",
      "Lule Sámi",
      "Pite Sámi"
    ],
    answer: "Northern Sámi",
    difficulty: "medium",
    explanation: "Northern Sámi is the most widely spoken Sámi language."
  },
  {
    id: 11,
    question: "How many Sámi languages are still spoken today?",
    options: [
      "2",
      "5",
      "10",
      "9"
    ],
    answer: "9",
    difficulty: "hard",
    explanation: "There are currently 9 Sámi languages that are recognized and spoken today."
  },
  {
    id: 12,
    question: "The Sámi Parliaments exist in which countries?",
    options: [
      "Norway, Sweden, and Finland",
      "Norway, Finland, and Russia",
      "Norway, Sweden, and Russia",
      "Sweden, Finland, and Denmark"
    ],
    answer: "Norway, Sweden, and Finland",
    difficulty: "medium",
    explanation: "The Sámi Parliaments are established in Norway, Sweden, and Finland to address Sámi issues."
  },
  {
    id: 13,
    question: "What is the Sámi flag a symbol of?",
    options: [
      "Peace treaties",
      "Unity of the Sámi people",
      "Sámi religion",
      "Sámi language"
    ],
    answer: "Unity of the Sámi people",
    difficulty: "easy",
    explanation: "The Sámi flag symbolizes the unity and identity of the Sámi people."
  },
  {
    id: 14,
    question: "What do the colors on the Sámi flag represent?",
    options: [
      "Blood and soil",
      "Northern lights and water",
      "The sun, moon, and nature",
      "Reindeer and winter"
    ],
    answer: "The sun, moon, and nature",
    difficulty: "medium",
    explanation: "The colors on the Sámi flag represent natural elements significant to Sámi culture."
  },
  {
    id: 15,
    question: "What Sámi festival is a major event in Norway?",
    options: [
      "Easter Festival",
      "Sámi Winter Olympics",
      "Sámi Week",
      "Sámi Snow Festival"
    ],
    answer: "Easter Festival",
    difficulty: "medium",
    explanation: "The Easter Festival is an important cultural event for the Sámi people in Norway."
  },
  {
    id: 16,
    question: "What was the goal of 'Norwegianization' policies?",
    options: [
      "Preserve Sámi culture",
      "Assimilate Sámi into Norwegian society",
      "Encourage Sámi independence",
      "Support Sámi religious practices"
    ],
    answer: "Assimilate Sámi into Norwegian society",
    difficulty: "hard",
    explanation: "'Norwegianization' aimed to assimilate Sámi people into Norwegian culture and diminish their traditional practices."
  },
  {
    id: 17,
    question: "What is the traditional Sámi belief system centered on?",
    options: [
      "Christianity",
      "Animism and shamanism",
      "Hinduism",
      "Islam"
    ],
    answer: "Animism and shamanism",
    difficulty: "medium",
    explanation: "The traditional Sámi belief system incorporates elements of animism and shamanistic practices."
  },
  {
    id: 18,
    question: "The Skolt Sámi are primarily found in which country?",
    options: [
      "Finland",
      "Sweden",
      "Norway",
      "Russia"
    ],
    answer: "Finland",
    difficulty: "medium",
    explanation: "The Skolt Sámi primarily inhabit parts of Finland, particularly near the Russian border."
  },
  {
    id: 19,
    question: "What animal is central to Sámi livelihood and culture?",
    options: [
      "Polar bear",
      "Reindeer",
      "Arctic fox",
      "Seal"
    ],
    answer: "Reindeer",
    difficulty: "easy",
    explanation: "Reindeer are crucial to the Sámi way of life, providing food, clothing, and transportation."
  },
  {
    id: 20,
    question: "Which language is most commonly used in Sámi Parliament proceedings?",
    options: [
      "English",
      "Norwegian",
      "Northern Sámi",
      "Finnish"
    ],
    answer: "Northern Sámi",
    difficulty: "medium",
    explanation: "Northern Sámi is the predominant language used in Sámi Parliament discussions and proceedings."
  },
  {
    id: 21,
    question: "What is the main focus of modern Sámi activism?",
    options: [
      "Secession from their respective countries",
      "Cultural preservation and land rights",
      "Religious independence",
      "Trade with neighboring countries"
    ],
    answer: "Cultural preservation and land rights",
    difficulty: "medium",
    explanation: "Modern Sámi activism primarily centers around preserving Sámi culture and advocating for land rights."
  },
    {
      id: 22,
      question: "Who are the Aboriginal Australians?",
      options: [
        "Descendants of the first humans to settle Australia",
        "Migrants from Africa during the 19th century",
        "Indigenous people from New Zealand",
        "A nomadic group from Southeast Asia"
      ],
      answer: "Descendants of the first humans to settle Australia",
      difficulty: "easy",
      explanation: "Aboriginal Australians are the indigenous peoples whose ancestors arrived in Australia over 65,000 years ago."
    },
    {
      id: 23,
      question: "What is the approximate time Aboriginal Australians are believed to have arrived in Australia?",
      options: [
        "Over 65,000 years ago",
        "5,000 years ago",
        "25,000 years ago",
        "10,000 years ago"
      ],
      answer: "Over 65,000 years ago",
      difficulty: "medium",
      explanation: "It is estimated that Aboriginal Australians have been living in Australia for over 65,000 years, making them one of the oldest continuous cultures on Earth."
    },
    {
      id: 24,
      question: "What are Aboriginal Australian languages collectively called?",
      options: [
        "Pama-Nyungan languages",
        "Indo-Australian languages",
        "Oceanic languages",
        "Torresian languages"
      ],
      answer: "Pama-Nyungan languages",
      difficulty: "medium",
      explanation: "The majority of Aboriginal Australian languages belong to the Pama-Nyungan language family, covering most of the continent."
    },
    {
      id: 25,
      question: "Which of these is a cultural practice of Aboriginal Australians?",
      options: [
        "Boomerang throwing",
        "Pottery making",
        "Paper folding",
        "Tattooing"
      ],
      answer: "Boomerang throwing",
      difficulty: "easy",
      explanation: "Boomerangs were traditionally used by Aboriginal Australians for hunting and later became a symbol of their culture."
    },
    {
      id: 26,
      question: "What is 'The Dreaming' in Aboriginal Australian culture?",
      options: [
        "A system of government",
        "A creation myth and spiritual belief system",
        "A form of traditional dance",
        "An ancient form of communication"
      ],
      answer: "A creation myth and spiritual belief system",
      difficulty: "medium",
      explanation: "'The Dreaming' refers to Aboriginal Australians' spiritual belief system, which encompasses their creation stories and connection to the land."
    },
    {
      id: 27,
      question: "How did Aboriginal Australians traditionally acquire food?",
      options: [
        "Agriculture and fishing",
        "Fishing and gathering",
        "Hunting and gathering",
        "Hunting and agriculture"
      ],
      answer: "Hunting and gathering",
      difficulty: "easy",
      explanation: "Aboriginal Australians were traditionally hunter-gatherers, relying on the natural environment for food and other resources."
    },
    {
      id: 28,
      question: "What significant impact did British colonization have on Aboriginal Australians?",
      options: [
        "Increased their political power",
        "Resulted in the loss of land and population decline",
        "Introduced new art forms",
        "Unified all Aboriginal tribes"
      ],
      answer: "Resulted in the loss of land and population decline",
      difficulty: "medium",
      explanation: "British colonization resulted in the displacement of Aboriginal Australians, leading to the loss of land, culture, and significant population decline."
    },
    {
      id: 29,
      question: "Which of the following describes the 'Stolen Generations'?",
      options: [
        "A group of Aboriginal leaders",
        "Children of Aboriginal descent removed from their families by the government",
        "Aboriginal communities affected by drought",
        "A movement for Aboriginal land rights"
      ],
      answer: "Children of Aboriginal descent removed from their families by the government",
      difficulty: "hard",
      explanation: "The Stolen Generations refers to the Aboriginal and Torres Strait Islander children who were forcibly removed from their families by Australian government policies."
    },
    {
      id: 30,
      question: "What percentage of the Australian population identifies as Aboriginal or Torres Strait Islander today?",
      options: [
        "3.3%",
        "10%",
        "1.5%",
        "7.5%"
      ],
      answer: "3.3%",
      difficulty: "medium",
      explanation: "As of recent census data, about 3.3% of the Australian population identifies as Aboriginal or Torres Strait Islander."
    },
    {
      id: 31,
      question: "What is the term for the traditional land owned by Aboriginal Australians?",
      options: [
        "Country",
        "Terra Nullius",
        "Native Title",
        "Crown Land"
      ],
      answer: "Country",
      difficulty: "medium",
      explanation: "In Aboriginal Australian culture, the term 'Country' refers to the traditional lands with which they have a deep spiritual connection."
    },
    {
      id: 32,
      question: "Who are Torres Strait Islanders?",
      options: [
        "Indigenous people from mainland Australia",
        "People from the Torres Strait Islands in the north of Australia",
        "European settlers who arrived in Australia in the 18th century",
        "An ethnic group from New Zealand"
      ],
      answer: "People from the Torres Strait Islands in the north of Australia",
      difficulty: "medium",
      explanation: "Torres Strait Islanders are indigenous people from the Torres Strait Islands, located between the northern tip of Queensland, Australia, and Papua New Guinea."
    },
    {
      id: 33,
      question: "What instrument is a key part of Aboriginal Australian music?",
      options: [
        "Didgeridoo",
        "Guitar",
        "Piano",
        "Flute"
      ],
      answer: "Didgeridoo",
      difficulty: "easy",
      explanation: "The didgeridoo is a traditional wind instrument played by Aboriginal Australians, especially in ceremonies and celebrations."
    },
    {
      id: 34,
      question: "What is the significance of Uluru in Aboriginal culture?",
      options: [
        "It is a central government site",
        "A sacred site with spiritual importance",
        "A traditional hunting ground",
        "The largest city in Australia"
      ],
      answer: "A sacred site with spiritual importance",
      difficulty: "medium",
      explanation: "Uluru, also known as Ayers Rock, is a sacred site for the local Aboriginal people, symbolizing their spiritual connection to the land."
    },
    {
      id: 35,
      question: "Which of the following was an early form of Aboriginal Australian art?",
      options: [
        "Rock painting",
        "Weaving",
        "Mosaic",
        "Metal sculpture"
      ],
      answer: "Rock painting",
      difficulty: "easy",
      explanation: "Rock painting is one of the earliest known forms of Aboriginal Australian art, with examples dating back thousands of years."
    },
    {
      id: 36,
      question: "What is one of the primary goals of modern Aboriginal activism?",
      options: [
        "Restoration of Native Title rights",
        "Increase in mining opportunities",
        "Promotion of European culture",
        "Encouraging urbanization"
      ],
      answer: "Restoration of Native Title rights",
      difficulty: "hard",
      explanation: "One of the main focuses of modern Aboriginal activism is the restoration of Native Title rights, which recognize their traditional ownership of land."
    },
    {
      id: 37,
      question: "Who are the Adivasi?",
      options: [
        "The indigenous people of India",
        "A community of migrant workers in India",
        "A religious group in India",
        "An urban population in northern India"
      ],
      answer: "The indigenous people of India",
      difficulty: "easy",
      explanation: "Adivasi refers to the indigenous peoples of India, often residing in forests and remote regions."
    },
    {
      id: 38,
      question: "What is the literal meaning of the term 'Adivasi'?",
      options: [
        "Mountain people",
        "First inhabitants",
        "Forest dwellers",
        "Nomads"
      ],
      answer: "First inhabitants",
      difficulty: "medium",
      explanation: "The term 'Adivasi' literally translates to 'first inhabitants,' indicating their ancient presence in India."
    },
    {
      id: 39,
      question: "Which Indian states have significant Adivasi populations?",
      options: [
        "Maharashtra and Gujarat",
        "Madhya Pradesh, Odisha, and Jharkhand",
        "Kerala and Tamil Nadu",
        "Rajasthan and Punjab"
      ],
      answer: "Madhya Pradesh, Odisha, and Jharkhand",
      difficulty: "medium",
      explanation: "Madhya Pradesh, Odisha, and Jharkhand are known for having large Adivasi populations."
    },
    {
      id: 40,
      question: "Which term is often used for Adivasi people in legal and political contexts?",
      options: [
        "Scheduled Castes",
        "Scheduled Tribes",
        "OBC (Other Backward Classes)",
        "Untouchables"
      ],
      answer: "Scheduled Tribes",
      difficulty: "medium",
      explanation: "'Scheduled Tribes' is the legal term used to refer to Adivasi people in India's political framework."
    },
    {
      id: 41,
      question: "Which of the following is a challenge faced by Adivasi communities?",
      options: [
        "Urbanization",
        "Caste discrimination",
        "Land displacement",
        "Overpopulation"
      ],
      answer: "Land displacement",
      difficulty: "hard",
      explanation: "Adivasi communities often face displacement due to industrialization and deforestation."
    },
    {
      id: 42,
      question: "What is the traditional livelihood of many Adivasi communities?",
      options: [
        "Agriculture and forest gathering",
        "Fisheries and sea trade",
        "Manufacturing and commerce",
        "Mining and industrial work"
      ],
      answer: "Agriculture and forest gathering",
      difficulty: "medium",
      explanation: "Many Adivasi communities depend on agriculture and forest gathering for their livelihood."
    },
    {
      id: 43,
      question: "Which movement aimed to protect Adivasi rights in India?",
      options: [
        "Chipko Movement",
        "Santhal Rebellion",
        "Naxalite Movement",
        "Bhoodan Movement"
      ],
      answer: "Santhal Rebellion",
      difficulty: "hard",
      explanation: "The Santhal Rebellion was a significant Adivasi uprising against British policies and landlords in colonial India."
    },
    {
      id: 44,
      question: "What is the significance of the Santhal Rebellion?",
      options: [
        "It led to the overthrow of British rule in India",
        "It was an uprising of Adivasi people against British policies and landlords",
        "It helped create the Indian National Congress",
        "It was a cultural movement to preserve Adivasi art"
      ],
      answer: "It was an uprising of Adivasi people against British policies and landlords",
      difficulty: "medium",
      explanation: "The Santhal Rebellion was an anti-colonial movement where Adivasi communities resisted oppressive British policies."
    },
    {
      id: 45,
      question: "What is a major issue that impacts Adivasi women specifically?",
      options: [
        "Access to education",
        "Early marriage and human trafficking",
        "Religious conversion",
        "Economic migration"
      ],
      answer: "Early marriage and human trafficking",
      difficulty: "hard",
      explanation: "Adivasi women often face challenges such as early marriage and vulnerability to human trafficking."
    },
    {
      id: 46,
      question: "What language family do many Adivasi languages belong to?",
      options: [
        "Indo-European",
        "Dravidian",
        "Austroasiatic and Dravidian",
        "Sino-Tibetan"
      ],
      answer: "Austroasiatic and Dravidian",
      difficulty: "medium",
      explanation: "Many Adivasi languages are part of the Austroasiatic and Dravidian language families, reflecting their diversity."
    },
    {
      id: 47,
      question: "Who are the African Pygmies?",
      options: [
        "Indigenous people of Central Africa",
        "A nomadic group in Northern Africa",
        "A pastoral community in East Africa",
        "Fishermen along the Nile River"
      ],
      answer: "Indigenous people of Central Africa",
      difficulty: "easy",
      explanation: "The Pygmies are indigenous people native to the forested regions of Central Africa."
    },
    {
      id: 48,
      question: "What is the average height of African Pygmy adults?",
      options: [
        "Below 150 cm (4 feet 11 inches)",
        "Above 180 cm (5 feet 11 inches)",
        "Between 160-170 cm",
        "Around 200 cm (6 feet 7 inches)"
      ],
      answer: "Below 150 cm (4 feet 11 inches)",
      difficulty: "easy",
      explanation: "African Pygmies are known for their shorter stature, with adults typically standing below 150 cm."
    },
    {
      id: 49,
      question: "Which forests are traditionally inhabited by the Pygmy people?",
      options: [
        "Congo Basin forests",
        "Sahara Desert",
        "Kalahari Desert",
        "Savannahs of East Africa"
      ],
      answer: "Congo Basin forests",
      difficulty: "easy",
      explanation: "The Pygmy people have traditionally lived in the Congo Basin forests, a region rich in biodiversity."
    },
    {
      id: 50,
      question: "What is the traditional livelihood of African Pygmies?",
      options: [
        "Hunting and gathering",
        "Fishing",
        "Agriculture",
        "Mining"
      ],
      answer: "Hunting and gathering",
      difficulty: "medium",
      explanation: "African Pygmies traditionally rely on hunting and gathering as their primary means of subsistence."
    },
    {
      id: 51,
      question: "Which of the following Pygmy groups are the most well-known?",
      options: [
        "Mbuti and Aka",
        "Zulu and Maasai",
        "Hausa and Fulani",
        "Bantu and Berber"
      ],
      answer: "Mbuti and Aka",
      difficulty: "medium",
      explanation: "The Mbuti and Aka are the most well-known Pygmy groups residing in Central Africa's forests."
    },
    {
      id: 52,
      question: "What language families do African Pygmies speak?",
      options: [
        "Bantu and Ubangian",
        "Niger-Congo",
        "Khoisan and Nilotic",
        "Afro-Asiatic"
      ],
      answer: "Bantu and Ubangian",
      difficulty: "medium",
      explanation: "Many Pygmy groups speak languages from the Bantu and Ubangian language families."
    },
    {
      id: 53,
      question: "Which major issue affects African Pygmies today?",
      options: [
        "Deforestation and land displacement",
        "Overpopulation",
        "Urbanization",
        "Access to education"
      ],
      answer: "Deforestation and land displacement",
      difficulty: "hard",
      explanation: "African Pygmies face severe challenges from deforestation, which threatens their traditional way of life."
    },
    {
      id: 54,
      question: "What is one of the key cultural practices of African Pygmies?",
      options: [
        "Polyphonic singing",
        "Tattooing",
        "Dyeing textiles",
        "Metalworking"
      ],
      answer: "Polyphonic singing",
      difficulty: "medium",
      explanation: "Polyphonic singing is an integral part of African Pygmy culture, especially in their ceremonies."
    },
    {
      id: 55,
      question: "How have African Pygmies traditionally been viewed by neighboring groups?",
      options: [
        "Inferior and marginalized",
        "Highly respected",
        "Equal partners in trade",
        "Leaders of local regions"
      ],
      answer: "Inferior and marginalized",
      difficulty: "hard",
      explanation: "African Pygmies have historically been marginalized and viewed as inferior by neighboring groups."
    },
    {
      id: 56,
      question: "What challenge do African Pygmies face in modern society?",
      options: [
        "Loss of language and cultural identity",
        "Political dominance",
        "Economic over-dependence on tourism",
        "Migration to urban areas"
      ],
      answer: "Loss of language and cultural identity",
      difficulty: "hard",
      explanation: "Modern pressures lead to the loss of language and cultural identity among African Pygmies."
    },
    {
      id: 57,
      question: "Where do the Ainu people traditionally live?",
      options: [
        "Northern Japan and parts of Russia",
        "Southern China",
        "Mongolia",
        "Eastern Korea"
      ],
      answer: "Northern Japan and parts of Russia",
      difficulty: "easy",
      explanation: "The Ainu people are indigenous to northern Japan and parts of Russia."
    },
    {
      id: 58,
      question: "What is the traditional Ainu religion centered on?",
      options: [
        "Animism and nature spirits",
        "Buddhism",
        "Shinto",
        "Ancestor worship"
      ],
      answer: "Animism and nature spirits",
      difficulty: "medium",
      explanation: "The traditional Ainu religion is based on animism and the worship of nature spirits."
    },
    {
      id: 59,
      question: "What is the traditional Ainu language classified as?",
      options: [
        "Language isolate",
        "Indo-European",
        "Altaic",
        "Sino-Tibetan"
      ],
      answer: "Language isolate",
      difficulty: "medium",
      explanation: "The Ainu language is considered a language isolate, with no known relation to other language families."
    },
    {
      id: 60,
      question: "What is the Ainu traditional dress known for?",
      options: [
        "Intricate embroidery",
        "Gold weaving",
        "Bright colors",
        "Animal pelts"
      ],
      answer: "Intricate embroidery",
      difficulty: "medium",
      explanation: "Ainu traditional dress is renowned for its intricate embroidery that showcases their cultural heritage."
    },
    {
      id: 61,
      question: "What is the 'Iyomante' ceremony?",
      options: [
        "A bear-sending ritual",
        "A harvest festival",
        "A marriage ceremony",
        "A coming-of-age ritual"
      ],
      answer: "A bear-sending ritual",
      difficulty: "medium",
      explanation: "'Iyomante' is a ceremonial practice among the Ainu, honoring the spirit of the bear after a hunt."
    },
    {
      id: 62,
      question: "What language family does Ainu belong to?",
      options: [
        "It is a language isolate",
        "Uralic",
        "Turkic",
        "Niger-Congo"
      ],
      answer: "It is a language isolate",
      difficulty: "medium",
      explanation: "Ainu is classified as a language isolate, meaning it has no known relatives."
    },
    {
      id: 63,
      question: "In what year did Japan recognize the Ainu as an indigenous people?",
      options: [
        "2008",
        "1900",
        "1950",
        "2010"
      ],
      answer: "2008",
      difficulty: "medium",
      explanation: "Japan officially recognized the Ainu as an indigenous people in 2008, acknowledging their rights and culture."
    },
    {
      id: 64,
      question: "What type of governance did traditional Ainu society practice?",
      options: [
        "Council of elders",
        "Monarchy",
        "Military leadership",
        "Theocratic rule"
      ],
      answer: "Council of elders",
      difficulty: "medium",
      explanation: "Traditional Ainu governance was based on a council of elders who made decisions for the community."
    },
    {
      id: 65,
      question: "What is the most notable aspect of Ainu men’s appearance?",
      options: [
        "Thick beards",
        "Shaved heads",
        "Piercings",
        "Brightly colored robes"
      ],
      answer: "Thick beards",
      difficulty: "medium",
      explanation: "Ainu men are often recognized for their thick beards, which are culturally significant."
    },
    {
      id: 66,
      question: "What is one of the major issues facing the Ainu today?",
      options: [
        "Cultural assimilation and language loss",
        "Deforestation",
        "Overpopulation",
        "Religious persecution"
      ],
      answer: "Cultural assimilation and language loss",
      difficulty: "hard",
      explanation: "The Ainu community faces significant challenges from cultural assimilation and the loss of their language."
    },
    {
      id: 67,
      question: "Where do the Apache traditionally live?",
      options: [
        "Southwestern United States",
        "Great Plains",
        "Eastern United States",
        "Pacific Northwest"
      ],
      answer: "Southwestern United States",
      difficulty: "easy",
      explanation: "The Apache traditionally inhabit the southwestern regions of the United States."
    },
    {
      id: 68,
      question: "What was the primary mode of subsistence for the Apache?",
      options: [
        "Hunting and gathering",
        "Fishing",
        "Farming",
        "Trading"
      ],
      answer: "Hunting and gathering",
      difficulty: "medium",
      explanation: "Historically, the Apache relied on hunting and gathering for their subsistence."
    },
    {
      id: 69,
      question: "Who was the famous Apache leader known for resisting U.S. and Mexican military forces?",
      options: [
        "Geronimo",
        "Sitting Bull",
        "Crazy Horse",
        "Red Cloud"
      ],
      answer: "Geronimo",
      difficulty: "hard",
      explanation: "Geronimo was a prominent Apache leader noted for his resistance against U.S. and Mexican forces."
    },
    {
      id: 70,
      question: "Which language family does the Apache language belong to?",
      options: [
        "Athabaskan",
        "Algonquian",
        "Siouan",
        "Iroquoian"
      ],
      answer: "Athabaskan",
      difficulty: "medium",
      explanation: "The Apache language is part of the Athabaskan language family."
    },
    {
      id: 71,
      question: "What type of dwelling did the Apache traditionally live in?",
      options: [
        "Wickiups",
        "Teepees",
        "Longhouses",
        "Igloos"
      ],
      answer: "Wickiups",
      difficulty: "medium",
      explanation: "The Apache traditionally lived in wickiups, which are dome-shaped dwellings made of natural materials."
    },
    {
      id: 72,
      question: "What was the Apache’s traditional form of governance?",
      options: [
        "Decentralized tribal councils",
        "Monarchy",
        "Centralized government",
        "Military chiefdom"
      ],
      answer: "Decentralized tribal councils",
      difficulty: "medium",
      explanation: "Apache governance was characterized by decentralized tribal councils that made collective decisions."
    },
    {
      id: 73,
      question: "What was a key aspect of Apache warfare?",
      options: [
        "Guerrilla tactics",
        "Large-scale battles",
        "Naval warfare",
        "Siege warfare"
      ],
      answer: "Guerrilla tactics",
      difficulty: "hard",
      explanation: "The Apache were known for their guerrilla tactics, which included ambushes and hit-and-run attacks."
    },
      {
        id: 74,
        question: "What was the role of the 'shaman' in Apache culture?",
        options: [
          "Spiritual healer and mediator with the spirit world",
          "Political leader",
          "Warrior chief",
          "Trade negotiator"
        ],
        answer: "Spiritual healer and mediator with the spirit world",
        difficulty: "medium",
        explanation: "In Apache culture, shamans served as spiritual healers and mediators, connecting the community with the spirit world."
      },
      {
        id: 75,
        question: "How did the U.S. government approach the Apache in the 19th century?",
        options: [
          "Through warfare and forced relocations",
          "Granting autonomy",
          "Offering trade agreements",
          "Recognition of land rights"
        ],
        answer: "Through warfare and forced relocations",
        difficulty: "hard",
        explanation: "The U.S. government primarily used warfare and forced relocations to manage Apache resistance."
      },
      {
        id: 76,
        question: "What event marked the end of Apache resistance to U.S. forces?",
        options: [
          "Geronimo’s surrender",
          "The Battle of Little Bighorn",
          "The signing of the Treaty of Fort Laramie",
          "The Wounded Knee Massacre"
        ],
        answer: "Geronimo’s surrender",
        difficulty: "medium",
        explanation: "Geronimo’s surrender in 1886 effectively ended significant Apache resistance to U.S. forces."
      },
      {
        id: 77,
        question: "Where do the Aymara people primarily live?",
        options: [
          "The Andes of Bolivia, Peru, and Chile",
          "The Amazon Basin",
          "Patagonia",
          "The Galápagos Islands"
        ],
        answer: "The Andes of Bolivia, Peru, and Chile",
        difficulty: "easy",
        explanation: "The Aymara people predominantly inhabit the Andes region of Bolivia, Peru, and Chile."
      },
      {
        id: 78,
        question: "What language do the Aymara people speak?",
        options: [
          "Aymara",
          "Quechua",
          "Spanish",
          "Guarani"
        ],
        answer: "Aymara",
        difficulty: "easy",
        explanation: "The Aymara people primarily speak the Aymara language, which is one of the indigenous languages of the Andes."
      },
      {
        id: 79,
        question: "What was the Aymara’s role in the Inca Empire?",
        options: [
          "They were a subject people of the Incas",
          "They were allies of the Incas",
          "They were rulers of the Incas",
          "They were enemies of the Incas"
        ],
        answer: "They were a subject people of the Incas",
        difficulty: "medium",
        explanation: "The Aymara were considered a subject people under Inca rule, contributing to their agricultural economy."
      },
      {
        id: 80,
        question: "What is the traditional Aymara religious belief system based on?",
        options: [
          "Worship of natural elements and spirits",
          "Polytheism with a pantheon of gods",
          "Monotheism",
          "Ancestor worship"
        ],
        answer: "Worship of natural elements and spirits",
        difficulty: "medium",
        explanation: "Aymara religious beliefs are centered on the worship of natural elements and the spirits associated with them."
      },
      {
        id: 81,
        question: "What is a key feature of traditional Aymara agriculture?",
        options: [
          "Terrace farming",
          "Irrigation systems",
          "Slash-and-burn agriculture",
          "Nomadic herding"
        ],
        answer: "Terrace farming",
        difficulty: "medium",
        explanation: "The Aymara practice terrace farming, which is well-suited for the mountainous Andean terrain."
      },
      {
        id: 82,
        question: "What major body of water is significant to Aymara culture?",
        options: [
          "Lake Titicaca",
          "Amazon River",
          "Lake Maracaibo",
          "Rio de la Plata"
        ],
        answer: "Lake Titicaca",
        difficulty: "easy",
        explanation: "Lake Titicaca is culturally significant to the Aymara people and is the highest navigable lake in the world."
      },
      {
        id: 83,
        question: "Which Aymara holiday is celebrated on June 21?",
        options: [
          "Aymara New Year",
          "Inti Raymi",
          "Day of the Dead",
          "Carnival"
        ],
        answer: "Aymara New Year",
        difficulty: "medium",
        explanation: "The Aymara New Year is celebrated on June 21, marking the winter solstice and a time for renewal."
      },
      {
        id: 84,
        question: "What is one of the main traditional crops grown by the Aymara?",
        options: [
          "Potatoes",
          "Maize",
          "Wheat",
          "Barley"
        ],
        answer: "Potatoes",
        difficulty: "easy",
        explanation: "Potatoes are a staple crop for the Aymara, who cultivate many indigenous varieties."
      },
      {
        id: 85,
        question: "How did the Spanish conquest impact the Aymara people?",
        options: [
          "They were subjected to colonial rule and exploitation",
          "They allied with the Spanish",
          "They retained their independence",
          "They were completely wiped out"
        ],
        answer: "They were subjected to colonial rule and exploitation",
        difficulty: "hard",
        explanation: "The Spanish conquest led to the Aymara being subjected to colonial rule, which drastically altered their way of life."
      },
      {
        id: 86,
        question: "In which country do the majority of Aymara people live today?",
        options: [
          "Bolivia",
          "Peru",
          "Chile",
          "Argentina"
        ],
        answer: "Bolivia",
        difficulty: "easy",
        explanation: "The majority of Aymara people currently reside in Bolivia."
      },
      {
        id: 87,
        question: "Where do the Basque people primarily live?",
        options: [
          "Northern Spain and Southwestern France",
          "Portugal and Western Spain",
          "Southern Italy",
          "Northern France"
        ],
        answer: "Northern Spain and Southwestern France",
        difficulty: "easy",
        explanation: "The Basque people inhabit regions in northern Spain and southwestern France."
      },
      {
        id: 88,
        question: "What is the traditional Basque language called?",
        options: [
          "Euskara",
          "Catalan",
          "Spanish",
          "Occitan"
        ],
        answer: "Euskara",
        difficulty: "easy",
        explanation: "Euskara is the traditional language of the Basque people."
      },
      {
        id: 89,
        question: "What is notable about the Basque language?",
        options: [
          "It is a language isolate",
          "It is related to Latin",
          "It has no written form",
          "It is only spoken by a few dozen people"
        ],
        answer: "It is a language isolate",
        difficulty: "hard",
        explanation: "Basque is considered a language isolate, with no known relation to other languages."
      },
      {
        id: 90,
        question: "What is one of the main traditional Basque sports?",
        options: [
          "Pelota",
          "Soccer",
          "Wrestling",
          "Skiing"
        ],
        answer: "Pelota",
        difficulty: "medium",
        explanation: "Pelota is a traditional sport in the Basque Country, often played in fronton courts."
      },
      {
        id: 91,
        question: "What major industry are the Basques historically known for?",
        options: [
          "Fishing and whaling",
          "Wine production",
          "Metalworking",
          "Silk weaving"
        ],
        answer: "Fishing and whaling",
        difficulty: "medium",
        explanation: "Historically, the Basques were known for their fishing and whaling industries, especially in the Atlantic."
      },
      {
        id: 92,
        question: "Which mountain range is traditionally associated with the Basque people?",
        options: [
          "The Pyrenees",
          "The Alps",
          "The Sierra Nevada",
          "The Apennines"
        ],
        answer: "The Pyrenees",
        difficulty: "easy",
        explanation: "The Basque Country is traditionally associated with the Pyrenees mountain range."
      },
      {
        id: 93,
        question: "Which Basque nationalist group was known for its push for independence?",
        options: [
          "ETA",
          "FARC",
          "IRA",
          "Zapatistas"
        ],
        answer: "ETA",
        difficulty: "hard",
        explanation: "ETA was a militant Basque nationalist group that sought independence from Spain."
      },
      {
        id: 94,
        question: "What is the name of the Basque flag?",
        options: [
          "Ikurriña",
          "Bandera",
          "Senyalada",
          "Estandarte"
        ],
        answer: "Ikurriña",
        difficulty: "medium",
        explanation: "The Basque flag, known as the Ikurriña, symbolizes Basque identity and culture."
      },
      {
        id: 95,
        question: "Which famous Basque festival celebrates their maritime heritage?",
        options: [
          "Semana Grande",
          "San Fermín",
          "La Tomatina",
          "Fallas"
        ],
        answer: "Semana Grande",
        difficulty: "medium",
        explanation: "Semana Grande is a festival in Bilbao celebrating Basque maritime heritage and culture."
      },
      {
        id: 96,
        question: "Which region is considered the heart of the Basque Country?",
        options: [
          "The Basque Autonomous Community",
          "Galicia",
          "Catalonia",
          "Navarre"
        ],
        answer: "The Basque Autonomous Community",
        difficulty: "easy",
        explanation: "The Basque Autonomous Community is often regarded as the heart of Basque culture and identity."
      },
      {
        id: 97,
        question: "Who are the Bedouin people?",
        options: [
          "Nomadic Arab tribes",
          "Sedentary farmers",
          "Mountain-dwelling communities",
          "Coastal fishing groups"
        ],
        answer: "Nomadic Arab tribes",
        difficulty: "easy",
        explanation: "The Bedouin are traditionally nomadic Arab tribes known for their herding and pastoral lifestyles."
      },
      {
        id: 98,
        question: "In which region are Bedouins primarily found?",
        options: [
          "The Arabian Desert and North Africa",
          "The Andes Mountains",
          "The Amazon Rainforest",
          "The Alps"
        ],
        answer: "The Arabian Desert and North Africa",
        difficulty: "easy",
        explanation: "Bedouins primarily inhabit the Arabian Desert and parts of North Africa."
      },
    {
        id: 99,
        question: "What is the traditional Bedouin lifestyle based on?",
        options: [
          "Nomadic herding of camels, sheep, and goats",
          "Industrial production",
          "Rice farming",
          "Fishing"
        ],
        answer: "Nomadic herding of camels, sheep, and goats",
        difficulty: "easy",
        explanation: "The Bedouin lifestyle is traditionally based on the nomadic herding of camels, sheep, and goats."
      },
      {
        id: 100,
        question: "What is the social structure of Bedouin tribes like?",
        options: [
          "Patriarchal and clan-based",
          "Egalitarian and democratic",
          "Matriarchal",
          "Monarchical"
        ],
        answer: "Patriarchal and clan-based",
        difficulty: "medium",
        explanation: "Bedouin social structure is predominantly patriarchal and organized into clans."
      },
      {
        id: 101,
        question: "What is a traditional Bedouin tent made of?",
        options: [
          "Goat hair",
          "Wool",
          "Cotton",
          "Leather"
        ],
        answer: "Goat hair",
        difficulty: "easy",
        explanation: "Traditional Bedouin tents are typically made from goat hair, which is durable and suitable for desert climates."
      },
      {
        id: 102,
        question: "Which skill is highly valued in Bedouin culture?",
        options: [
          "Poetry and oral storytelling",
          "Basket weaving",
          "Pottery making",
          "Metalworking"
        ],
        answer: "Poetry and oral storytelling",
        difficulty: "medium",
        explanation: "Poetry and oral storytelling are significant cultural expressions in Bedouin tradition."
      },
      {
        id: 103,
        question: "What is the Bedouin term for a tribal leader?",
        options: [
          "Sheikh",
          "Imam",
          "Emir",
          "Khan"
        ],
        answer: "Sheikh",
        difficulty: "easy",
        explanation: "The term 'Sheikh' refers to a tribal leader in Bedouin culture."
      },
      {
        id: 104,
        question: "What is the Bedouin relationship with desert environments?",
        options: [
          "They have adapted to the harsh conditions of the desert",
          "They avoid deserts",
          "They primarily live in forests",
          "They are dependent on large cities"
        ],
        answer: "They have adapted to the harsh conditions of the desert",
        difficulty: "medium",
        explanation: "Bedouins have a long history of adapting to the harsh conditions of desert life."
      },
      {
        id: 105,
        question: "Which modern countries have significant Bedouin populations?",
        options: [
          "Saudi Arabia, Jordan, Egypt",
          "India, Nepal, China",
          "USA, Mexico, Brazil",
          "Germany, France, Italy"
        ],
        answer: "Saudi Arabia, Jordan, Egypt",
        difficulty: "easy",
        explanation: "Significant Bedouin populations can be found in Saudi Arabia, Jordan, and Egypt."
      },
      {
        id: 106,
        question: "How has modernization affected Bedouin life?",
        options: [
          "Many have become sedentary",
          "They remain entirely nomadic",
          "They have moved into forests",
          "They have increased nomadic practices"
        ],
        answer: "Many have become sedentary",
        difficulty: "medium",
        explanation: "Modernization has led many Bedouins to adopt sedentary lifestyles, though some still maintain nomadic practices."
      },
      {
        id: 107,
        question: "Who are the Garifuna people?",
        options: [
          "Descendants of West African and Arawak-Carib peoples",
          "Native to the Amazon",
          "European settlers in the Caribbean",
          "Descendants of the Maya"
        ],
        answer: "Descendants of West African and Arawak-Carib peoples",
        difficulty: "easy",
        explanation: "The Garifuna are descendants of West African and Arawak-Carib peoples, known for their rich cultural heritage."
      },
      {
        id: 108,
        question: "Where do the Garifuna primarily live?",
        options: [
          "Central America and the Caribbean",
          "Northern Europe",
          "South America’s Andes",
          "East Asia"
        ],
        answer: "Central America and the Caribbean",
        difficulty: "easy",
        explanation: "The Garifuna primarily inhabit regions in Central America and the Caribbean."
      },
      {
        id: 109,
        question: "What language do the Garifuna speak?",
        options: [
          "Garifuna, a mix of Arawak, Carib, and African languages",
          "Quechua",
          "French Creole",
          "Swahili"
        ],
        answer: "Garifuna, a mix of Arawak, Carib, and African languages",
        difficulty: "medium",
        explanation: "The Garifuna language is a unique blend of Arawak, Carib, and African languages."
      },
      {
        id: 110,
        question: "What is a traditional aspect of Garifuna culture?",
        options: [
          "Music and dance, especially punta",
          "Metalworking",
          "Ceramic production",
          "Weaving textiles"
        ],
        answer: "Music and dance, especially punta",
        difficulty: "medium",
        explanation: "Music and dance, particularly the punta style, are vital components of Garifuna culture."
      },
      {
        id: 111,
        question: "What type of religion do the Garifuna practice?",
        options: [
          "A mix of Catholicism and indigenous spirituality",
          "Hinduism",
          "Buddhism",
          "Islam"
        ],
        answer: "A mix of Catholicism and indigenous spirituality",
        difficulty: "medium",
        explanation: "The Garifuna practice a syncretic religion that combines Catholicism with indigenous beliefs."
      },
      {
        id: 112,
        question: "Which significant historical event impacted the Garifuna in the 18th century?",
        options: [
          "Their exile from St. Vincent by the British",
          "The Spanish colonization of South America",
          "The slave trade in West Africa",
          "The Cuban revolution"
        ],
        answer: "Their exile from St. Vincent by the British",
        difficulty: "hard",
        explanation: "In the 18th century, the Garifuna were exiled from St. Vincent by the British, leading to their migration to Central America."
      },
      {
        id: 113,
        question: "In which countries are significant Garifuna populations found today?",
        options: [
          "Belize, Honduras, Guatemala",
          "Mexico, Argentina, Chile",
          "Kenya, Tanzania, Uganda",
          "Japan, Korea, China"
        ],
        answer: "Belize, Honduras, Guatemala",
        difficulty: "easy",
        explanation: "Significant Garifuna populations are found in Belize, Honduras, and Guatemala."
      },
      {
        id: 114,
        question: "What is Garifuna punta music known for?",
        options: [
          "Its fast rhythms and vibrant dance",
          "Its slow and melancholic tunes",
          "It is performed exclusively with drums",
          "It uses only string instruments"
        ],
        answer: "Its fast rhythms and vibrant dance",
        difficulty: "medium",
        explanation: "Garifuna punta music is characterized by fast rhythms and energetic dance styles."
      },
      {
        id: 115,
        question: "Which annual Garifuna celebration marks their arrival in Central America?",
        options: [
          "Garifuna Settlement Day",
          "Independence Day",
          "Carnival",
          "Day of the Dead"
        ],
        answer: "Garifuna Settlement Day",
        difficulty: "medium",
        explanation: "Garifuna Settlement Day celebrates the arrival of the Garifuna in Central America."
      },
      {
        id: 116,
        question: "What traditional Garifuna dish is made from cassava?",
        options: [
          "Hudut",
          "Tamales",
          "Biryani",
          "Sushi"
        ],
        answer: "Hudut",
        difficulty: "medium",
        explanation: "Hudut is a traditional Garifuna dish made from cassava and often served with fish."
      },
      {
        id: 117,
        question: "Where do the Guaraní people primarily live?",
        options: [
          "Paraguay, Brazil, Argentina, and Bolivia",
          "Northern Mexico",
          "Eastern Peru",
          "Western Chile"
        ],
        answer: "Paraguay, Brazil, Argentina, and Bolivia",
        difficulty: "easy",
        explanation: "The Guaraní primarily inhabit regions in Paraguay, Brazil, Argentina, and Bolivia."
      },
      {
        id: 118,
        question: "What language do the Guaraní people speak?",
        options: [
          "Guaraní",
          "Spanish",
          "Portuguese",
          "Mayan"
        ],
        answer: "Guaraní",
        difficulty: "easy",
        explanation: "The Guaraní people speak the Guaraní language, which is an official language in Paraguay."
      },
      {
        id: 119,
        question: "What is a traditional Guaraní practice?",
        options: [
          "Slash-and-burn agriculture",
          "Herding cattle",
          "Nomadic herding",
          "Fishing and whaling"
        ],
        answer: "Slash-and-burn agriculture",
        difficulty: "medium",
        explanation: "Slash-and-burn agriculture is a traditional practice among the Guaraní for cultivating crops."
      },
      {
        id: 120,
        question: "What is the Guaraní relationship to nature and the environment?",
        options: [
          "They view nature as sacred and central to their culture",
          "They do not prioritize nature",
          "They are primarily urban dwellers",
          "They focus on industrial development"
        ],
        answer: "They view nature as sacred and central to their culture",
        difficulty: "medium",
        explanation: "The Guaraní have a deep spiritual connection to nature, considering it sacred."
      },
      {
        id: 121,
        question: "What traditional Guaraní beverage is widely consumed?",
        options: [
          "Yerba mate",
          "Coffee",
          "Wine",
          "Kava"
        ],
        answer: "Yerba mate",
        difficulty: "easy",
        explanation: "Yerba mate is a traditional beverage consumed widely by the Guaraní and throughout South America."
      },
      {
        id: 122,
        question: "Which European group had the most contact with the Guaraní during colonization?",
        options: [
          "Spanish Jesuit missionaries",
          "Portuguese traders",
          "British colonists",
          "French fur traders"
        ],
        answer: "Spanish Jesuit missionaries",
        difficulty: "medium",
        explanation: "Spanish Jesuit missionaries had significant contact with the Guaraní during the colonial period."
      },
      {
        id: 123,
        question: "How did the Jesuit missions impact the Guaraní?",
        options: [
          "They were converted to Christianity and settled in missions",
          "They were driven into the forests",
          "They successfully resisted European influence",
          "They adopted Islam"
        ],
        answer: "They were converted to Christianity and settled in missions",
        difficulty: "medium",
        explanation: "The Jesuit missions aimed to convert the Guaraní to Christianity and led to their settlement in missions."
      },
      {
        id: 124,
        question: "What is the significance of the Guaraní in Paraguay today?",
        options: [
          "Their language is one of the official languages",
          "They have no impact on modern society",
          "They live only in remote areas",
          "Their traditions are banned"
        ],
        answer: "Their language is one of the official languages",
        explanation: "The Guaraní language is recognized as one of Paraguay's official languages, highlighting their cultural influence and contributions to national identity.",
        difficulty: "Easy"
      },
      {
        id: 125,
        question: "What is the Guaraní view of the 'Land Without Evil'?",
        options: [
          "It is a sacred concept of an ideal, peaceful land",
          "It refers to the cities built by Europeans",
          "It is a mythical tale from the Spanish",
          "It is a term for their agricultural lands"
        ],
        answer: "It is a sacred concept of an ideal, peaceful land",
        explanation: "The 'Land Without Evil' represents a spiritual aspiration for the Guaraní people, symbolizing a place of peace and harmony.",
        difficulty: "Medium"
      },
      {
        id: 126,
        question: "How did modern development projects, like the Itaipu Dam, impact the Guaraní?",
        options: [
          "They were displaced from their ancestral lands",
          "They benefited financially",
          "They gained more land",
          "Their culture remained unaffected"
        ],
        answer: "They were displaced from their ancestral lands",
        explanation: "The construction of the Itaipu Dam led to significant displacement of the Guaraní people, affecting their access to traditional lands and resources.",
        difficulty: "Hard"
      },
      {
        id: 127,
        question: "Where do the Guna people primarily live?",
        options: [
          "Panama and Colombia",
          "Brazil",
          "Mexico",
          "Venezuela"
        ],
        answer: "Panama and Colombia",
        explanation: "The Guna people mainly inhabit the Guna Yala region, located along the Caribbean coasts of Panama and Colombia.",
        difficulty: "Easy"
      },
      {
        id: 128,
        question: "What is the traditional Guna dress for women called?",
        options: [
          "Mola",
          "Kimono",
          "Poncho",
          "Sarong"
        ],
        answer: "Mola",
        explanation: "Mola is a traditional garment worn by Guna women, characterized by intricate designs and vibrant colors, reflecting their cultural heritage.",
        difficulty: "Medium"
      },
      {
        id: 129,
        question: "What is the Guna's traditional economic activity?",
        options: [
          "Fishing and agriculture",
          "Mining",
          "Cattle herding",
          "Industrial manufacturing"
        ],
        answer: "Fishing and agriculture",
        explanation: "Fishing and agriculture are central to the Guna economy, supporting their livelihoods and cultural practices.",
        difficulty: "Easy"
      },
      {
        id: 130,
        question: "What is a significant cultural practice among the Guna?",
        options: [
          "Matriarchal social structure",
          "Patriarchal leadership",
          "Kingdom-based governance",
          "Egalitarian society"
        ],
        answer: "Matriarchal social structure",
        explanation: "The Guna society is known for its matriarchal structure, where women play key roles in social and economic decisions.",
        difficulty: "Medium"
      },
      {
        id: 131,
        question: "How do the Guna people view their connection to the environment?",
        options: [
          "They have a strong belief in preserving nature",
          "They focus on deforestation for agriculture",
          "They promote urbanization",
          "They emphasize industrial development"
        ],
        answer: "They have a strong belief in preserving nature",
        explanation: "The Guna people prioritize environmental conservation, recognizing the importance of nature in their cultural identity and sustainability.",
        difficulty: "Hard"
      },
      {
        id: 132,
        question: "What is the Guna form of self-governance?",
        options: [
          "Congreso General Kuna",
          "Council of Elders",
          "Chiefdom",
          "Democratic Republic"
        ],
        answer: "Congreso General Kuna",
        explanation: "The Congreso General Kuna is the governing body that represents the Guna people, allowing them to maintain autonomy and self-determination.",
        difficulty: "Medium"
      },
      {
        id: 133,
        question: "What is the name of the semi-autonomous territory where the Guna live?",
        options: [
          "Guna Yala",
          "Guna Land",
          "Yala Country",
          "Guna Nation"
        ],
        answer: "Guna Yala",
        explanation: "Guna Yala is a semi-autonomous region in Panama where the Guna people have established their own governance and cultural practices.",
        difficulty: "Easy"
      },
      {
        id: 134,
        question: "What is the primary religion of the Guna?",
        options: [
          "A mix of Christianity and traditional beliefs",
          "Hinduism",
          "Buddhism",
          "Islam"
        ],
        answer: "A mix of Christianity and traditional beliefs",
        explanation: "The Guna people practice a blend of Christianity and their traditional beliefs, reflecting their cultural identity and history.",
        difficulty: "Medium"
      },
      {
        id: 135,
        question: "Which event led to the Guna Revolution of 1925?",
        options: [
          "Efforts to assimilate them into Panamanian culture",
          "Land disputes with neighboring tribes",
          "Civil war within the community",
          "Economic issues with trade"
        ],
        answer: "Efforts to assimilate them into Panamanian culture",
        explanation: "The Guna Revolution of 1925 was a response to attempts by the Panamanian government to assimilate the Guna people into the dominant culture.",
        difficulty: "Hard"
      },
      {
        id: 136,
        question: "What threat does the Guna community face due to climate change?",
        options: [
          "Rising sea levels affecting their islands",
          "Desertification",
          "Deforestation",
          "Decreased snowfall"
        ],
        answer: "Rising sea levels affecting their islands",
        explanation: "Climate change poses a significant threat to the Guna community as rising sea levels threaten their coastal territories.",
        difficulty: "Hard"
      },
      {
        id: 137,
        question: "Where do the Hmong people primarily live?",
        options: [
          "Southeast Asia, including Laos, Vietnam, and Thailand",
          "Southern Africa",
          "South America",
          "Western Europe"
        ],
        answer: "Southeast Asia, including Laos, Vietnam, and Thailand",
        explanation: "The Hmong people primarily reside in Southeast Asia, particularly in mountainous regions of Laos, Vietnam, and Thailand.",
        difficulty: "Easy"
      },
      {
        id: 138,
        question: "What was a significant event that caused many Hmong people to flee Laos?",
        options: [
          "The Vietnam War and its aftermath",
          "Famine",
          "Economic collapse",
          "Religious persecution"
        ],
        answer: "The Vietnam War and its aftermath",
        explanation: "The Vietnam War led to significant upheaval in Laos, causing many Hmong people to flee to escape violence and persecution.",
        difficulty: "Medium"
      },
      {
        id: 139,
        question: "What is the traditional Hmong clothing worn during ceremonies?",
        options: [
          "Colorful embroidered garments",
          "White robes",
          "Feathered headgear",
          "Leather tunics"
        ],
        answer: "Colorful embroidered garments",
        explanation: "Hmong traditional clothing, known for its vibrant colors and intricate embroidery, is especially worn during cultural ceremonies.",
        difficulty: "Medium"
      },
      {
        id: 140,
        question: "Which art form is highly valued in Hmong culture?",
        options: [
          "Embroidery and textile art",
          "Stone carving",
          "Metalworking",
          "Woodworking"
        ],
        answer: "Embroidery and textile art",
        explanation: "Embroidery is a highly regarded art form in Hmong culture, often used to convey stories and cultural identity.",
        difficulty: "Medium"
      },
      {
        id: 141,
        question: "What is the Hmong New Year celebration known for?",
        options: [
          "Cultural performances, music, and ball tossing",
          "Religious sacrifices",
          "Horse racing",
          "Boat parades"
        ],
        answer: "Cultural performances, music, and ball tossing",
        explanation: "The Hmong New Year celebration features traditional music, dance performances, and the ball-tossing game, which is central to the festivities.",
        difficulty: "Easy"
      },
      {
        id: 142,
        question: "What type of social structure do the Hmong follow?",
        options: [
          "Clans and extended families",
          "Monarchy",
          "Caste system",
          "Democratic governance"
        ],
        answer: "Clans and extended families",
        explanation: "The Hmong social structure is organized around clans, which play a crucial role in family connections and community support.",
        difficulty: "Medium"
      },
      {
        id: 143,
        question: "What are Hmong shamanic practices centered on?",
        options: [
          "Healing and communication with spirits",
          "Astronomy",
          "Agricultural rituals",
          "Military training"
        ],
        answer: "Healing and communication with spirits",
        explanation: "Hmong shamanic practices focus on healing and maintaining a connection with the spirit world, reflecting their beliefs and traditions.",
        difficulty: "Medium"
      },
      {
        id: 144,
        question: "How did the Hmong people become involved in the Vietnam War?",
        options: [
          "They were recruited by the CIA to fight the Pathet Lao",
          "They declared independence",
          "They invaded South Vietnam",
          "They led anti-colonial uprisings"
        ],
        answer: "They were recruited by the CIA to fight the Pathet Lao",
        explanation: "The Hmong were recruited by the CIA during the Vietnam War to fight against the communist Pathet Lao, leading to significant consequences for their community.",
        difficulty: "Hard"
      },
      {
        id: 145,
        question: "What is the Hmong staple food?",
        options: [
          "Rice",
          "Corn",
          "Potatoes",
          "Wheat"
        ],
        answer: "Rice",
        explanation: "Rice is a staple food for the Hmong, playing a central role in their diet and agricultural practices.",
        difficulty: "Easy"
      },
      {
        id: 146,
        question: "What challenge does the Hmong diaspora face in their new countries?",
        options: [
          "Cultural assimilation and preservation of traditions",
          "Access to food resources",
          "Lack of water",
          "Extreme weather"
        ],
        answer: "Cultural assimilation and preservation of traditions",
        explanation: "The Hmong diaspora often struggles with cultural assimilation in their new countries while striving to preserve their traditions and identity.",
        difficulty: "Medium"
      }
];

export default quizData;
  