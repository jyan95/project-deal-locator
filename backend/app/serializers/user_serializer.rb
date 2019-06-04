class UserSerializer < ActiveModel::Serializer
  attributes :username, :phone, :categories
end
