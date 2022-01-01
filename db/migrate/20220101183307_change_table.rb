class ChangeTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :display_name
    add_column :users, :displayname, :string, null:false
  end
end
