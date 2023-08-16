<?php
require_once('ip_info.php');
$ogDescription = "IP-Info";

if (isset($_GET['ip_address'])) {
    $ip_address = securevar($_GET['ip_address']);
    $ip_info = getipinfo($ip_address);
    $ogDescription = "IP info for " . securevar($ip_address);
}

function securevar($var)
{
    if (empty($var)) {
        return $var;
    }
    if (is_array($var)) {
        $new_array = array();
        foreach ($var as $key => $value) {
            if (is_string($value)) {
                $new_array[$key] = htmlspecialchars(stripslashes(trim($value)));
            } else if (is_array($value)) {
                $new_array[$key] = securevar($value);
            } else {
                $new_array[$key] = $value;
            }
        }
        return $new_array;
    } else {
        return htmlspecialchars(stripslashes(trim($var)));
    }
}
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta property="og:title" content="anditv.dev">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en-US">
    <meta property="og:description" content="<?php echo $ogDescription; ?>">
    <meta name="theme-color" content="#00d9ff" />
    <title>anditv.dev | IP-Info</title>
    <link rel="stylesheet" href="../../assets/styles/main.css" />
    <link rel="stylesheet" href="../assets/style.css" />
    <link rel="icon" href="../../assets/images/favicon.ico">

    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
    <style>
        table {
            border-collapse: collapse;
        }

        th,
        td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: rgb(26, 26, 26);
        }

        body
        {
            color: white !important;
        }
    </style>
</head>

<body>
<div>
      <div class="container">
        <header class="d-flex justify-content-center py-3">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link nav-link-new" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="https://anditv.dev/short/" target="_blank" class="nav-link nav-link-new">URL-Shortener</a></li>
                <li class="nav-item"><a href="https://anditv.dev/sites/ipinfo/" target="_blank" class="nav-link active">IP-Info</a></li>
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle nav-link-new" href="#" id="dropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> More </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item nav-link-new" target="_blank" href="https://anditv.dev/sites/webhookdeleter/">Discord Webhook Deleter</a></li>
                        <li><a class="dropdown-item nav-link-new" target="_blank" href="https://speedtest.anditv.dev/">Speedtest</a></li>
                    </ul>
                </li>
            </ul>
        </header>
    </div>
    <center>
        <div class="me-container"> <a href="https://anditv.dev/" target="_blank" aria-label="GitHub Link"><img class="avatar" src="../../assets/images/avatar.webp" alt="avatar" /></a>
        </div>
    </center>
    <center>
        <br>
        <form method="GET" action="">
            <input autocomplete="off" type="text" name="ip_address" class="textarea" placeholder="Insert your IP here">
            <br>
            <button type="submit">Get IP-Infos</button>
        </form>
        <br>
        <?php
        if (isset($_GET['ip_address'])) {
            $ip_address = securevar($_GET['ip_address']);
            $ip_info = getipinfo($ip_address);
            echo "<table style='margin: 0 auto;'>";
            foreach ($ip_info as $key => $value) {
                if (!empty($value)) {
                    echo "<tr>";
                    echo "<th>" . securevar($key) . "</th>";
                    echo "<td>" . securevar($value) . "</td>";
                    echo "</tr>";
                }
            }
            echo "</table>";
        }
        ?>
    </center>
</body>

</html>
