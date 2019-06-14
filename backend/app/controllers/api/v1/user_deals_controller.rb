class Api::V1::UserDealsController < ApplicationController
  skip_before_action :authorized, only: [:destroy]

  def create
    user_id = decoded_token[0]['user_id']
    # byebug
    deal = Deal.create(frontend_id: params[:id])
    UserDeal.create(user_id: user_id, deal_id: deal.id)
  end

  def index
    user_id = decoded_token[0]['user_id']
    deals = UserDeal.where(user_id: user_id)
    render json: deals
  end

  def destroy
    # debugger
    UserDeal.find_by(deal_id: params[:id]).destroy
  end
end
