const UserForm = () => {
  return (
    <form>
      <h4>Add new dish</h4>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          className="form-control px-2"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="form-control px-2"
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="active" className="form-check-label px-2">Active</label>
        <input
          required
          type="checkbox"
          name="active"
          id="active"
          className="form-check-input px-2"
        />
      </div>
      <div className="form-group">
        <label htmlFor="active">Active</label>
        <select className="form-select" id="role">
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="mt-3 btn btn-primary">Create User</button>
    </form>
  );
};

export default UserForm;