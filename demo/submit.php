<?php

if(isset($_FILES['upload_files'])){
	$result = null;
	$tmpFilePath = $_FILES['upload_files']['tmp_name'];
	//Make sure we have a filepath
	if ($tmpFilePath != ""){
		//Setup our new file path

		$ext = pathinfo($_FILES['upload_files']['name']);
		$newFileName = uniqid(time().rand(1, 1000)) . '.' .strtolower($ext['extension']);
		$newFilePath = $_POST['base_url'] . $newFileName;

		//Upload the file into the temp dir
		if(move_uploaded_file($tmpFilePath, $newFilePath)) {
			$uploaded_files_name = $newFileName;
			$result = array(
				'error' => false,
				'name' => $newFileName
			);
		} else {
			$result = array(
				'error' => true,
				'message' => 'error while upload'
			);
		}
	}

	echo json_encode($result);
	die();
}


if(isset($_POST['img_name'])){
	$insert_array = array();
	foreach ($_POST['img_name'] as $key => $value) {
		$insert_array[] = array(
			'image_index' => $_POST['img_index'][$key],
			'image_name' => $value,
			'rotate_angle' => $_POST['img_rotate'][$key]
		);
	}

	echo "<pre>";
	print_r($insert_array);
	die();
}

?>