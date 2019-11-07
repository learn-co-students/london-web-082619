class UsersController < ApplicationController
  def signin
    user = User.find_by(username: params[:username])

    if user and user.authenticate(params[:password])
      # here I know the user is valid!
      render json: user
    else
      # here I know the user OR password are NOT valid!
      render json: { error:  "Username/password combination is invalid." }, status: 401
    end

  end
end
