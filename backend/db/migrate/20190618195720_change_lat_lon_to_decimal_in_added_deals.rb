class ChangeLatLonToDecimalInAddedDeals < ActiveRecord::Migration[5.2]
  def change
    change_column :added_deals, :latitude, :decimal
    change_column :added_deals, :longitude, :decimal
  end
end
