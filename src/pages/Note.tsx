import { Link, useNavigate } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-10/12 lg:w-9/12">
        <div className="flex my-10 items-center justify-between">
          <div className="flex items-center justify-between">
            <h4 className="text-4xl font-bold">{note.title}</h4>
            {note.tags.length > 0 && (
              <>
                {note.tags.map((tag) => (
                  <p className="text-truncate" key={tag.id}>
                    {tag.label}
                  </p>
                ))}
              </>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Link to={`/${note.id}/edit`}>
              <button className="btnPrimary">Edit</button>
            </Link>
            <button
              onClick={() => {
                onDelete(note.id);
                navigate("/blog");
              }}
              className="btnSecondary"
            >
              Delete
            </button>
            <Link to="/">
              <button className="btnSecondary">Back</button>
            </Link>
          </div>
        </div>
        <ReactMarkdown>{note.markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
