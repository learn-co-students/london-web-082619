require_relative "./doctor"
require_relative "./patient"

require 'pry'

Doctor.new('sam')
Doctor.new('dan')
Doctor.new('joe')

Patient.new('sarah', Doctor.all.sample)
Patient.new('jo', Doctor.all.sample)
Patient.new('mani', Doctor.all.sample)
Patient.new('ian', Doctor.all.sample)
Patient.new('charly', Doctor.all.sample)

binding.pry
"start"
