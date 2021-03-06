class Api::UsersController < ApplicationController

def create
	@user = User.new(user_params)

	if @user.save
		log_in(@user) 
		render :show
	else 
		render json: @user.errors.full_messages, status: 401
	end 
end 


def show 
 @user = User.find_by_id(params[:id])
    render :show_user # edit json.jbuilder file
end 


private

	def user_params
		params.require(:user).permit(:username, :password)
	end 
end
