import { useState, ChangeEvent, FormEvent } from "react";

export default function CreateBlogPost() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  function handleFormInputChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmitPost = async (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        published: true,
      }),
    });
    if (res.status === 401) {
      setIsLoading(false);
      setErrorMessage("Unauthorized");
    }
    if (res.status === 500) {
      console.log(res);
      setIsLoading(false);
      setErrorMessage("Error");
    } else if (res.status === 201) {
      setIsLoading(false);
      setErrorMessage("");
      setSuccessMessage("New Post created!");
    }
  };

  const handleDraftPost = async (
    e: FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        published: false,
      }),
    });
    if (res.status === 401) {
      setIsLoading(false);
      setErrorMessage("Unauthorized");
    }
    if (res.status === 500) {
      console.log(res);
      setIsLoading(false);
      setErrorMessage("Error");
    } else if (res.status === 201) {
      setIsLoading(false);
      setErrorMessage("");
      setSuccessMessage("Draft Saved");
    }
  };

  let modal = showModal ? (
    <>
      <div
        aria-hidden="true"
        className=" bg-gray-800/50 min-h-[100vh] z-50 min-w-[100vw] mx-auto fixed right-0  flex flex-col"
      >
        <div className=" w-[75vw] my-10 rounded-lg bg-gray-200 flex flex-col mx-auto">
          <form className=" mx-auto flex flex-col items-center gap-[1rem] p-[1rem] ">
            <label htmlFor="title">Title</label>
            <input
              className="my-5 w-[50vw] p-2 outline-none rounded-sm mx-5"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleFormInputChange}
              placeholder="Title..."
            />
            <label htmlFor="content">Content</label>
            <textarea
              className="w-[50vw] my-5 p-2 outline-none rounded-sm mx-5"
              rows={10}
              cols={30}
              name="content"
              value={formData.content}
              onChange={handleFormInputChange}
              placeholder="Content..."
            />

            <button
              onClick={handleDraftPost}
              className="bg-cyan-500 rounded-sm text-slate-100 p-3 hover:opacity-90 hover:underline drop-shadow-xl"
            >
              Save Draft
            </button>
            {isLoading && <p className="text-center">Please Wait...</p>}
            {errorMessage && (
              <p className="text-center text-red-500">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-center text-green-500">{successMessage}</p>
            )}
            <button
              disabled={isLoading}
              className="bg-blue-500 rounded-sm text-slate-100 p-3 hover:opacity-90 hover:underline drop-shadow-xl"
              onClick={handleSubmitPost}
            >
              Publish
            </button>
            <button disabled={isLoading} onClick={() => setShowModal(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  ) : (
    <div
      onClick={() => setShowModal(true)}
      className="bg-cyan-500 drop-shadow-xl w-[25dvw] hover:opacity-80 rounded-sm  cursor-pointer text-center mx-auto mt-20"
    >
      <button className="my-10" type="button">
        Create Post
      </button>
    </div>
  );

  return modal;
}
