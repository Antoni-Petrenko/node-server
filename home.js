module.exports = (users) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
<title>My first app</title>
</head>
<body style="height:100vh;display:flex;justify-content:center;align-items:center">

<div class="container">
<div class="row justify-content-md-center">
<div class="col-sm-4">
    <div class="text-center">
    <h1 class="h1 text-primary">Wellcome!</h1>
    <p class="text-muted ">This is my first node.js app</p>
    </div>
    <form action="/create-user" method="POST" style="margin-bottom:1rem">
      <div class="form-group">
        <label for="user-name">Name</label>
        <input
          type="text"
          class="form-control"
          id="user-name"
          name="author"
          placeholder="Enter your name"
        />
        <small id="emailHelp" class="form-text text-muted"
          >Your name will be saved on our server</small
        >
      </div>
      <div class="form-group">
        <label for="user-surname">Message</label>
        <input
          type="text"
          class="form-control"
          id="user-surname"
          name="message"
          placeholder="Message"
        />
      </div>
      <button type="submit" style="width:100%" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
</div>
</div>

  
<script
  src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
  integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
  integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
  crossorigin="anonymous"
></script>
<script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
  integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
  crossorigin="anonymous"
></script>
</body>
</html>
`;
};
