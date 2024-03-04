<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="assets/styles/main.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel-Commits</title>
</head>

<body>
  <center>
    <h3>View <a style="color: white;" target="_blank" href="https://github.com/dev-hoehle/simple-commit-log">this project</a> or the
      <a style="color: white;" target="_blank" href="https://github.com/anditv21/panel">panel</a> on GitHub
    </h3>
  </center>
  <table>
    <tr>
      <th>Author</th>
      <th>Date</th>
      <th>Commit Message</th>
    </tr>
    <?php
    // Set the repository owner and name
    $owner = "anditv21";
    $repo = "panel";

    // Set the number of commits to retrieve
    $num_commits = 30;

    // Set the GitHub API endpoint
    $api_url = "https://api.github.com/repos/$owner/$repo/commits?per_page=$num_commits";

    // Set the headers for the API request
    $headers = array(
      'User-Agent: PHP'
    );

    // Initialize a new cURL session
    $ch = curl_init();

    // Set the cURL options
    curl_setopt($ch, CURLOPT_URL, $api_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    // Execute the cURL request and get the response
    $response = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
      echo '<tr><td colspan="3">Error: ' . curl_error($ch) . '</td></tr>';
      exit;
    }

    // Close the cURL session
    curl_close($ch);

    // Decode the JSON response into an array of commits
    $commits = json_decode($response, true);

    // Check for JSON decoding errors
    if (json_last_error() !== JSON_ERROR_NONE) {
      echo '<tr><td colspan="3">Error: Failed to decode JSON</td></tr>';
      exit;
    }

    // Loop through the commits and display the details
    foreach ($commits as $commit) {
      $author_name = $commit['commit']['author']['name'];
      $author_avatar_url = $commit['author']['avatar_url'];
      $author_url = $commit['author']['html_url'];
      $commit_date = date('M j, Y g:i A', strtotime($commit['commit']['author']['date']));
      $commit_message = strlen($commit['commit']['message']) > 50 ? substr($commit['commit']['message'], 0, 50) . "..." : $commit['commit']['message'];

      echo '<tr>';
      echo '<td><a class="author-link" href="' . $author_url . '"><img src="' . $author_avatar_url . '">' . $author_name . '</a></td>';
      echo '<td style="width: 200px;">' . $commit_date . '</td>';
      echo '<td><a class="message-link" href="' . $commit['html_url'] . '">' . $commit_message . '</a></td>';
      echo '</tr>';
    }

    ?>
  </table>
</body>

</html>