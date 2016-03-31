class Pin < ActiveRecord::Base
  belongs_to :user

  validates :item_name, presence: true
  validates :description, presence: true
  validates :buy_sell, presence: true
  validates :user, presence: true
end
