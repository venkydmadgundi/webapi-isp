# README

# Web API for ISP PRovider
  ISP Provider.
  - Use of Web API to create and fetch data

**Setting up**
1. Clone the Repository

2. Run the command to install gem dependencies in rails project folder:
```bash
bundle install
```

3. Next, run these commands to migrate records and populate the database with seeds.rb:
```bash
bundle exec rails db:create db:migrate db:seed
```

4. Next start the server with the following command:
```bash
rails s
```

5. Rails server is up and running now.


**RSpecs**
```bash
rspec controller_provider_spec.rb
rspec model_provider_spec.rb
```
