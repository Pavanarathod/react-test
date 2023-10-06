const cityNames: string[] = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Indianapolis",
  "San Francisco",
];

function generateRandomDescription(): string {
  const descriptions: string[] = [
    "beautiful city",
    "vibrant metropolis",
    "amazing place to visit",
    "cultural hub",
    "cosmopolitan center",
    "city of dreams",
    "thriving community",
    "urban paradise",
    "destination for travelers",
    "wonderful metropolis",
    "historic city",
    "modern urban area",
  ];

  const numberOfWords: number = Math.floor(Math.random() * 2) + 2;
  const randomDescription: string[] = [];

  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex: number = Math.floor(Math.random() * descriptions.length);
    randomDescription.push(descriptions[randomIndex]);
  }

  return randomDescription.join(" ");
}

const citiesWithDescriptions: { cityName: string; description: string }[] =
  cityNames.map((cityName: string) => ({
    cityName,
    description: generateRandomDescription(),
  }));

export default citiesWithDescriptions;
