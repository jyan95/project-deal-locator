class CategorySerializer < ActiveModel::Serializer
  attributes :id, :slug, :parent_slug
end
