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

	$res = [];

	if (isset($_GET["id"])) { //da mettere in sicurezza!
		//$sql = "SELECT * FROM Devices WHERE ID=" . $_GET["id"]; //da mettere in sicurezza! (vecchia query)
		$sql = "SELECT D.ID, D.Category, D.Name, D.ImageURL, TechSpec, D.Description, D.Price, D.OldPrice, SL.ID AS SL_ID, SL.Name AS SL_Name FROM Devices AS D INNER JOIN DevicesSmartLife AS DSL ON D.ID = DSL.IDDevices INNER JOIN SmartLife AS SL ON DSL.IDSmartLife = SL.ID WHERE D.ID=" . $_GET["id"];
		query($sql);
		$sql = "SELECT D.ID, D.Name, D.ImageURL, A.ID AS A_ID, A.Name AS A_NAME, A.FAQ FROM Devices AS D INNER JOIN DevicesAssistance AS DA ON D.ID = DA.IDDevices INNER JOIN Assistance AS A ON DA.IDAssistance = A.ID WHERE D.ID=" . $_GET["id"];
		query($sql);
	} elseif (isset($_GET["category"])) { //da mettere in sicurezza!
		$sql = "SELECT * FROM Devices WHERE Category=" . $_GET["category"]; //da mettere in sicurezza!
		query($sql);
	}
	else { //do we use this?
		$sql = "SELECT * FROM Devices";
		query($sql);
	}
	
	echo json_encode($res);

	$conn->close();
?> 