import { useContext } from "react";
import { ItemsContext } from "../contexts/itemsContextProvider";

export function useItemsContext(params) {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error('useItemsContect must be used within an ItemsContextProvider')
  }
  return context;
}
