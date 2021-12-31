class CreateTable < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null:false, unique:true
      t.string :display_name, null:false
      t.integer :age, null:false
      t.string :session_token, null:false
      t.string :password_digest, null:false

      t.timestamps
    end
    
    add_index :users, :email
    add_index :users, :session_token
  end
end
