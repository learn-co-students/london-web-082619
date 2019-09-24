class PetsController < ApplicationController

  def about
  end

  def index
    @pets = Pet.all
  end

  def show
    @pet = Pet.find(params[:id])
  end

  def new
    @pet = Pet.new
  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def create
    # Create pet here
    @pet = Pet.create(pet_params)
    # Check if the instance of pet created with the parameters the user has given us is valid or not. If it is, it will be saved to the database and we just redirect the user to the pets index route. Otherwise, we render the new form again and our instance of pet will now have some errors we can display to the user
    if @pet.valid?
      redirect_to pets_path
    else
      render :new
    end
  end

  def update
    @pet = Pet.find(params[:id])
    # Update pet here
    @pet.update(pet_params)
    redirect_to pet_path(@pet.id)
  end

  def destroy
    Pet.destroy(params[:id])
    redirect_to pets_path
  end

  private

  def pet_params
    params.require(:pet).permit(:name, :age, :user_id)
  end

end
