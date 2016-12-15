class Api::TracktlistsController < ApplicationController

	def index
		@tracktlists = Tracktlist.all
	end 

	def show 
		@tracktlist = Tracktlist.find(params[:id])

		if @tracktlist.save
			render "show_tracktlist"
		else 

			render json: @mix.errors.full_messages, status: 422
		end 
	end 


	def create
	end 

	private

	def tracktlist_params
		params.require(:tracktlist).permit(:title, :user_id, :index_image_url, :artists => [])
	end 
end
