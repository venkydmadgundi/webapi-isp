Rails.application.routes.draw do
  root 'providers#index'
  resources :providers
  match 'all_providers' => 'providers#all_providers', :via => :get
  match 'providers/update/:id' => 'providers#update', :via => :post
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
