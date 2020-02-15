require 'rails_helper'
 
describe ProvidersController, type: :request do
  #let(:provider) { FactoryBot.build(:provider) }
  

  describe 'GET#index' do
  	let!(:providers) {FactoryBot.create_list(:random_provider, 20)}	
    it 'returns all providers' do
      get providers_path
      expect(JSON.parse(response.body).size).to eq(20)
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET#show' do
    let!(:providers) {FactoryBot.create_list(:random_provider, 15)}
    
    it 'returns last provider' do
      get provider_url(providers.last)
      last_provider = Provider.last
      body = JSON.parse(response.body)
      expect(body["id"]).to eq(last_provider.id)
      expect(body["name"]).to eq(last_provider.name)
      expect(body["email"]).to eq(last_provider.email)
      expect(body["description"]).to eq(last_provider.description)
      expect(body["contact_no"]).to eq(last_provider.contact_no)
      expect(body["image"]).to eq(last_provider.image)
      expect(body["url"]).to eq(last_provider.url)

      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST#create ' do
  	provider_params = {
  		name: "Posting Provider",
  		email: "test@user.com",
  		lowest_price: 20,
  		rating: "75.55",
  		max_speed: "100",
  		description: "This is testing provider for test user",
  		contact_no: "9623189233",
  		image: "test",
  		url: "http://post.com/testing"
  	}
  	before do 
  		post providers_url, params: {provider: provider_params}
  	end

  	it 'returns the provider' do
  		body = JSON.parse(response.body)
  		provider_params.each do |key, value|
	    	expect(body["#{key}"]).to eq(value)
	    end
	    expect(response).to have_http_status(:created)
	  end

  end


  describe 'PUT#update ' do
    let!(:providers) {FactoryBot.create_list(:random_provider, 10)}
    new_provider_params = {
      name: "Posting Provider",
      email: "test@user.com",
      lowest_price: 20,
      rating: "75.55",
      max_speed: "100",
      description: "This is testing provider for test user",
      contact_no: "9623189233",
      image: "test",
      url: "http://post.com/testing"
    }
    before do 
      put provider_url(providers.last), params: {provider: new_provider_params}
    end

    it 'update the provider' do
      body = JSON.parse(response.body)
      updated_provider = Provider.find(providers.last.id)
      expect(updated_provider.name).to eq(new_provider_params[:name])
      expect(updated_provider.email).to eq(new_provider_params[:email])
      expect(updated_provider.lowest_price).to eq(new_provider_params[:lowest_price])
      expect(updated_provider.rating.to_digits).to eq(new_provider_params[:rating])
      expect(updated_provider.max_speed).to eq(new_provider_params[:max_speed])
      expect(updated_provider.description).to eq(new_provider_params[:description])
      expect(updated_provider.contact_no).to eq(new_provider_params[:contact_no])
      expect(updated_provider.image).to eq(new_provider_params[:image])
      expect(updated_provider.url).to eq(new_provider_params[:url])
      
      expect(response).to have_http_status(:success)
    end

  end


  describe 'DELETE#destroy ' do
    let!(:providers) {FactoryBot.create_list(:random_provider, 10)}

    before do 
      delete provider_url(providers.last)
    end

    it 'it should DELETE the provider' do
      expect(Provider.count).to eq(9)
      expect(response).to have_http_status(204)
    end

  end

end