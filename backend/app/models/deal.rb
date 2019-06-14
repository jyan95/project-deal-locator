class Deal < ApplicationRecord
  has_many :user_deals, dependent: :destroy
end
