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
		//$sql = "SELECT * FROM Assistance WHERE ID=" . $_GET["id"];
		$sql = "SELECT A.ID, A.Category, A.Name, A.Description, A.FAQ, D.ID AS D_ID, D.Name AS D_Name, ImageURL FROM Devices AS D INNER JOIN DevicesAssistance AS DA ON D.ID = DA.IDDevices INNER JOIN Assistance AS A ON DA.IDAssistance = A.ID WHERE A.ID=" . $_GET["id"];
	} elseif (isset($_GET["highlight"])) {
		$sql = "SELECT * FROM Assistance WHERE Highlight=" . $_GET["highlight"];
	} elseif (isset($_GET["category"])) {
		$sql = "SELECT * FROM Assistance WHERE Category=" . $_GET["category"];
	}
	else {
		$sql = "SELECT * FROM Assistance";
	}

	query($sql);

	echo json_encode($res);

	$conn->close();
?>
