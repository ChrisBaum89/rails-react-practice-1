class ItemsController < ApplicationController

    def index
        render_items
    end

    def show
        item = Item.find_by_id(params[:id])
        render json: ItemSerializer.new(item)
    end

    def destroy
        Item.find_by_id(params[:id]).destroy
        render_items
    end

    def create
        Item.create(description: params[:description])
        render_items
    end

    def render_items
        items = Item.all
        render json: ItemSerializer.new(items)
    end

end
