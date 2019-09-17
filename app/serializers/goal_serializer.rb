class GoalSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :completed
  has_many :tasks
end
