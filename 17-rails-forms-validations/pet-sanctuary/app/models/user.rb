class User < ApplicationRecord
  has_many :pets, dependent: :destroy

  # An example of using a regular expression or regex for validation. This regex defines the rules for an email address e.g. must have @ in it, must end in .something such as .com, etc.
  # validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/)

end
