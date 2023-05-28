<?php
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
    <meta property="og:title" content="anditv.it">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="en-US">
    <meta property="og:description" content="anditv's IP-Info">
    <title>anditv.it | IP-Info</title>
    <link rel="icon" href="https://avatars.githubusercontent.com/u/75949923?v=4">
    <link rel="stylesheet" href="../assets/style.css">
</head>
<body>
    <div>
        <center>
            <a href="https://anditv.it/">
                <img style="border-radius: 50%" alt="anditv.it" src="https://avatars.githubusercontent.com/u/75949923?v=4" width="100" height="100">
            </a>
        </center>
    </div>
    <center>
        <br>
        <form method="GET" action="">
            <input autocomplete="off" type="text" name="ip_address" class="textarea" placeholder="Insert your IP here">
            <br>
            <button type="submit">Get IP-Infos</button>
        </form>
        <br>
        <?php
        require_once('ip_info.php');
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
</style>

</html>