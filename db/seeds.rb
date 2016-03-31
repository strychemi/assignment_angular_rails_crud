# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Pin.delete_all

5.times do |index|
  User.create(username: "User" + index.to_s)
  5.times do |pin_index|
    Pin.create(item_name: "Item"+index.to_s+pin_index.to_s,
               buy_sell: [true,false].sample,
               description: "This is a description " + index.to_s + pin_index.to_s,
               user_id: index+1)
  end  
end  