# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"


disney=Category.create(name: "Disney")
hiking=Category.create(name: "Hiking")
skiing=Category.create(name: "Skiing")
seahawks=Category.create(name: "Seahawks")

disney.cards.create(question: "What was Andrews first favorite Disney movie?", answer1: "Big Hero 6", answer2: "Cinderella", answer3: "Fox and The Hound", correct_answer: "Aladdin", points: 100)
disney.cards.create(question: "Who sees the line where the sky meets the sea?", answer1: "Tarzan", answer2: "Ariel", answer3: "Jack Sparrow", correct_answer: "Moana", points: 200)
disney.cards.create(question: "What animated Disney movie was the latest to become live action?", answer1: "Toy Story", answer2: "Cinderella", answer3: "Lion King", correct_answer: "Mulan", points: 300)
disney.cards.create(question: "What does Flynn get hit with in the head in Tangled?", answer1: "Hand", answer2: "Golden Spoon", answer3: "He doesn't get hit", correct_answer: "Fry Pan", points: 400)

hiking.cards.create(question: "What is the longest hiking trail in the US?", answer1: "LCT", answer2: "AT", answer3: "PCT", correct_answer: "CDT", points: 100)
hiking.cards.create(question: "What does PCT stand for?", answer1: "Please Call Tim", answer2: "Paved California Trail", answer3: "Pacific Coast Trail", correct_answer: "Pacific Crest Trail", points: 200)
hiking.cards.create(question: "What is the least amount of weight hiking called?", answer1: "Minimalist", answer2: "Naked Hiking", answer3: "The Lightest", correct_answer: "Ultralight", points: 300)
hiking.cards.create(question: "What trail did Andrew thru hike in 2017?", answer1: "Applachian Trail", answer2: "Lost Coast Trail", answer3: "He didn't hike", correct_answer: "Pacific Crest Trail", points: 400)

skiing.cards.create(question: "Whats the beginners term for braking?", answer1: "Braking", answer2: "Stopping", answer3: "French Fries", correct_answer: "Pizza", points: 100)
skiing.cards.create(question: "What gets you from the bottom of the hill to the top?", answer1: "Planes", answer2: "You only ski the bunny hill", answer3: "Hiking", correct_answer: "Chairlift", points: 200)
skiing.cards.create(question: "What has to be said before jumping to make sure you dont hit anyone?", answer1: "Send It!", answer2: "Here I Come!", answer3: "I'm Tanner Hall!", correct_answer: "Drop In!", points: 300)
skiing.cards.create(question: "What is one thing you dont do in your ski clothes?", answer1: "I dont wear clothes", answer2: "Dance", answer3: "Jump", correct_answer: "Fart", points: 400)

seahawks.cards.create(question: "What was the first season for the Seahawks as a franchise?", answer1: "1943", answer2: "1992", answer3: "1981", correct_answer: "1976", points: 100)
seahawks.cards.create(question: "Who is Andrews favorite player?", answer1: "Russell Wilson", answer2: "Tyler Lockett", answer3: "Shaun Alexander", correct_answer: "DK Metcalf", points: 200)
seahawks.cards.create(question: "Who was the first player ever traded?", answer1: "Robin Sloan", answer2: "Tony Dungee", answer3: "Matt Hasselbeck", correct_answer: "Steve Largent", points: 300)
seahawks.cards.create(question: "Who is the current head coach?", answer1: "Shaq", answer2: "Tom Brady", answer3: "Mike Alstott", correct_answer: "Pete Carroll", points: 400)

puts "seeded"