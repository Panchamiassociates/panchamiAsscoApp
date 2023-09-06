import React, { useState } from 'react';
import axios from 'axios';

function Project_upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !title || !description) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('description', description);

    try {
      await axios.post('http://localhost:3001/upload-project', formData);
      alert('Project uploaded successfully.');
    } catch (error) {
      console.error('Error uploading project:', error);
    }
  };

  return (
    <div className="App">
      <h1>Project Upload</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <button onClick={handleUpload}>Upload Project</button>
    </div>
  );
}

export default Project_upload;
