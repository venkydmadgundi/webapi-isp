class Provider < ApplicationRecord
	validates :name, :max_speed, :email, :description, :contact_no, :image, presence: true
	validates :email, :uniqueness => {:case_sensitive => false}, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
	validates :name, :uniqueness => {:case_sensitive => false}
	validates :lowest_price, numericality: { only_integer: true }
	validates :rating, presence: true, numericality: { greater_than: 0, less_than: 100000000 }
	validates :url, :uniqueness => {:case_sensitive => false}, format: {
              with: URI.regexp(%w[http https]),
              message: 'is not a valid URL'
            }
end
