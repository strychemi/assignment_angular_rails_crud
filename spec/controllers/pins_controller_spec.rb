require 'rails_helper'

describe PinsController do
  let!(:user) { create(:user) }
  let!(:pin) { create(:pin) }

  describe "GET /pins.json" do

    # use lazy `let` so the response exists by the time
    # we call this
    let( :json ){ JSON.parse( response.body ) }

    before do
      # visit the post ahead of time
      get :index, format: :json
    end

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    # You want to know that this JSON can be parsed
    it 'returns a valid JSON object' do
      expect( json ).to be_a Array
    end

    # You want to know that this JSON has the right ID.
    it 'returns an object with the pin ID' do
      expect( json[0]["id"].to_i ).to be pin.id
    end

  end
end
