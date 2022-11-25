<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Password Reset</title>
</head>
<body>
    <h2>Dear <span>{{ $details['name']}}</span></h2>
    <p>You have requst for reset your password. if you want to change your password please click bellow link</p>
    <a href="http://127.0.0.1:8000/auth/forgot-password/{{$details['token']}}/{{$details['hashEmail']}}"> Password Reset Here</a>
    <br>
    <br>
    <br>
    <p>Thanks You..</p>
</body>
</html>

