<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $to = "contact@transfershuttlebrazil.com";
  $subject = "Nova Cotação - TS Brazil";
  $body = "";
  foreach($_POST as $key => $value){
    $body .= ucfirst($key).": ".$value."\n";
  }
  $headers = "From: noreply@tsbrazil.com\r\n";
  mail($to, $subject, $body, $headers);
  echo "<script>alert('Cotação enviada com sucesso!');window.location.href='index.html';</script>";
}
?>
