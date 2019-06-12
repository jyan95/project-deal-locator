Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post '/login', to:'auth#create'
      post '/signup', to: 'users#create'
      post '/deals/:deal_id', to: 'user_deals#create'
      get '/profile', to:'users#profile'
      get '/set-user', to:'users#show'

      resources :users, only: [:index, :update]
      resources :categories, only: [:index, :show]
      resources :user_categories, only: [:create]
      resources :user_deals, only: [:index, :show, :create, :destroy]
    end
  end
end
