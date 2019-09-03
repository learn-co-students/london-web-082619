class Listing
    attr_reader :name, :city
    # has many trips
    # has many guests, through trips

    @@all = []

    def initialize(name, city)
        @name = name
        @city = city
        @@all << self
    end

    # instance methods

    def guests
        self.trips.map {|trip| trip.guest }
    end

    def trips
        Trip.all.select {|trip| trip.listing == self}
    end

    def trip_count
        trips.length
    end

    # class methods
    def self.all
        @@all
    end

    def self.find_all_by_city(city)
        @@all.select {|listing| listing.city == city }
    end

    def self.most_popular
        @@all.max_by {|listing| listing.trip_count }
    end

end