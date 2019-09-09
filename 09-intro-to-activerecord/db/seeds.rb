therapists = Therapist.create(
    [
        {name: 'jo', specialism: 'rabbits', price: 100},
        {name: 'wachira', specialism: 'robotics', price: 300}
    ]
)

puts "#{therapists.length} tharepists created"

patients = Patient.create(
    [
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample },
        { name: 'another', life_expectancy: 50, profession: 'student', therapist: therapists.sample }
    ]
)


puts "#{patients.length} patients created"