Rails.application.routes.draw do
  get 'sessions/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Static route
  get "/pets/about", to: "pets#about"

  # We've chosen to use a custom url for out new route in order to make it more readable for the user - if they see /login in the browser, it's easy for them to understand what the purpose of that route is
  get "/sessions/new", to: "sessions#new", as: "new_session"
  post "/sessions", to: "sessions#create", as: "sessions"
  delete "/sessions", to: "sessions#destroy"

  resources :pets
  resources :users
end
