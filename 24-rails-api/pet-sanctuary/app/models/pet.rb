class Pet < ApplicationRecord
  belongs_to :user

  validates :name, {
    presence: true,
    uniqueness: true,
    length: { in: 2..20 }
  }

  validate :unlucky?

  def unlucky?
    if self.name.length == 13
      self.errors.add(:name, "can't be 13 characters long! That's bad luck!")
    end
  end

end
