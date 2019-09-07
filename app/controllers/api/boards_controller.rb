class Api::BoardsController < ApplicationController

	def index
		@boards = Board.all
	end

	def show
		@board = Board.find(params[:id])
	end

	def create
		@board = Board.new(link_params)
		@board.authorId = current_user.id
		if @board.save
			render 'api/board/show'
		else
			render json: @board.errors.full_messages
		end
	end

	def destroy
		@board = Board.find(params[:id])
		@board.destroy
		render json: "the board has been deleted"
		# render 'api/board/index'
	end

	private
	def board_params
		params.require(:board).permit(:title, :description, :isPrivate)
	end

end

	# def edit
	# 	# change isPrivate: boolean
	# 	# change name
	# end

	# def update
	# end