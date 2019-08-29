class Patient

  attr_reader :name, :doctor

    @@all = []

    def initialize(name, doctor)
        @name = name
        @doctor = doctor
        @@all << self
    end

    def self.all
        @@all
    end

end
