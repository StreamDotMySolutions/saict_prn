const Form = () => {
    return (
        <>
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" className="form-control form-control-lg is-invalid"
              placeholder="Enter a valid email address" />
              <span class="invalid-feedback">
                Invalid email 
              </span>
          </div>

          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg login-button">Login <FontAwesomeIcon icon="fas fa-sign-in" /></button>
          </div>

       </form>
        </>
    )
}

export default Form