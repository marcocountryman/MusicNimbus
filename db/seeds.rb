User.delete_all

user1 = User.create!(
    email: "hunter12@hotmail.com",
    password: "password",
    age: 28,
    displayname: "Marco"
)
