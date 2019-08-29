class Cohort

  attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    # To find all the students that belong to a particular class, we
    # need to define an instance method that we will call on an instance f the cohort class.
    # Inside this instance method, self refers to the instance of the class
    # that we are calling the method on e.g for cohort1.students, self refers
    # to cohort1
    # select is an iterator method that we can call on any array.
    # In this instance, we can call it on the array of all students stored
    # in Student.all, because we have access to the student class within our
    # Cohort class via loading the files into the run file with require_relative.
    # Here, select will go through each element in the student array, and for
    # each individual student, check whether the cohort instance variable of
    # that student refers to the instance of the cohort class it was called
    # on e.g cohort1, and if it does put them in a new array, which it will
    # return to us once it has finished iterating over the students array

    def students
      Student.all.select{|student| student.cohort == self }
    end
end
