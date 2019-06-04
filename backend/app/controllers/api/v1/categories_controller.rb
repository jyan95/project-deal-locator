class Api::V1::CategoriesController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]
  
  def index
    @all = Category.all
    render json: @all
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def create
    @category = Category.create(category_params)
  end

  private

  def category_params
    params.require(:category).permit(:slug, :parent_slug)
  end
end
