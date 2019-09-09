class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :profession
      t.integer :life_expectancy
      t.integer :num_of_appointments, default: 0
    end
  end
end
