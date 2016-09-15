json.extract! sighting, :id, :date, :time, :lat_long, :animal_id, :region, :created_at, :updated_at
json.url sighting_url(sighting, format: :json)
