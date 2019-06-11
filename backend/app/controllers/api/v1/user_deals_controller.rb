class Api::V1::UserDealsController < ApplicationController
  def create
    deal = Deal.find_or_create_by(deal_params)
    UserDeal.create(user_id:user_id, deal_id:deal.id)
  end

  private

  def deal_params
    #code
  end

  def user_id
    #code
  end
end
