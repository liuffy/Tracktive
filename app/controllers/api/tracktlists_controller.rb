class Api::TracktlistsController < ApplicationController

	def index
		# sleep 1


	    # if params[:search_string]
	    #   search_string = params[:search_string].downcase
	    #   @tracktlists = Tracktlist.all.select{ |tracktlist| tracktlist.artists.downcase.split(", ").include?(search_string)
     #  else 
		@tracktlists = Tracktlist.all
	end 

	def show 
		sleep 1
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
		params.require(:tracktlist).permit(:title, 
																			:user_id, 
																			:num_tracks, 
																			:username,
																			:index_image_url, 
																			:artists, 
																			:playlistUrl)
	end 
end
