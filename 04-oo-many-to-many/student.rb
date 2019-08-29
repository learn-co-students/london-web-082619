class Student

    attr_reader :name, :age, :cohort

    @@all = []

    # cohort will be a reference variable that refers to the instance of
    # the cohort class that the student belongs to, to create the
    # relationship between them

    def initialize(name, age, cohort)
      @name = name
      @age = age
      @cohort = cohort
      @@all << self
    end

    # in this method name, self refers to the class that we are working in at this
    # point. This is how we define a class method. To call this method
    # we need to use the class name in place of self e.g Student.all
    def self.all
      @@all
    end

end
