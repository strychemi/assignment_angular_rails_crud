require 'rails_helper'

describe PinsController do
  let(:user) { create(:user) }
  let(:pin) { create(:pin, user: user) }
  # use lazy `let` so the response exists by the time
  # we call this
  let( :json ){ JSON.parse( response.body ) }

  describe "GET /pins.json" do
    before do
      user
      pin
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

  describe "POST /pins.json" do
    let(:post_create_valid) {
      post :create, format: :json, pin: attributes_for(:pin, user_id: user.id)
    }
    let(:post_create_invalid) {
      post :create, format: :json, pin: attributes_for(:pin, description: "")
    }
    before do
      user
    end

    it 'should respond with a success' do
      post_create_valid
      expect( response.status ).to eq( 200 )
    end

    it 'returns a valid JSON object' do
      post_create_valid
      expect( json ).to be_a Hash
    end

    it 'responds with unprocessable entity on bad params' do
      post_create_invalid
      expect( response.status ).to eq( 422 )
    end

  describe "GET /pins/:id.json" do
    before do
      user
      pin
      # visit the post ahead of time
      get :show, format: :json, id: pin.id
    end

    it 'should respond with a success' do
      expect( response.status ).to eq( 200 )
    end

    # You want to know that this JSON can be parsed
    it 'returns a valid JSON object' do
      expect( json ).to be_a Hash
    end

    # You want to know that this JSON has the right ID.
    it 'returns an object with the pin ID' do
      expect( json["id"].to_i ).to be pin.id
    end

  end

  end
end
