class AddDefaultToTasks < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tasks, :completed, false
  end
end
