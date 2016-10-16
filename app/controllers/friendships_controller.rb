class FriendshipsController < ApplicationController
  def index
  end

  def search
    @user = User.find_by(email: params[:email])
    render json: {response: [@user] }
  end

  def create
    friendee = User.find_by(user_params)
    @friendship = Friendship.new(friender: current_user, friendee: friendee)
    if @friendship.save
      redirect_to root_path
    else
      @errors = "You're already friends with this person."
      render root_path
    end
  end

  private
  def user_params
    params.permit(:email)
  end
end