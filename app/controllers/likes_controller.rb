class Api::LikesController < ApplicationController

	def create
		like = Like.new(
			liker_id: current_user.id,
			tracktlist_id: likes_params[:tracktlist_id]
		)

		if like.save
			render json: {
				userId: current_user.id,
				tracktlistId: likes_params[:tracktlist_id]
			}, status: 200
		else
			@errors = like.errors.full_messages
			render json: @errors, status: 422
		end

	end

	def destroy
		like = Like.find_by(
			liker_id: current_user.id, # person who liked
			tracktlist_id: likes_params[:tracktlist_id] # the liked tracktlist
		)

		if like.destroy
			render json: {
				userId: current_user.id,
				tracktlistId: likes_params[:tracktlist_id]
			}
		else
			@errors = like.errors.full_messages
			render json: @errors, status: 422
		end

	end



	private
	
	def likes_params
		params.require(:like).permit(:tracktlist_id, :liker_id)
	end
end