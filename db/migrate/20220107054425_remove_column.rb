class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :songs, :artist_name
    add_column :songs, :artist, :string, null:false
  end
end
