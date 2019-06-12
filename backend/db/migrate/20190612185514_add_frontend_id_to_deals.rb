class AddFrontendIdToDeals < ActiveRecord::Migration[5.2]
  def change
    add_column :deals, :frontend_id, :integer
  end
end
