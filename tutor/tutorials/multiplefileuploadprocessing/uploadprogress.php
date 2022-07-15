<form id="uploadForm" action="upload.php" method="POST" enctype="multipart/form-data" >
    <h2><?php echo $title ?></h2>
    <input type="hidden" name="<?php echo ini_get('session.upload_progress.name'); ?>" value="test" />
    <input type="file" name="file_input" >
    <input type="submit" value="Send">
    <div class="w3-light-grey">
        <div id="progressBar" class="w3-container w3-green w3-center" style="width:0%"><!-- filled by JS--></div>
    </div>
</form>