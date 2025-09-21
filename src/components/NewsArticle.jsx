import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "https://67c3350e1851890165ae75d1.mockapi.io/news/news";

export default function NewsArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Загружаем статью
  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLikes(data.likes || 0);
        // Безопасная установка comments
        if (Array.isArray(data.comments)) {
          setComments(data.comments);
        } else if (typeof data.comments === "string") {
          try {
            setComments(JSON.parse(data.comments));
          } catch {
            setComments([]);
          }
        } else {
          setComments([]);
        }
      })
      .catch(() => console.warn("Не удалось загрузить статью"));
  }, [id]);

  const handleLike = async () => {
    const newLikes = likes + 1;
    setLikes(newLikes);

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...article, likes: newLikes }),
    });
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: `${Date.now()}-${Math.random()}`, // уникальный id
      text: newComment,
      createdAt: new Date().toLocaleString(),
    };

    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    setNewComment("");

    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...article, comments: updatedComments }),
    });
  };

  if (!article) return <p className="text-center mt-10">Загрузка статьи...</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/read" className="text-blue-500 hover:underline">
        ← Назад к новостям
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{article.date}</p>

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-60 md:h-100 rounded-lg shadow-md mb-6"
      />

      <p className="text-lg leading-relaxed text-gray-800 mb-6">
        {article.content}
      </p>

      {/* Лайки */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={handleLike}
          className="px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          ❤️ Лайк
        </button>
        <span className="text-gray-600">{likes} лайков</span>
      </div>

      {/* Комментарии */}
      <h2 className="text-xl font-semibold mb-3">Комментарии</h2>

      <div className="space-y-3">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c.id}
              className="bg-gray-100 p-3 rounded-lg shadow-sm flex flex-col"
            >
              <span className="text-sm text-gray-600">{c.createdAt}</span>
              <p className="text-gray-800">{c.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Пока нет комментариев</p>
        )}
      </div>

      {/* Форма добавления комментария */}
      <div className="mt-4 flex flex-col gap-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Оставьте комментарий..."
          className="border p-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddComment}
          className="self-end px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
