require 'rails_helper'

describe Provider, type: :model do
  describe "validations" do
    let(:provider) { FactoryBot.build(:provider) }
    context 'when not valid' do 
	    it "should have a name" do
	      provider.name = nil
	      expect(provider).to_not be_valid
	    end

	    it "should have a valid email" do
	      provider.email = "test"
	      expect(provider).to_not be_valid
	    end

	    it "should have a valid lowest_price" do
	      provider.lowest_price = "test"
	      expect(provider).to_not be_valid
	    end

	    it "should have a valid rating" do
	      provider.rating = -10
	      expect(provider).to_not be_valid
	    end

	    it "should have a valid url" do
	      provider.url = "test"
	      expect(provider).to_not be_valid
	    end
	end

	context 'when valid' do
	    it "should have a all valid fields" do
	      expect(provider).to be_valid
	    end
	end

  end
end