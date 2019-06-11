class Api::V1::UserCategoriesController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    @all = UserCategory.all
    render json: @all
  end

  def show
    @user_category = UserCategory.find(params[:id])
    render json: @user_category
  end

  def create
    # find id of category by slug match (params[:slug])
    id = Category.find_by(slug:params[:slug]).id
    UserCategory.create(user_id: params[:user_id], category_id: id)
  end
end
