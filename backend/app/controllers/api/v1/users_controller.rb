class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index
    @all = User.all
    render json: @all
  end

  def profile
    render json: { user: UserSerializer.new(current_user)}, status: :accepted
  end

  def create
    # byebug
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), token: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def show
    current = user ||= User.find(decoded_token[0]['user_id'])

    render json: current
  end

  private

  def user_params
    params.permit(:username, :password, :phone)
  end
end
