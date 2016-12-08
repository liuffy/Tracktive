class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:password]
			)

		if @user
			log_in(@user)
			render "api/users/show"
		else 
			render json: ["Username and/or password is incorrect"], status: 401
		end 
	end 

	def destroy
			@user = current_user

		if @user 
			log_out
			render json: {}
		else 
			render json: ['Not currently signed in.'], status: 404
		end 

	end 
end