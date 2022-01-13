class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
            # render "api/users/show"
        else
            render json: ["This is awkward...try again please."], status: 422
            #render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        # debugger
        render :show
    end

    private
    
    def user_params
        params.require(:user).permit(:email, :displayname, :age, :password)
    end
end
