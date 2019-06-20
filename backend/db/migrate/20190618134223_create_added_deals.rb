class CreateAddedDeals < ActiveRecord::Migration[5.2]
  def change
    create_table :added_deals do |t|
      t.integer :user_id
      t.string :short_title
      t.string :description
      t.integer :latitude
      t.integer :longitude
      t.string :expires_at

      t.timestamps
    end
  end
end
