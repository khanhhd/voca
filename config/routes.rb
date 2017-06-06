Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: "users#index"
  resources :users
  namespace :manager do
    root to: "categories#index"
    resources :categories
    resources :words
  end
end
