Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :categories do
      resources :cards
  end
  get "new_game", to: "categories#new_game"
end
end
