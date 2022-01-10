class Api::SongsController < ApplicationController 

    def index
        @songs = Song.all
        render :index
    end

    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end

    def create
        @song = Song.new(song_params)

        debugger

        if @song.save
            render :show
            # render json {message: "Upload Successful!"}
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def update
        @song = Song.find_by(id: params[:id])
        
        if @song.update(song_params)
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def destroy
        @song = Song.find_by(id: params[:id])
        @song.destroy
        render json: {}
    end


    private

    def song_params
        params.require(:song).permit(:title, :artist, :uploader_id, :genre, :image_file, :audio_file)
    end
end