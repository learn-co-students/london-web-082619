class CreateTherapists < ActiveRecord::Migration[5.2]
  def change
    create_table :therapists do |t| 
      t.string :name
      t.string :specialism
      t.integer :price
    end
  end
end
