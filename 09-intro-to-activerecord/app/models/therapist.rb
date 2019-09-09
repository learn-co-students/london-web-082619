class Therapist < ActiveRecord::Base
    # has_many(:appointments)
    # has_many(:patients, { through: :appointments })
    has_many :patients

    def have_appointment(p)
        p.num_of_appointments += 1
        # p.savings -= self.price
        p.save
    end
end