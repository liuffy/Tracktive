# change this shit

namespace :movies do
  desc 'Populate my database with so many movies'
  task populate: :environment do

    log= ActiveSupport::Logger.new('log/movies_populate.log')
    start_time = Time.now
    log.info 'Task started at #{start_time}'

  top_246 = ["The Shawshank Redemption", "The Godfather", "The Godfather: Part II", "The Dark Knight", "12 Angry Men", "Schindler's List", "Pulp Fiction", "The Lord of the Rings: The Return of the King", "The Good, the Bad and the Ugly", "Fight Club", "The Lord of the Rings: The Fellowship of the Ring", "Star Wars: Episode V - The Empire Strikes Back", "Forrest Gump", "Inception", "The Lord of the Rings: The Two Towers", "One Flew Over the Cuckoo's Nest", "Goodfellas", "The Matrix", "Seven Samurai", "Star Wars: Episode IV - A New Hope", "City of God", "Se7en", "The Silence of the Lambs", "It's a Wonderful Life", "The Usual Suspects", "Léon: The Professional", "Spirited Away", "Saving Private Ryan", "Once Upon a Time in the West", "American History X", "Interstellar", "Casablanca", "Psycho", "City Lights", "Raiders of the Lost Ark", "The Green Mile", "The Intouchables", "Modern Times", "Rear Window", "Terminator 2: Judgment Day", "The Departed", "The Pianist", "Back to the Future", "Whiplash", "Gladiator", "Memento", "Apocalypse Now", "The Prestige", "The Lion King", "Alien", "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "Sunset Boulevard", "The Great Dictator", "The Lives of Others", "Cinema Paradiso", "Paths of Glory", "Django Unchained", "The Shining", "Grave of the Fireflies", "WALL E", "The Dark Knight Rises", "American Beauty", "Princess Mononoke", "Aliens", "Oldboy", "Once Upon a Time in America", "Citizen Kane", "Das Boot", "Witness for the Prosecution", "North by Northwest", "Vertigo", "Star Wars: Episode VI - Return of the Jedi", "Reservoir Dogs", "Braveheart", "Requiem for a Dream", "Like Stars on Earth", "My Father and My Son", "A Clockwork Orange", "Taxi Driver", "Double Indemnity", "Lawrence of Arabia", "To Kill a Mockingbird", "Toy Story 3", "Eternal Sunshine of the Spotless Mind", "Andaz Apna Apna", "Amadeus", "Full Metal Jacket", "The Sting", "2001: A Space Odyssey", "Bicycle Thieves", "Toy Story", "Snatch", "Singin' in the Rain", "Inglourious Basterds", "The Kid", "Monty Python and the Holy Grail", "L.A. Confidential", "For a Few Dollars More", "3 Idiots", "Rashomon", "The Apartment", "Scarface", "Indiana Jones and the Last Crusade", "A Separation", "Metropolis", "The Hunt", "Good Will Hunting", "All About Eve", "Yojimbo", "Batman Begins", "The Treasure of the Sierra Madre", "Some Like It Hot", "Unforgiven", "The Third Man", "Downfall", "Raging Bull", "Die Hard", "Children of Heaven", "The Great Escape", "Heat", "Chinatown", "Inside Out", "Pan's Labyrinth", "On the Waterfront", "My Neighbor Totoro", "Room", "Ikiru", "Ran", "The Gold Rush", "The Bridge on the River Kwai", "Mr. Smith Goes to Washington", "The Secret in Their Eyes", "Blade Runner", "The Seventh Seal", "Lock, Stock and Two Smoking Barrels", "Howl's Moving Castle", "Casino", "Judgment at Nuremberg", "The Passion of Joan of Arc", "Wild Strawberries", "The General", "The Elephant Man", "A Beautiful Mind", "Warrior", "The Wolf of Wall Street", "V for Vendetta", "Incendies", "Gran Torino", "The Big Lebowski", "Tokyo Story", "The Deer Hunter", "Dial M for Murder", "Trainspotting", "Gone with the Wind", "Fargo", "Rebecca", "Finding Nemo", "Cool Hand Luke", "The Sixth Sense", "How to Train Your Dragon", "The Thing", "Star Wars: The Force Awakens", "No Country for Old Men", "Into the Wild", "Kill Bill: Vol. 1", "Mary and Max", "Gone Girl", "Come and See", "There Will Be Blood", "It Happened One Night", "Life of Brian", "Rush", "The Message", "Hotel Rwanda", "Platoon", "The Nights of Cabiria", "Network", "The Wages of Fear", "Shutter Island", "Spotlight", "The Maltese Falcon", "Butch Cassidy and the Sundance Kid", "Stand by Me", "Mad Max: Fury Road", "In the Name of the Father", "The 400 Blows", "Wild Tales", "12 Years a Slave", "Persona", "Ben-Hur", "The Grand Budapest Hotel", "Amores Perros", "Million Dollar Baby", "The Princess Bride", "Jurassic Park", "Hachi: A Dog's Tale", "Touch of Evil", "The Grapes of Wrath", "Stalker", "Memories of Murder", "Zootopia", "Annie Hall", "The Truman Show", "Before Sunrise", "Gandhi", "The Bourne Ultimatum", "Diabolique", "Rocky", "Harry Potter and the Deathly Hallows: Part 2", "Monsters, Inc.", "The Wizard of Oz", "The Terminator", "Groundhog Day", "Twelve Monkeys", "Prisoners", "Jaws", "The Best Years of Our Lives", "Infernal Affairs", "La Haine", "Barry Lyndon", "Catch Me If You Can", "Strangers on a Train", "Sin City", "The Battle of Algiers", "Dog Day Afternoon", "Gangs of Wasseypur", "The Revenant", "Pirates of the Caribbean: The Curse of the Black Pearl", "The Help", "The Imitation Game", "Ip Man", "Song of the Sea", "Deadpool", "The Martian", "Castle in the Sky", "A Fistful of Dollars", "Roman Holiday", "Guardians of the Galaxy", "Fanny and Alexander", "The King's Speech", "The Avengers"]

  top_246.each do |film|
    search = film.gsub!(/é/, 'e')
    search = film.gsub(/ /, '+')
    movie = HTTParty.get('http://www.omdbapi.com/?', query:{'t': film})
    movie_url = HTTParty.get("https://www.googleapis.com/youtube/v3/search?part=Snippet&maxResults=1&order=relevance&q='#{search}'+trailer&key=AIzaSyDSRJvulcZB4E5ktfl2HzEXJWe71XnUDu0")
    movie_url = movie_url['items'][0]['id']['videoId']
    packaged_movies = PackageMovies.new(movie, movie_url)
    packaged_movies.create_movie
  end
    end_time = Time.now
    duration = (start_time - end_time) / 1.minute
    log.info "Task finished at #{end_time} and lasted #{duration} minutes."
    log.close
  end
end