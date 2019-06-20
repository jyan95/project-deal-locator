class Api::V1::AddedDealsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show, :destroy, :last_added]

  def index
    all = AddedDeal.all
    render json: all
  end

  def show
    deal = AddedDeal.find(params[:id])
    render json: deal
  end

  def last_added
    deal = AddedDeal.last
    render json: deal
  end

  def create
    user_id = decoded_token[0]['user_id']
    # byebug
    AddedDeal.create(user_id: user_id, short_title: params[:name], description: params[:description], latitude: params[:lat], longitude: params[:lon], expires_at: params[:expiration])
  end

  def destroy
    AddedDeal.find(params[:id]).destroy
    render json: {message: 'success' }, status: :ok
  end
end
