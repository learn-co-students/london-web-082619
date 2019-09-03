require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

jeremys_place = Listing.new('Jeremys', 'Istanbul')
sarahs_place = Listing.new('Sarahs', 'Australia')
manis_place = Listing.new('Manis', 'London')
hoots_place = Listing.new('Hoots', 'London')

wachira = Guest.new('Wachira')
sarah = Guest.new('Sarah')
louis = Guest.new('Louis')

trip1 = Trip.new(wachira, sarahs_place)
trip2 = Trip.new(louis, jeremys_place)
trip3 = Trip.new(wachira, hoots_place)
trip4 = Trip.new(sarah, sarahs_place)




Pry.start
