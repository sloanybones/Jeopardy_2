class Api::CategoriesController < ApplicationController
  def index
    render json: Category.all
  end

  def new_game
    categories = Category.limit(4).order("Random()")
    categories_data = categories.map do |c|
      {
        category: c.name,
        category_id: c.id,
        cards: c.cards,
      }
    end
    render json: { data: categories_data }
   
  end
end
