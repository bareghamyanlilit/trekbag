import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleResetToInitial,
    handleMarkAllAsIncomplete,
    handleMarkAllAsComplete,
    handleRemoveAllItems,
  } = useItemsContext();

  return (
    <div className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </div>
  );
}
