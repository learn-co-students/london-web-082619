class Doctor

  attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def patients
        Patient.all.select{ |p| p.doctor == self }
    end

    def self.all
        @@all
    end

end
