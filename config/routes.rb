Rails.application.routes.draw do
  
  namespace :api,defaults: {format: :json} do
    
    resource :user, only: [:create]
    resource :session, only: [:create,:destroy, :show]
    resources :songs, only: [:show, :create, :index, :update, :destroy]
    
  end

  root "static_pages#root"
end
