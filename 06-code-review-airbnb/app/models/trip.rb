class Trip
    attr_reader :listing, :guest
    # belongs to listing
    # belongs to guest

    @@all = []
    
    def initialize(guest, listing)
        @guest = guest
        @listing = listing
        @@all << self
    end

    # class methods
    def self.all
        @@all
    end




end