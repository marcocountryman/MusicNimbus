Rails.application.routes.draw do
  
  namespace :api,defaults: {format: :json} do
    
    resources :users, only: [:create, :show]
    resource :session, only: [:create,:destroy, :show]
    resources :songs, only: [:show, :create, :index, :update, :destroy]
    resources :comments, only: [:create, :destroy, :index]
    
  end

  root "static_pages#root"
end
