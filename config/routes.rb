Rails.application.routes.draw do
  root 'providers#index'
  resources :providers
  match 'get_providers' => 'providers#get_providers', :via => :get
  match 'search_providers' => 'providers#search_providers', :via => :post
end
