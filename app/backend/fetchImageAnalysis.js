export async function fetchImageAnalysis(file) {
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('https://zerttesheesh.onrender.com', {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return await response.json();
  }