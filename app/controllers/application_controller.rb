class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
   protect_from_forgery with: :null_session,
      if: Proc.new { |c| c.request.format =~ %r{application/json} }

  helper_method :current_user, :logged_in?

  private 

  

  def current_user
  	return nil unless session[:session_token]
  	@current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in(user)
  	user.reset_session_token! 
  	session[:session_token] = user.session_token
  end 

  def log_out
  	current_user.reset_session_token! if current_user
  	session[:session_token] = nil
  end 

  def logged_in?
  	!!current_user
  end 

end