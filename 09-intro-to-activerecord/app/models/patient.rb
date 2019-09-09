class Patient < ActiveRecord::Base
    belongs_to :therapist
end