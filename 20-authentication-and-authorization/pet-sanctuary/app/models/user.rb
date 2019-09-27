class User < ApplicationRecord
  has_many :pets, dependent: :destroy
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/

  has_secure_password
end
