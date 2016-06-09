<?php
	require "db_connect.php"; //defines $servername, $username, $password, $db, $conn (holds the connection)

	function query($sql) {
		global $conn;
		global $res;
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		        $res[] = $row; //adds $row to the $res array
		    }
		    //echo json_encode($res);
		} else {
		    //echo "0 results"; //maybe print a better message
		}
	}
	
	//header('Content-type: application/json'); //we encode our result in json

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	//echo "Connected successfully";

	//$sql = "SELECT * FROM Devices WHERE OldPrice IS NOT NULL UNION SELECT * FROM SmartLife WHERE OldPrice IS NOT NULL"; //SmartLife is missing (maybe also don't use * if we don't need all the data)
	//query($sql);
	$sql = "SELECT * FROM Devices WHERE OldPrice IS NOT NULL"; //SmartLife is missing (maybe also don't use * if we don't need all the data)
	query($sql);
	$sql = "SELECT * FROM SmartLife WHERE OldPrice IS NOT NULL"; //SmartLife is missing (maybe also don't use * if we don't need all the data)
	query($sql);

	echo json_encode($res);

	$conn->close();
?> 