class RegistrationsController < Devise::RegistrationsController

  protected

  def after_sign_up(resource)
    '/accounts/new'
  end
  
end
