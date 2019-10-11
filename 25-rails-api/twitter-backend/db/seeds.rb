# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dan = User.create({ username: 'dan'})

Tweet.create([
    { user: dan, content: 'the internet is terrifying' },
    { user: dan, content: 'i don\'t trust anyone on the internet' },
    { user: dan, content: 'i was nearly professional football player' }
])