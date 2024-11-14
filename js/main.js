async function uploadFile(file, presignedUrl) {
  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      body: file
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    console.log('File uploaded successfully!');
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}
