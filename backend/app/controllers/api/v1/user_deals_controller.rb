class Api::V1::UserDealsController < ApplicationController
  def create
    # deal = Deal.find_or_create_by(deal_params)
    user_id = decoded_token[0]['user_id']
    Deal.create(frontend_id: params[:deal_id])
    UserDeal.create(user_id: user_id, deal_id: params[:deal_id])
  end

  def index
    user_id = decoded_token[0]['user_id']
    deals = UserDeal.where(user_id: user_id)
    render json: deals
  end
end
