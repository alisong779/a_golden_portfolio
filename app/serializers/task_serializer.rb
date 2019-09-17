class TaskSerializer < ActiveModel::Serializer
  attributes :id, :goal_id, :name, :completed
  belongs_to :goal
end
