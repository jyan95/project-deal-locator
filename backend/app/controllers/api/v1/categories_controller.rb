class Api::V1::CategoriesController < ApplicationController
  def create
    @category = Category.create(category_params)
  end

  private

  def category_params
    params.require(:category).permit(:slug, :parent_slug)
  end
end
