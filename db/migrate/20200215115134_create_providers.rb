class CreateProviders < ActiveRecord::Migration[6.0]
  def change
    create_table :providers do |t|
      t.text :name
      t.integer :lowest_price
      t.decimal :rating, precision: 8, scale: 2
      t.text :max_speed
      t.text :description
      t.text :contact_no
      t.text :email
      t.text :image
      t.text :url

      t.timestamps
    end
  end
end
