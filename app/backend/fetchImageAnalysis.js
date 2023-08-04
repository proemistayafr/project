export async function fetchImageAnalysis(file) {
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('http://127.0.0.1:8000/detect-objects', {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return await response.json();
  }