class User < ActiveRecord::Base
  attr_accessible :description, :email, :name, :longitude,:latitude,:address
  geocoded_by :address
  after_validation :geocode
end
