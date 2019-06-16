Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/profile', to:'users#profile'
      get '/set-user', to:'users#show'
      get '/user-deals', to: 'user_deals#index'

      post '/login', to:'auth#create'
      post '/signup', to: 'users#create'
      post '/add-deal/:id', to: 'user_deals#create'
      delete '/remove-deal/:id', to: 'user_deals#destroy'

      resources :users, only: [:index, :update]
      resources :categories, only: [:index, :show]
      resources :user_categories, only: [:create]
      resources :user_deals, only: [:show, :destroy]
    end
  end
end
