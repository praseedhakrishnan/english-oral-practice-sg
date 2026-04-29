const passages = [
  {
    id: 1,
    title: "The Kampong Spirit",
    level: "P4",
    topic: "Community",
    text: "Long ago, Singapore was made up of small villages called kampongs. The people who lived there were very close to one another. They helped each other during difficult times and celebrated together during festivals. Children played freely in the open fields and looked out for one another. Although kampongs no longer exist in modern Singapore, the kampong spirit lives on. We can see it when neighbours help an elderly person carry their groceries, or when schoolmates look out for a friend who is feeling sad. The kampong spirit reminds us that a caring community is built on kindness, trust, and togetherness. We should all do our part to keep this wonderful spirit alive in our everyday lives."
  },
  {
    id: 2,
    title: "Keeping Singapore Green",
    level: "P4",
    topic: "Environment",
    text: "Singapore is known as a City in a Garden. The government and its people work hard to keep Singapore green and clean. Parks, nature reserves, and rooftop gardens can be found all around the island. Schools teach students about the importance of caring for the environment. Simple actions such as recycling, saving water, and planting trees can make a big difference. Every year, volunteers take part in clean-up activities along beaches and parks. These efforts help protect the wildlife and keep our surroundings beautiful. By working together, Singaporeans show the world that a small city can still have a big heart for nature. Let us all play our part in preserving Singapore's natural beauty for future generations."
  },
  {
    id: 3,
    title: "The Magic of Libraries",
    level: "P4",
    topic: "Technology",
    text: "Libraries are magical places where knowledge lives. In Singapore, the National Library Board runs many public libraries across the island, welcoming readers of all ages. When you step inside a library, you can find thousands of books on every topic imaginable — from exciting adventure stories to fascinating books about science and history. Libraries also offer more than just books. You can borrow e-books, watch documentaries, and attend workshops. Best of all, everything is free with a library membership card. Reading regularly helps improve our vocabulary and understanding of the world. It also sparks our imagination and creativity. Whether you enjoy stories about faraway lands or want to learn something new, the library has something for everyone. Start your next adventure by visiting your nearest library today!"
  },
  {
    id: 4,
    title: "The Importance of a Balanced Diet",
    level: "P5",
    topic: "Healthy Living",
    text: "Eating well is one of the most important things we can do for our health. A balanced diet includes a variety of foods from different food groups: carbohydrates for energy, proteins to build muscles, vitamins and minerals from fruits and vegetables, and healthy fats. In Singapore, the Health Promotion Board recommends filling half your plate with fruits and vegetables at every meal. Eating too much sugar, salt, or unhealthy fats can lead to serious health problems like obesity, diabetes, and heart disease. These conditions are becoming more common among young people today. Making healthy choices at hawker centres is easier than many think — choosing brown rice, eating more vegetables, and drinking water instead of sugary drinks are simple steps everyone can take. Good eating habits formed in childhood often last a lifetime."
  },
  {
    id: 5,
    title: "Technology in Our Daily Lives",
    level: "P5",
    topic: "Technology",
    text: "Technology has transformed the way we live, work, and learn. In Singapore, almost everyone owns a smartphone, and many homes have fast internet connections. Students use tablets and computers for learning, while parents rely on apps to manage their schedules and communicate with teachers. Artificial intelligence is being used in hospitals to diagnose diseases more accurately, and self-checkout machines have changed the way we shop. While technology brings many conveniences, it also comes with challenges. Too much screen time can affect our health and relationships. It is important to use technology wisely and responsibly. Setting screen time limits, taking breaks from devices, and making time for face-to-face conversations are good habits to develop. Technology is a powerful tool — how we use it makes all the difference."
  },
  {
    id: 6,
    title: "The Role of Volunteers",
    level: "P5",
    topic: "Community",
    text: "Volunteers play a vital role in building a caring and inclusive society. In Singapore, thousands of people give their time and skills to help others every year. They work at food banks, assist the elderly, tutor underprivileged children, and support people with disabilities. Volunteering is not just about helping others — it also benefits the volunteer. Studies show that people who volunteer regularly feel happier and more connected to their community. Schools in Singapore encourage students to take part in community service as part of the Values in Action programme. By serving others, students learn empathy, responsibility, and the importance of giving back. No matter how young or how busy we are, we can all find a way to contribute. Even small acts of kindness, like helping a classmate or visiting a lonely neighbour, can make a real difference."
  },
  {
    id: 7,
    title: "Singapore's Hawker Culture",
    level: "P5",
    topic: "Singapore Culture",
    text: "Hawker centres are the heart and soul of Singapore's food culture. These open-air food markets bring together people from all walks of life, united by their love of good food. From fragrant chicken rice to spicy laksa, crispy roti prata to sweet ice kachang, the variety is endless and the prices are affordable. In 2020, Singapore's hawker culture was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. This recognition celebrated not just the food, but the way hawker centres bring communities together. Hawker stalls are often passed down through generations, with children learning treasured recipes from their parents and grandparents. As Singapore modernises, efforts are being made to attract young hawkerpreneurs to carry on this beloved tradition. Hawker culture is truly a unique and precious part of Singapore's identity."
  },
  {
    id: 8,
    title: "The Power of Perseverance",
    level: "P6",
    topic: "Family",
    text: "Perseverance means continuing to work hard even when things are difficult. Throughout history, many great achievements have come from people who refused to give up despite facing enormous challenges. Thomas Edison failed more than a thousand times before successfully inventing the light bulb. He famously said that he had not failed, but had simply found a thousand ways that did not work. In Singapore, many families have overcome poverty and hardship through sheer determination and hard work. Our grandparents' generation built this nation from scratch, often working long hours with very little reward. Their perseverance laid the foundation for the comfortable lives we enjoy today. When we face difficulties in our own lives — whether in our studies, friendships, or personal goals — we should remember their example and push forward with courage and resilience."
  },
  {
    id: 9,
    title: "Climate Change and Our Future",
    level: "P6",
    topic: "Environment",
    text: "Climate change is one of the greatest challenges facing our planet today. Rising temperatures, melting ice caps, and more frequent extreme weather events are signs that our Earth is warming at an alarming rate. Scientists agree that human activities, particularly the burning of fossil fuels, are the main cause of this crisis. Small island nations like Singapore are especially vulnerable to rising sea levels. The Singapore government has invested heavily in coastal protection measures and green energy solutions, including solar panels and green buildings. As individuals, we can also take meaningful action by reducing our carbon footprint — using public transport, conserving electricity, eating less meat, and choosing products with less packaging. Climate change may seem like an overwhelming problem, but when governments, businesses, and individuals work together, meaningful change is possible. The decisions we make today will shape the world our children and grandchildren will inherit."
  },
  {
    id: 10,
    title: "The Future of Artificial Intelligence",
    level: "P6",
    topic: "Technology",
    text: "Artificial intelligence, or AI, is rapidly changing the world around us. AI systems can now write stories, compose music, diagnose diseases, drive cars, and hold conversations that feel remarkably human. In Singapore, AI is being used in education to personalise learning for each student, in healthcare to detect cancer earlier, and in public services to make government more efficient. While these advances are exciting, they also raise important questions. Will AI replace human workers and cause unemployment? Can we trust AI to make fair and unbiased decisions? How do we ensure that the benefits of AI are shared equally? These are questions that scientists, governments, and citizens around the world must grapple with together. One thing is certain: the young people of today will need strong critical thinking, creativity, and digital literacy skills to navigate a world increasingly shaped by artificial intelligence."
  },
]

export default passages
