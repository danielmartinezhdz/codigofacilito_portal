class ProductSerializer < ActiveModel::Serializer
  attributes :id, :sku, :description
end
