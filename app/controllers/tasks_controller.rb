class TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

# TESTING GIT
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
    @task = Task.create(task_params)

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
    def set_task
      @task = Task.find_by(id: params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :completed)
    end
end
