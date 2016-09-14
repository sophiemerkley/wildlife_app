class Sighting < ActiveRecord::Base
  belongs_to :animal
  validates :lat_long, length: { minimum: 3 }
end
