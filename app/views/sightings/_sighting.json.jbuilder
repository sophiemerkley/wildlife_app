json.extract! sighting, :id, :date, :time, :lat_long, :animal_id, :created_at, :updated_at
json.url sighting_url(sighting, format: :json)