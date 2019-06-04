require 'rails_helper'

RSpec.describe UserCategory do
  before do
    @user = User.create!(username: 'parivers', password: 'abc', phone: '911')
    @category = Category.create!(slug: 'food', parent_slug: '')
  end

  it 'can connect user to category' do
    @user_category = UserCategory.create!(user_id: @user.id, category_id: @category.id)

    expect(@user.categories).to include(@category)
  end
  
  # it 'can be created' do
  #   expect(@user_category).to be_valid
  # end
end
