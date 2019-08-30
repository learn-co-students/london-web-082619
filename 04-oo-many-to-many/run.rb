require_relative "./doctor"
require_relative "./patient"
require_relative "./appointment"

require 'pry'

Doctor.new('sam')
Doctor.new('dan')
Doctor.new('joe')

Patient.new('sarah')
Patient.new('jo')
Patient.new('mani')
Patient.new('ian')
Patient.new('charly')

dates = ['Monday', 'Tue', 'Wed','thur']
times = ['morning', 'afternoon']
location = ['the hospital', 'the gps office', 'video call', 'phone call', 'home visit']

def rand_duration
    (1..100).to_a.sample
end

100.times do |i|

    Appointment.new(Patient.all.sample, Doctor.all.sample, dates.sample, times.sample, rand_duration, location.sample)

end

binding.pry
"start"
