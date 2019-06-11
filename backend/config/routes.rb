Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :user_categories, only: [:index, :show, :create]

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :categories, only: [:index, :show, :create]

      post '/login', to:'auth#create'
      get '/profile', to:'users#profile'
    end
  end
end
