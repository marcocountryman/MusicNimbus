class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title, null:false
      t.string :artist_name, null:false
      t.integer :uploader_id, null:false
      t.string :genre, null:false

      t.timestamps
    end

    add_index :songs, :uploader_id
    add_index :songs, :title
  end
end
