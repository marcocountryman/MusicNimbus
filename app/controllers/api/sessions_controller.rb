class Api::SessionsController < ApplicationController

    #COME BACK TO THIS CONTROLLER AND FIX THE RENDERS!!!!!

    def create 
        @user = User.find_by_credentials(
            
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Wrong info, dawg."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout

            render json: "{}"
            # render "api/users/show"
        else
            render json: ["No one here."], status: 404
        end
    end
end
