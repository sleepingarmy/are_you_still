class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.belongs_to :user
      t.string :first_name
      t.string :middle_initial
      t.string :last_name
      t.date :dob
      t.string :current_location
      t.string :hometown
      t.boolean :still_mormon
      t.string :status
      t.boolean :public_status

      t.timestamps null: false
    end
  end
end
