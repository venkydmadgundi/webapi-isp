class ApplicationController < ActionController::Base
	skip_before_action :verify_authenticity_token

	SORT_ORDERS = ["asc", "desc"].freeze
end
