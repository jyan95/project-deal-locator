class User < ApplicationRecord
  has_secure_password
  has_many :user_categories
  has_many :user_deals
  has_many :categories, through: :user_categories
  has_many :deals, through: :user_deals

  validates :username, uniqueness: { case_sensitive: false }
  validates :password, presence: true
end
