class Lifter
  # has many memberships
  # has many gyms through memberships
  attr_reader :name, :lift_total

  @@all = []

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total
    @@all << self
  end

  def self.all
    @@all
  end

  def memberships
    Membership.all.select { |membership| membership.lifter == self }
  end

  def gyms
    self.memberships.map { |membership| membership.gym }
  end

  def self.average_lift_total
    @@all.sum {|lifter| lifter.lift_total }.to_f/@@all.length.to_f
  end

  def total_gym_cost
    self.memberships.sum { |membership| membership.cost }
  end

  def add_gym(gym, cost)
    Membership.new(gym, self, cost)
  end

end
