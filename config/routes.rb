Rails.application.routes.draw do
  root 'providers#index'
  resources :providers
  match 'all_providers' => 'providers#all_providers', :via => :get
end
