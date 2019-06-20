Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # get '/profile', to:'users#profile'
      get '/set-user', to:'users#set_user'
      get '/user-deals', to: 'user_deals#index'
      get '/added-deals', to: 'added_deals#index'
      get '/last-added', to: 'added_deals#last_added'

      post '/login', to:'auth#create'
      post '/signup', to: 'users#create'
      post '/add-deal/:id', to: 'user_deals#create'
      post '/add-deal-to-map', to: 'added_deals#create'

      patch '/edit-user', to: 'users#update'

      delete '/unfollow-deal/:id', to: 'user_deals#destroy'
      delete '/delete-added-deal/:id', to: 'added_deals#destroy'
      delete '/delete-user', to: 'users#destroy'

      resources :users, only: [:index, :update, :show]
      resources :categories, only: [:index, :show]
      resources :user_deals, only: [:show, :destroy]
      resources :added_deals, only: [:index, :show]
    end
  end
end
