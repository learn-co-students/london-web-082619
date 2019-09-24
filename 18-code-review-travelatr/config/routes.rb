Rails.application.routes.draw do
  resources :bloggers, only: [:new, :create, :show]
  resources :posts, only: [:show, :new, :create, :edit]
  resources :destinations, only: [:show]
  get 'posts/:id/like', to: 'posts#like', as: 'like'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
