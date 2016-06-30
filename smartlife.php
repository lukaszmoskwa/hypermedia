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
		    //echo "0 results";
		}
	}

	//header('Content-type: application/json'); //we encode our result in json

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	//echo "Connected successfully";

	if (isset($_GET["id"])) {
		//$sql = "SELECT * FROM SmartLife WHERE ID=" . $_GET["id"];
		$sql = "SELECT SL.ID, SL.Category, SL.Name, SL.ImageURL, SL.Description, SL.ActivationAndRules, SL.Price, SL.OldPrice, D.ID AS D_ID, D.Name AS D_Name, D.ImageURL AS D_ImageURL, D.Description as D_D FROM Devices AS D INNER JOIN DevicesSmartLife AS DSL ON D.ID = DSL.IDDevices INNER JOIN SmartLife AS SL ON DSL.IDSmartLife = SL.ID WHERE SL.ID=" . $_GET["id"];
	} elseif (isset($_GET["category"])) {
		$sql = "SELECT * FROM SmartLife WHERE Category=" . $_GET["category"];
	}
	else {
		$sql = "SELECT * FROM SmartLife";
	}

	query($sql);

	echo json_encode($res);

	$conn->close();
?>
