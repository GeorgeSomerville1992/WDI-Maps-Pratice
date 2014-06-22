class User < ActiveRecord::Base
  attr_accessible :description, :email, :name
  geocoded_by :address
  after_validation :geocode
end
