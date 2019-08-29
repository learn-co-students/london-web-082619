# To run this file and see how the code works, type "ruby run.rb" in the
# terminal whilst you are inside this project directory

# require_relative is used to import code written in other ruby files into another file
require_relative "./cohort"
require_relative "./student"
# require is used to import ruby gems or modules included in the core ruby code library but not loaded by default, such as pry
require 'pry'

# One To Many Relationship:
# A STUDENT belongs to a COHORT
# A COHORT has many STUDENTS
# These are two ways of describing the same one to many relationship
# The One class is always the class that another class belongs to, or the class that has many of another class, in this case Cohort

# Cohort is the "One Class", so we need to create instances of it first
# so we can use variable references to it when we create instances of the
# "Many Class", in this case Students
cohort1 = Cohort.new("London-Web-082619")
cohort2 = Cohort.new("London-Web- 123455")

# Student is the "Many Class", so we need to pass in reference variables that point to the instance of the Cohort class each student belongs to
mike = Student.new("Mike", 35, cohort1)
angus = Student.new("Angus", 27, cohort1)
ian = Student.new("Ian", 35, cohort2)

# NOTE: The instance of a cohort class is not stored in the student instance, only the reference to it, so only have objects stored in one place within our classes, making them easier to manage

# if binding.pry is the last line of code in a method or file, it will not
# run, so if it is you need to put an extra line of anything after it for it
# for it to start. a string is normally the safest way of doing this as you
# don't run the risk of causing an unforeseen error and stopping the program
# from running
binding.pry
"start"
