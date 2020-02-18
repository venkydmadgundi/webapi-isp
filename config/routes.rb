Rails.application.routes.draw do
  root 'providers#index'
  resources :providers
  match 'get_providers' => 'providers#get_providers', :via => :get
end
