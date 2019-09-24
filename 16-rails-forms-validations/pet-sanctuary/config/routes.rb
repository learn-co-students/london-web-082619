Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Static route
  get "/pets/about", to: "pets#about"

  resources :pets
  resources :users
end
