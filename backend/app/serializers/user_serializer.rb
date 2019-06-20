class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :phone, :categories, :deals, :added_deals
end
