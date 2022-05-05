<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Contact Form</title>
    <link rel="stylesheet" href="style.css"/>
  </head>
  <body>
    
    <form id="form">
      <label for="email">Email:</label>
      <input type="text" name="email" id="email" placeholder="email@example.com"><br>
      <label for="subject">Subject:</label>
      <input type="text" name="subject" id="subject" placeholder="subject"><br>
      <label for="message">Message:</label>
      <textarea name="message" id="message" placeholder="message"></textarea><br>
      <button name="submit" id="submit">Send</button>
      <label id="loader"></label>
      <label id="info"></label>
    </form>
    
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script src="main.js"></script>
  </body>
</html>