class AccountsController < ApplicationController
  before_action :find_account, only: [:show, :delete, :edit, :update]

  def index
    @accounts = Account.all
  end

  def show
    @account = current_user.account
  end

  def new
    @account = Account.new
  end

  def create
    @account = Account.new
    if @acccount.save(account_params)
      @account.user_id = current_user.id
      redirect_to accounts_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @account.update(account_params)
      redirect_to accounts_path
    else
      render :edit
    end
  end

  def destroy
    @account.destroy
  end

  def find_account
    @account = current_user.account
  end


  private
  def account_params
    params.require(:account).permit(:first_name, :middle_name, :last_name, :dob, :location, :hometown, :still_mormon, :status, :public_status)
  end
end
