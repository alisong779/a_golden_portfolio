class TasksController < ApplicationController
  # before_action :set_task, only: [:show, :update, :destroy]

# TESTING GIT
  # GET /tasks
  def index
    @goal = Goal.find(params[:goal_id])
    @tasks = @goal.tasks.all
    render json: @tasks
  end

  # GET /tasks/1
  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  # POST /tasks
  def create
    @goal = Goal.find(params[:goal_id])
    @task = @goal.tasks.create(task_params)
    render json: @task, status: :created
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
    @task = Task.find(params[:id])
    @task.destroy
    render json: @task
  end

  private
    # def set_task
    #   @task = @goal.tasks.find_by(id: params[:id])
    # end

    def task_params
      params.require(:task).permit(:name, :completed)
    end
end
