class CreateDeals < ActiveRecord::Migration[5.2]
  def change
    create_table :deals do |t|

      t.timestamps
    end
  end
end
