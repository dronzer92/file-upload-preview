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
var fp = new file_upload_preview({
    selector: '#image_container',
    ajax_src: 'submit.php',
    base_url: 'upload/'
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
has_rotation | optional | false | enable file rotation functionality
max_upload | optional | 50 | maximum files upload limit
post_file_index | optional | 'img_index' | hidden field post name for file index
post_file_name | optional | 'img_name' | hidden field post name for file name
post_file_rotate | optional | 'img_rotate' | hidden field post name for file rotate angle
on_init | optional | null | call on plugin initialize
on_upload | optional | null | call on file upload
on_error | optional | null | call on file upload error
on_delete | optional | null | call on file delete
on_rotate | optional | null | call on file rotate
on_drop | optional | null | call when file index change
predefined_images | optional | [] | list of predefined images


## TODO
* Drag n drop file upload

## Author
[Raheel Khan](https://github.com/dronzer92)

## License
MIT Public License
