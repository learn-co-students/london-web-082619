require 'pry'

number = 3

string = 'hello'

object = Object.new

# puts object.methods

names = [
    'abdullah',
    'mike',
    'louis',
    'jeremy',
    'boris'
]

class Cohort

    @@all = []

    def initialize(name, names_of_students = [])
        @name = name
        @names_of_students = names_of_students
        @@all << self
    end

    def name
        @name
    end

    def number_of_students
        @names_of_students.length
    end

    def add_student(name)
        @names_of_students << name
    end

    def self.all
        @@all
    end

end

mod1 = Cohort.new('london-082619')
mod2 = Cohort.new('london-0723410')
mod3 = Cohort.new('london-061219')
mod4 = Cohort.new('london-05135')

binding.pry