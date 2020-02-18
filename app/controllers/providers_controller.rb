class ProvidersController < ApplicationController
  before_action :set_provider, only: [:show, :update, :destroy]

  # GET /providers
  def index
    @providers = Provider.all
  end

  # GET /providers/1
  def show
    render json: @provider
  end

  def get_providers
    @providers = Provider.all
    @providers = @providers.providers_search(params[:search]) if params[:search]
    @providers = @providers.order(rating: params[:sort_rating]) if params[:sort_rating] && SORT_ORDERS.include?(params[:sort_rating].downcase)
    @providers = @providers.order(lowest_price: params[:sort_price]) if params[:sort_price] && SORT_ORDERS.include?(params[:sort_price].downcase)
    render json: @providers
  end


  # POST /providers
  def create
    @provider = Provider.new(provider_params)

    respond_to do |format|
      if @provider.save
        format.html { redirect_to root_path, notice: 'Provider was successfully created.' }
        format.json { render :show, status: :created, location: @provider }
      else
        format.html { render :new }
        format.json { render json: @provider.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /providers/1
  def update

    respond_to do |format|
      if @provider.update(provider_params)
        format.html { redirect_to root_path, notice: 'Provider was successfully updated.' }
        # format.json { render :show, status: :ok, location: @provider }
      else
        format.html { render :edit }
        format.json { render json: @provider.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /providers/1
  def destroy
    @provider.destroy
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Provider was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_provider
      @provider = Provider.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def provider_params
      params.require(:provider).permit(:name, :lowest_price, :rating, :max_speed, :description, :contact_no, :email, :image, :url)
    end
end

