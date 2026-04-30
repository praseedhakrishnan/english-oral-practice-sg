const stimuli = [
  {
    id: 1,
    title: "Social Media and Young People",
    level: "P5",
    description: "The picture shows teenagers using smartphones and social media platforms.",
    imageDescription: "A group of teenagers sitting together at a table, but each one is looking at their phone screen instead of talking to each other. Speech bubbles show social media icons like hearts, likes, and comments.",
    illustrationType: "social_media",
    imageUrl: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What do you see in the picture?",
      "Do you think spending too much time on social media is harmful for young people? Why?",
      "How do you think social media can be used in a positive way?",
      "What would you say to a friend who is spending too much time on social media?"
    ]
  },
  {
    id: 2,
    title: "Healthy Living for Students",
    level: "P4",
    description: "The picture shows students making healthy food choices and exercising.",
    imageDescription: "A school canteen scene where students are choosing between healthy foods like salads, fruits, and water versus unhealthy options. Some students are seen exercising in the background.",
    illustrationType: "healthy_living",
    imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What is happening in the picture?",
      "Why is it important for students to eat healthily and exercise regularly?",
      "What healthy habits do you practise in your daily life?",
      "How can schools encourage students to live healthier lifestyles?"
    ]
  },
  {
    id: 3,
    title: "Caring for the Environment",
    level: "P4",
    description: "The picture shows people of different ages taking part in environmental activities.",
    imageDescription: "A beach clean-up event with families and school children collecting rubbish. Some people are planting trees nearby, and there are banners promoting recycling and environmental care.",
    illustrationType: "environment",
    imageUrl: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "Describe what you see in the picture.",
      "Why is it important to take care of our environment?",
      "What are some things you do at home or at school to protect the environment?",
      "What do you think will happen if we do not take care of our environment?"
    ]
  },
  {
    id: 4,
    title: "Helping Others in Need",
    level: "P5",
    description: "The picture shows volunteers helping people in the community.",
    imageDescription: "A community centre scene with young volunteers assisting elderly residents with their groceries, reading to them, and helping children with their homework. There are smiling faces all around.",
    illustrationType: "community",
    imageUrl: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What are the people in the picture doing?",
      "Why do you think volunteering and helping others is important?",
      "Have you ever helped someone who needed assistance? Tell me about it.",
      "How can young people like yourself contribute more to the community?"
    ]
  },
  {
    id: 5,
    title: "Technology in the Classroom",
    level: "P5",
    description: "The picture shows students using technology for learning in school.",
    imageDescription: "A modern classroom with students using tablets and laptops for learning. A teacher is using an interactive whiteboard. Some students are collaborating on a project using a shared screen.",
    illustrationType: "technology",
    imageUrl: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What do you notice in this classroom?",
      "What are the benefits of using technology for learning?",
      "Are there any disadvantages to using technology in the classroom? What are they?",
      "How has technology changed the way you learn compared to how your parents studied?"
    ]
  },
  {
    id: 6,
    title: "Family Togetherness",
    level: "P4",
    description: "The picture shows a multi-generational family spending quality time together.",
    imageDescription: "A Singaporean family with grandparents, parents, and children gathered around a dining table for a meal. They are laughing, sharing food, and enjoying each other's company. Traditional dishes are visible on the table.",
    illustrationType: "family",
    imageUrl: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "Describe what is happening in the picture.",
      "Why is it important to spend quality time with your family?",
      "What activities does your family enjoy doing together?",
      "How can busy families find time to spend together despite their hectic schedules?"
    ]
  },
  {
    id: 7,
    title: "School Life and Friendships",
    level: "P4",
    description: "The picture shows students working together and building friendships in school.",
    imageDescription: "A school setting where students of different races and backgrounds are working together on a group project. They are sharing ideas, helping each other, and looking happy and engaged.",
    illustrationType: "school",
    imageUrl: "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What can you see in the picture?",
      "Why is it important to have good friends in school?",
      "How can we be a good friend to our classmates?",
      "Tell me about a time when a friend helped you or you helped a friend."
    ]
  },
  {
    id: 8,
    title: "Food Waste in Singapore",
    level: "P6",
    description: "The picture shows the issue of food waste and efforts to reduce it.",
    imageDescription: "A split image showing one side with overflowing food waste bins and uneaten food being thrown away, and the other side showing people sharing food, composting, and donating surplus food to those in need.",
    illustrationType: "food_waste",
    imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What issue is being highlighted in the picture?",
      "Why do you think food waste is a serious problem in Singapore?",
      "What can individuals and families do to reduce food waste?",
      "Do you think the government should do more to tackle food waste? What measures would you suggest?"
    ]
  },
  {
    id: 9,
    title: "Mental Health and Well-being",
    level: "P6",
    description: "The picture shows the importance of mental health and seeking support.",
    imageDescription: "A comforting scene showing friends supporting each other — one friend listening attentively to another who looks stressed, with thought bubbles showing worries about exams and pressure. In the background, a counsellor's room is visible.",
    illustrationType: "mental_health",
    imageUrl: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "What do you see in the picture?",
      "Why do you think mental health is just as important as physical health?",
      "What are some ways young people can manage stress and take care of their mental well-being?",
      "What would you do if a friend confided in you that they were feeling very stressed or unhappy?"
    ]
  },
  {
    id: 10,
    title: "Singapore's Multicultural Society",
    level: "P6",
    description: "The picture shows Singapore's diverse and harmonious multicultural society.",
    imageDescription: "A vibrant street scene in Singapore showing people of different races — Chinese, Malay, Indian, and others — celebrating a festival together. Decorations from different cultures are visible, and people are sharing food and gifts with each other.",
    illustrationType: "multicultural",
    imageUrl: "https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=800",
    questions: [
      "Describe what you see in the picture.",
      "What makes Singapore's multicultural society special and unique?",
      "How do you think Singaporeans can continue to maintain racial and religious harmony?",
      "What have you personally learned from interacting with friends from different cultural backgrounds?"
    ]
  },
]

export default stimuli
