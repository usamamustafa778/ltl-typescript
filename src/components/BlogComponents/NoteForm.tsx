import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../../Router";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

export function NoteForm({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });

    navigate("/blog");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full grid grid-cols-2 gap-5 mt-10">
        <div id="title">
          <h4 className="text-xl font-medium mb-2">Title</h4>
          <input
            className="w-full px-6 py-2 rounded border border-gray-300"
            ref={titleRef}
            required
            defaultValue={title}
          />
        </div>
        <div id="tags">
          <h4 className="text-xl font-medium mb-2">Tags</h4>
          <CreatableReactSelect
            onCreateOption={(label) => {
              const newTag = { id: uuidV4(), label };
              onAddTag(newTag);
              setSelectedTags((prev) => [...prev, newTag]);
            }}
            value={selectedTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
            options={availableTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
            onChange={(tags) => {
              setSelectedTags(
                tags.map((tag) => {
                  return { label: tag.label, id: tag.value };
                })
              );
            }}
            className="pb-2"
            isMulti
          />
        </div>
      </div>
      <div id="markdown" className="mt-7">
        <h4 className="text-xl font-medium">Body</h4>
        <textarea
          defaultValue={markdown}
          required
          className="w-full p-5 border rounded-lg border-gray-300 mt-3"
          ref={markdownRef}
          rows={15}
        />
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button type="submit" className="btnPrimary">
          Save
        </button>
        <Link to="/blog" type="button" className="btnSecondary">
          Cancel
        </Link>
      </div>
    </form>
  );
}
