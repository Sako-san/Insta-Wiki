class Api::PostsController < ApplicationController

    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def edit
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render :show
    end

    private

    def post_params
        params.require(:post).permit(:body)
    end
end