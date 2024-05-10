function processFile() {
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');
    const file = fileInput.files[0];

    if (file) {
        const fileType = file.type.split('/')[0];
        if (fileType === 'image') {
            processImage(file, preview);
        } else if (fileType === 'audio') {
            processAudio(file);
        } else {
            alert('Unsupported file type!');
        }
    } else {
        alert('No file selected!');
    }
}

function processImage(file, preview) {
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Resize image to 200x200
            canvas.width = 200;
            canvas.height = 200;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Display resized image
            preview.innerHTML = '';
            preview.appendChild(canvas);
        };
    };

    reader.readAsDataURL(file);
}

function processAudio(file) {
    // Compress size of audio file (you can implement your compression logic here)
    alert('Audio processing is not implemented yet!');
}
