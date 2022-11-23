import { NoteForm } from "../components/BlogComponents/NoteForm";
import { NoteData, Tag } from "../Router";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-10/12 lg:w-9/12">
        <h1 className="text-4xl font-bold mt-10">Edit Note</h1>
        <NoteForm
          title={note.title}
          markdown={note.markdown}
          tags={note.tags}
          onSubmit={(data) => onSubmit(note.id, data)}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </div>
    </div>
  );
}
