class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create, :find_user]

  def create
    @user = User.find_by(username: login_params[:username])
    if @user && @user.authenticate(login_params[:password])
      token = encode_token({user_id: @user.id})
      render json: { user: UserSerializer.new(@user), token: token}, status: :accepted
    else
      render json: { message: 'Invalid username or password'}, status: :unauthorized
    end
  end

  # def find_user
  #   # byebug
  #   if decoded_token
  #     user_id = decoded_token[0]['user_id']
  #     @user = User.find_by(id: user_id)
  #     render json: @user
  #   end
  # end

  private

  def login_params
    params.permit(:username, :password)
  end
end
