class ItemsController < ApplicationController
require 'json'
    
    
    def index
        items = Item.all
        render json: ItemSerializer.new(items)
    end

    def show
        item = Item.find_by_id(params[:id])
        render json: ItemSerializer.new(item)
    end

    def destroy
        Item.find_by_id(params[:id]).destroy
        items = Item.all
        render json: ItemSerializer.new(items)
    end

    def create
        description = params[:item][:description]
        Item.create(description: description)
        items = Item.all
        render json: ItemSerializer.new(items)
    end

end
