import { NoteForm } from "../components/BlogComponents/NoteForm";
import { NoteData, Tag } from "../Router";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export default function NewBlog({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-10/12 lg:w-9/12">
        <h1 className="text-4xl font-bold mt-10">New Blog</h1>
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </div>
    </div>
  );
}
