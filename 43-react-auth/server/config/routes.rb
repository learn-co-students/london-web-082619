Rails.application.routes.draw do
  post '/signin', to: 'users#signin'
end
