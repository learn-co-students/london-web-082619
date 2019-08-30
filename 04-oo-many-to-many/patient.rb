class Patient

  attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        Appointment.all.select {|appointment| appointment.patient == self }
    end

    def doctors
        appointments.map{|appointment| appointment.doctor}.uniq
    end

    def num_appointments
        appointments.length
    end

    def hypochondriac?
        num_appointments > 3
    end

    def self.hypochondriacs
        self.all.select{|p| p.hypochondriac?}
    end

end
