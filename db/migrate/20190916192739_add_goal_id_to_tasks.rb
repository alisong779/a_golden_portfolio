class AddGoalIdToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :goal_id, :integer
  end
end
