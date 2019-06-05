class UserCategory < ApplicationRecord
  belongs_to :user
  belongs_to :category

  def create
    @user_category = UserCategory.find_or_create_by(user_id: params['user_id'], category_id: params['category_id'])
    render json: @user_category
  end

  def destroy
    UserCategory.find(params[:id]).destroy
  end
end
