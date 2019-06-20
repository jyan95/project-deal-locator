class Api::V1::UserDealsController < ApplicationController
  skip_before_action :authorized, only: [:destroy]

  def create
    user_id = decoded_token[0]['user_id']
    # byebug
    deal = Deal.create(frontend_id: params[:id])
    UserDeal.create(user_id: user_id, deal_id: deal.id)
  end

  def index
    # byebug
    deals = []
    decoded_token
    user_id = decoded_token[0]['user_id']
    user_deals = UserDeal.where(user_id: user_id)
    user_deals.map { |ud| deals.push(Deal.find(ud.deal_id)) }
    render json: deals

  end

  def destroy
    Deal.where(frontend_id: params[:id]).destroy_all
  end
end
