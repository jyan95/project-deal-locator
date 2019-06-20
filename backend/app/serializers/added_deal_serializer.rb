class AddedDealSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :short_title, :description, :latitude, :longitude, :expires_at 
end
