import React from "react";
import PropTypes from "prop-types";

const UserForm = props => {
  const { userEntry, entryInWebsite, modalOpen } = props;
  return (
    <form>
      <input
        type="text"
        name="userLogin"
        size="16"
        onChange={e => userEntry("userLogin", e.target.value)}
      />
      <input
        type="password"
        name="userPassword"
        size="16"
        onChange={e => userEntry("userPassword", e.target.value)}
      />
      <input
        type="button"
        className="input-submit"
        name="entry"
        value="Войти"
        onClick={entryInWebsite}
      />
      <input
        type="button"
        className="input-submit"
        name="register"
        value="Регистрация"
        onClick={modalOpen}
      />
    </form>
  );
};

UserForm.propTypes = {
  userEntry: PropTypes.func.isRequired,
  entryInWebsite: PropTypes.func.isRequired,
  modalOpen: PropTypes.func.isRequired
};

export default UserForm;
