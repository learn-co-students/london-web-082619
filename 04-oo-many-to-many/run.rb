require_relative "./doctor"
require_relative "./patient"

require 'pry'

Doctor.new('sam')
Doctor.new('dan')
Doctor.new('joe')

Patient.new('sarah')
Patient.new('jo')
Patient.new('mani')
Patient.new('ian')
Patient.new('charly')

binding.pry
"start"
