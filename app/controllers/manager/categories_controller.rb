class Manager::CategoriesController < ActionController::Base
  layout "user"

  def index
    @categories = Category.all.to_json
  end

  def new
    @category = Category.new
  end
end
