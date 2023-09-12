import { useState } from "react";

export default function CreateBlogPost() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  let modal = showModal ? (
    <>
      <div
        aria-hidden="true"
        className=" bg-gray-800/50 min-h-[100vh] z-50 min-w-[100vw] mx-auto fixed right-0  flex flex-col"
      >
        <div className=" w-[75vw] my-10 rounded-lg bg-gray-200 flex flex-col mx-auto">
          <form className=" mx-auto flex flex-col items-center gap-[1rem] p-[1rem] ">
            <input
              className="my-5 w-[50vw] p-2 outline-none rounded-sm mx-5"
              type="text"
              name="post-title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
            />

            <textarea
              className="w-[50vw] my-5 p-2 outline-none rounded-sm mx-5"
              rows={10}
              cols={30}
              name="post-content"
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content..."
            />

            <button className="bg-cyan-500 rounded-sm text-slate-100 p-3 hover:opacity-90 hover:underline drop-shadow-xl">
              Save Draft
            </button>
            {loading && <p className="text-center">Please Wait...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {success && <p className="text-center text-green-500">{success}</p>}
            <button
              disabled={loading}
              className="bg-blue-500 rounded-sm text-slate-100 p-3 hover:opacity-90 hover:underline drop-shadow-xl"
            >
              Publish
            </button>
            <button disabled={loading} onClick={() => setShowModal(false)}>
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
      <button
        className="my-10"
        type="button"
      >
        Create Post
      </button>
    </div>
  );

  return modal;
}
