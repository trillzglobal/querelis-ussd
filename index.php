<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <!-- title -->
 <title>USSD Application</title>
 <!-- normalize css -->
 <link rel="stylesheet" href="./normalize.css">
 <!-- styles css -->
 <link rel="stylesheet" href="./styles.css">
</head>
<body>

 <form class="form file-form"  action="/" method="post">
    <div >

        <h4>Querelis USSD</h4>
    </div>
  <!-- single row -->
  <div class="response" id="response">
    
  </div>

  <input type="hidden" id="random" value="" >
  <div class="form-row" style="padding-top: 6vh;">
   <label for="name" class="form-label">USSD Input</label>
   <input type="text" id="name" class="form-input" value="" placeholder="*174*55">
  </div>
  <!-- end of single row -->

  
   <button type="submit" class="btn btn-block" name="submit" value="submit">OK</button>
  
  </form>
<section class="container">
</section>



<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js" integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

  <script src="./browser-app.js"></script>
</body>
</html>