Rails.application.routes.draw do
  root 'home#index'

  resources :accounts

  devise_for :users, :controllers => {:registrations => 'registrations'}
  
end
