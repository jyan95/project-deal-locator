class User < ApplicationRecord
  has_secure_password
  has_many :user_categories
  has_many :user_deals, dependent: :destroy
  has_many :categories, through: :user_categories
  has_many :deals, through: :user_deals, dependent: :destroy
  has_many :added_deals, dependent: :destroy

  validates :username, uniqueness: { case_sensitive: false }
  validates :password, presence: true
end
