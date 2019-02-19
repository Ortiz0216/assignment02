/*
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  */
  const FormInput= (props) => {
    return React.createElement('div',{className: "form-group"}, 
    [
            React.createElement('label', 
            {
                for: "exampleInputEmail1"
            },
            "Email Address"),

            React.createElement('input', 
            {
                className:"form-control",
                type: "email",
                id: "exampleInputEmail",
                placeholder: "Enter Email"
            }, 
            props.itemtwo),
            React.createElement('label', 
            {
                for: "exampleInputzipcode1"
            },
            "Zipcode"),

            React.createElement('input', 
            {
                className:"form-control",
                type: "email",
                id: "exampleInputZipcode",
                placeholder: "Enter Zipcode"
            }, 
            props.itemtwo),
            React.createElement('button', 
            {
                className:"btn btn-primary",
            },
            "Submit"
            ),
        ]
    );
}


/*
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
*/
