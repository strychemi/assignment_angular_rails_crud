class PinsController < ApplicationController

  def index
    @pins = Pin.all

    respond_to do |format|

      format.json {render json: @pins}

    end
  end

  def show
    @pin = Pin.find(params[:id])
    respond_to do |format|
      format.json { render json: @pin }
    end
  end


  def update
    @pin = Pin.find(params[:id])
    respond_to do |format|
      if @pin.update(pin_params)
        format.json { render json: @pin }
      else
        puts "fails"
        format.json { render json: @pin, status: :unprocessable_entity }
      end
    end

  end

  def create
    @pin = Pin.new(pin_params)
    respond_to do |format|
      if @pin.save
        format.json { render json: @pin }
      else
        puts "fails"
        format.json { render json: @pin, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    respond_to do |format|
      if @pin.destroy
        format.json { render json: @pin }
      else
        format.json { redner json @pin, status: :unprocessable_entity}
      end
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:item_name,
                                :description,
                                :user_id,
                                :buy_sell,
                                :id)
  end
end
