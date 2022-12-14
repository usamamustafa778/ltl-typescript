import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Categories, Page404, Blog, NewBlog } from "./pages";
import { useLocalStorage } from "./useLocalStorage";
import { NoteLayout } from "./pages/NoteLayout";
import { Note } from "./pages/Note";
import { EditNote } from "./pages/EditNote";
import { v4 as uuidV4 } from "uuid";
import Post from "./components/Post";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};

export default function Router() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else {
          return note;
        }
      });
    });
  }

  function onDeleteNote(id: string) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  function updateTag(id: string, label: string) {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }

  function deleteTag(id: string) {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  }

  let routes;
  // if (!user) {
  //   routes = [
  //     { path: "/", element: <Home /> },
  //     { path: "/categories", element: <Categories /> },
  //     { path: "*", element: <Page404 /> },
  //   ];
  // } else {
  //   routes = [
  //     { path: "/dashboard", element: <Dashboard /> },
  //     { path: "*", element: <Navigate to="/dashboard" replace /> },
  //   ];
  // }

  routes = [
    { path: "/", element: <Home /> },
    { path: "/categories", element: <Categories /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/test", element: <Post /> },
    {
      path: "/newBlog",
      element: (
        <NewBlog
          onSubmit={onCreateNote}
          onAddTag={addTag}
          availableTags={tags}
        />
      ),
    },
    {
      path: "/blog",
      element: (
        <Blog
          notes={notesWithTags}
          availableTags={tags}
          onUpdateTag={updateTag}
          onDeleteTag={deleteTag}
        />
      ),
    },
    { path: "*", element: <Page404 /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
        <Route index element={<Note onDelete={onDeleteNote} />} />
        <Route
          path="edit"
          element={
            <EditNote
              onSubmit={onUpdateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
      </Route>
    </Routes>
  );
}
