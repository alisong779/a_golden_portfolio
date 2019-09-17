class TasksController < ApplicationController
  before_action :set_goal
  before_action :set_task, only: [:show, :update, :destroy]


  # GET /tasks
  def index
    # @tasks = @goal.tasks.all
    render json: @tasks
  end

  # GET /tasks/1
  def show
    render json: @task
  end

  # POST /tasks
  def create
    @task = @goal.tasks.create(task_params)

    if @task.save
      render json: @task, status: :created, location: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    @task.destroy
    render json: @task
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = @goal.tasks.find_by(id: params[:id])
    end

    def set_goal
    @goal = Goal.find_by(id: params[:goal_id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.require(:task).permit(:name, :completed)
    end
end
