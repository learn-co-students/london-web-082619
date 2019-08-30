class Appointment

    attr_reader :patient, :doctor, :date, :time, :duration, :location

    @@all = []

    def initialize(patient, doctor, date, time, duration, location)
        @patient = patient
        @doctor = doctor
        @date = date
        @time = time
        @duration = duration
        @location = location
        @@all << self
    end

    def self.all
        @@all
    end
end