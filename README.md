# File Upload Preview
The simple jquery plugin which send request to upload file and show its preview thumbnail.

## Dependencies
- jQuery
- Bootstrap
- jQuery UI
- Font Awesome

## How to Install
Include file upload preview css and js into project
```html
<link rel="stylesheet" href="css/file-upload-preview.css">
<script src="js/file-upload-preview.js"></script>
```

## Usage
Create form and div for plugin
```html
<form method="POST" enctype="multipart/form-data">
    <div id="image_container"></div>
</form>
```
Initialize plugin
```javascript
var file = new file_upload_preview({
    selector: '#image_container',
    ajax_src: 'submit.php',
    extensions: 'jpg|png',
    base_url: 'upload/',
    has_main: true
});
```

## Options
Name | Required | Default | Description
--- | :---: | --- | ---
selector | required | null | div selector
ajax_src | required | null | ajax post url
extensions | optional | 'jpg,jpeg,png,gif' | files extensions
base_url | optional | '' | base url where file upload 
has_main | optional | false | enable drag n drop functionality

## Author
[Raheel Khan](https://github.com/dronzer92)

## License
MIT Public License
