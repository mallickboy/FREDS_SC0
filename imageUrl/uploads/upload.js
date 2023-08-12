const form = document.getElementById('upload-form');
const fileUrlElement = document.getElementById('file-url');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch('https://urlfromimage-4jtw.onrender.com/upload', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json', // Expect JSON response
            },
        });

        if (response.ok) {
            const data = await response.json(); // Parse JSON response
            const fileUrl = data.file_url;
            fileUrlElement.innerHTML = `File URL: <a href="${fileUrl}" target="_blank">${fileUrl}</a>`;
        } else {
            console.error('Upload failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
