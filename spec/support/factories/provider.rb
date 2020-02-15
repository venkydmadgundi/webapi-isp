FactoryBot.define do
  factory :provider do
    name {"test"}
    email {"test@user.com"}
    lowest_price {20}
    rating {75.50}
    max_speed {"100"}
    description {"This is testing provider for test user"}
    contact_no {"Mobile number is 9999999999"}
    image {"test"}
    url {"http://localhost/testing"}
  end

  factory :random_provider, class: Provider do
    name {Faker::Name.unique.name}
    email {Faker::Internet.unique.email}
    lowest_price {20}
    rating {Faker::Number.decimal(l_digits: 2)}
    max_speed {Faker::Number.between(from: 1, to: 200)}
    description {Faker::Lorem.sentence}
    contact_no {Faker::PhoneNumber.phone_number}
    image {Faker::Lorem.sentence}
    url {Faker::Internet.unique.url}
  end
end
