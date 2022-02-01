json.partial! "song", song: @song


# json.comments do
#     @song.comments.each do |comment|
#         json.set! comment.id do
#             json.extract! comment, :id, :body, :commenter_id, :song_id, :created_at
#             json.commented time_ago_in_words(comment.created_at)
#         end
#     end
# end

# json.users do
#     json.set! @song.uploader.id do
#         json.partial! "api/users/user", user: @song.uploader
#     end

#     @song.comments.each do |comment|
#         json.set! comment.commenter_id do
#             json.partial! "api/users/user", user: User.find_by(id: comment.commenter_id)
#         end
#     end
# end