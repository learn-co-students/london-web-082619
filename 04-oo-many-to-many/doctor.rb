class Doctor

  attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def appointments
        Appointment.all.select { |a| a.doctor == self }
    end

    def num_appointments
        appointments.length
    end

    def self.busiest
        self.all.max_by {|doctor| doctor.num_appointments}
    end

    def patients
        appointments.map{ |a| a.patient }.uniq
    end

    def self.all
        @@all
    end

end
