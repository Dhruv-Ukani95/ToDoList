import { DeleteForever } from "@mui/icons-material";
import { CheckCircle } from "@mui/icons-material";
import { Cancel } from "@mui/icons-material";
import "./List.css";

export const List = ({ todolist, toggle, onDelete }) => {
  return (
    <ul className="list">
      {todolist.map((listItem) => (
        <li key={listItem.id} className={listItem.done ? "done" : ""}>
          <span>{listItem.item}</span>
          <span className="actions">
            {listItem.done ? (
              <Cancel onClick={() => toggle(listItem.id)} />
            ) : (
              <CheckCircle onClick={() => toggle(listItem.id)} />
            )}

            <DeleteForever onClick={() =>onDelete(listItem.id)} />
          </span>
        </li>
      ))}
    </ul>
  );
};

export default List;
