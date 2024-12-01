import React, { useState } from "react";
import { useMutation } from "react-query";
import apiUrl from "../../utils/apiUrl";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import "./AddBook.css";

function Books() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: async (postData) => {
      const response = await fetch(`${apiUrl}/user/addbooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
        credentials: "include",
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Post created successfully", {
        duration: 2000,
      });
      setTimeout(() => {
        navigate("/books");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message, {
        duration: 3000,
      });
    },
  });

  const handleImageUpload = async () => {
    if (!featuredImage) return null;

    const formData = new FormData();
    formData.append("file", featuredImage);
    formData.append("upload_preset", "b6g807uv");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/ddd1nl0nf/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      console.error("Error uploading image to Cloudinary");
      return null;
    }

    const data = await response.json();
    console.log(data);
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookImage = await handleImageUpload();

    const postData = {
      title,
      bookImage,
    };

    console.log(postData);
    mutate(postData);
  };

  return (
    <div className="outer-container">
      <div className="add-book-container">
        <Toaster position="top-center" richColors />
        <h1 className="heading">Add-Book</h1>
        <form>
          <div className="mb-4">
            <label>Featured Image (required)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFeaturedImage(e.target.files[0])}
              required
            />
          </div>
          <div className="mb-4">
            <label>Title (required)</label>
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title here"
              maxLength="150"
              required
              className="w-full p-2 border rounded"
            />
            <p>{title.length}/100</p>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="submit-button"
              disabled={isLoading}
              onClick={handleSubmit}
            >
              {isLoading ? "Please wait..." : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Books;
