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

	if (isset($_GET["id"])) { //da mettere in sicurezza!
		//$sql = "SELECT * FROM SmartLife WHERE ID=" . $_GET["id"]; //da mettere in sicurezza!
		$sql = "SELECT D.ID, D.Name ImageURL, SL.ID, SL.Name FROM Devices AS D INNER JOIN DevicesSmartLife AS DSL ON D.ID = DSL.IDDevices INNER JOIN SmartLife AS SL ON DSL.IDSmartLife = SL.ID WHERE SL.ID=" . $_GET["id"]; //da mettere in sicurezza!
	} elseif (isset($_GET["category"])) { //da mettere in sicurezza!
		$sql = "SELECT * FROM SmartLife WHERE Category=" . $_GET["category"]; //da mettere in sicurezza!
	}
	else { //do we use this?
		$sql = "SELECT * FROM SmartLife";
	}

	query($sql);

	echo json_encode($res);

	$conn->close();
?>