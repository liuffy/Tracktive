class Api::TracktlistsController < ApplicationController

	def index
		@tracktlists = Tracktlist.all
	end 

	def show 
		@tracktlist = Tracktlist.find(params[:id])
# @username = User.find(tracktlist.user_id).username
		render "show_tracktlist"
	end 


	def create
		@tracktlist = Tracktlist.new(tracktlist_params)

		if @tracktlist.save
			render :show_tracktlist
		else 
			render json: @tracktlist.errors.full_messages, status: 401
		end 
	end 

	def destroy
		@tracktlist = Tracktlist.find(params[:id])
		@tracktlist.destroy
		# render :index
	end 


	private

	def tracktlist_params
		params.require(:tracktlist).permit(:title, :user_id, :index_image_url, :artists, :playlistUrl)
	end 
end
