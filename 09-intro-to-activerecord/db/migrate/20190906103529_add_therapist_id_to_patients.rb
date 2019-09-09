class AddTherapistIdToPatients < ActiveRecord::Migration[5.2]
  def change
    add_column :patients, :therapist_id, :integer
  end
end
