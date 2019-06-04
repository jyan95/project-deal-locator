require 'rails_helper'

RSpec.describe User do
  before(:each) do
    @user = User.create!(username: "parivers", password: "123", phone: "8005882300")
  end

  it 'can be created' do
    expect(@user).to be_valid
  end

  it 'can be read' do
    expect(@user.username).to eq("parivers")
    expect(@user.phone).to eq("8005882300")
  end
end
