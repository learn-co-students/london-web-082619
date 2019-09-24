class Pet < ApplicationRecord
  belongs_to :user
  # Set up some validation for a pet's name attribute. We pass key value pairs to establish what exactly we're validating it against
  validates :name, {
    # A pet must have a name, it cannot be nil
    presence: true,
    # A pet cannot have a name that's identical to the name of any other instance of pet already in our database
    uniqueness: true,
    # A pet's name must be at least 2 characters long and no more than 20
    length: { in: 2..20 }
  }
  # Validate our instance of pet using a custom validation method that we have built
  validate :unlucky?

  private

  # A custom validation method. Here, we check if a pet's name is exactly 13 characters long. If it is, we add an appropriate error to the pet. When an instance contains at least one error, it is considered invalid
  def unlucky?
    if self.name.length == 13
      self.errors.add(:name, "Your name can't be 13 characters long! That's unlucky!!!!!!!")
    end
  end

end
