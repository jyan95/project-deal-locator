require 'rails_helper'

RSpec.describe Category do
  before(:each) do
    @category = Category.create!(slug: "toys", parent_slug: "products")
  end

  it 'can be created' do
    expect(@category).to be_valid
  end

  it 'can be read' do
    expect(@category.slug).to eq("toys")
    expect(@category.parent_slug).to eq("products")
  end
end
