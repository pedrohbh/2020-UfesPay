package br.ufes.informatica.ufespay.core.controller;

import javax.enterprise.inject.Model;

import br.ufes.inf.nemo.jbutler.ejb.controller.JSFController;

/** TODO: generated by FrameWeb. Should be documented. */
@Model
public class RegistrationController extends JSFController {
	/** Serialization id (using default value, change if necessary). */
	private static final long serialVersionUID = 1L;

	/** TODO: generated by FrameWeb. Should be documented. */
	private User user;

	/** TODO: generated by FrameWeb. Should be documented. */
	private String repeatPassword;

	/** TODO: generated by FrameWeb. Should be documented. */
	public String register() {
		// FIXME: auto-generated method stub
		return null;
	}

	/** Getter for user. */
	public User getUser() {
		return user;
	}

	/** Setter for user. */
	public void setUser(User user) {
		this.user = user;
	}

	/** Getter for repeatPassword. */
	public String getRepeatPassword() {
		return repeatPassword;
	}

	/** Setter for repeatPassword. */
	public void setRepeatPassword(String repeatPassword) {
		this.repeatPassword = repeatPassword;
	}

}