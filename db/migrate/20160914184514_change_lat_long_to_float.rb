class ChangeLatLongToFloat < ActiveRecord::Migration
  def change
    change_column :sightings, :lat_long, :string
  end
end
