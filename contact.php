<?php
if (isset($_POST['submit'])) {
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $ip = getenv("REMOTE_ADDR");
  $content = $fname . $lname . "from" . $ip . "says" . "\n\n"
  . $message;
  $send = "info@loanmart.com";
  $subject = "New inquiry from $ip";
  mail($send, $subject, $message);
  header("location: contactus.html");
  echo '<script type="text/javascript">
  $(document).ready(function() {
    swal({
        title: "We received your message.",
        text: "Our representative will get in touch with you soon!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
    });
});
  </script>'
}