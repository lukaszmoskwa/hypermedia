<?php
	require "db_connect.php"; //defines $servername, $username, $password, $db, $conn (holds the connection)
	

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";

	if (isset($_GET["id"])) { //da mettere in sicurezza!
		$sql = "SELECT * FROM Devices WHERE id=" . $_GET["id"]; //da mettere in sicurezza!
	}
	else {
		$sql = "SELECT * FROM Devices";
	}
	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	        echo "id: " . $row["ID"]. " - Name: " . $row["Name"]. " " . "<img src=" . $row["ImageURL"]. "> <br>";
	    }
	} else {
	    echo "0 results";
	}

	$conn->close();
?> 