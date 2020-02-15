# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

provider_bsnl = Provider.create([{name: 'BSLN', lowest_price: 100, rating: 10, max_speed: "200Kbps", description: "BSNL Group",contact_no: "9111111111", email: "helpdesk@bsnl.com", image: "bsnl.png", url: "https://bsnl.com" }])
provider_airtel = Provider.create([{name: 'Airtel', lowest_price: 150, rating: 3, max_speed: "450Kbps", description: "Airtel Group",contact_no: "4666666666", email: "helpdesk@Airtel.com", image: "Airtel.png", url: "https://Airtel.com" }])
provider_hathway = Provider.create([{name: 'Hathway', lowest_price: 400, rating: 40, max_speed: "250Kbps", description: "Hathway Group",contact_no: "555555555", email: "helpdesk@Hathway.com", image: "Hathway.png", url: "https://Hathway.com" }])
provider_tikona = Provider.create([{name: 'Tikona', lowest_price: 300, rating: 20, max_speed: "400Kbps", description: "Tikona Group",contact_no: "6444444444", email: "helpdesk@Tikona.com", image: "Tikona.png", url: "https://Tikona.com" }])
provider_reliance = Provider.create([{name: 'Reliance', lowest_price: 200, rating: 15, max_speed: "300Kbps", description: "Reliance Group",contact_no: "7333333333", email: "helpdesk@Reliance.com", image: "Reliance.png", url: "https://Reliance.com" }])
provider_broadband = Provider.create([{name: 'broadband', lowest_price: 80, rating: 5, max_speed: "400Kbps", description: "broadband Group",contact_no: "8222222222", email: "helpdesk@broadband.com", image: "broadband.png", url: "https://broadband.com" }])
