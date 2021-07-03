export type EntityKey = {
  _id: string;
};

export type Created = "created";

export type Updated = "updated";

export type Removed = "removed";

export type Patched = "patched";

export type TypesActions = Created | Updated | Removed | Patched;

export const events: Record<TypesActions, { event: string; commit: string }> = {
  created: {
    event: "created",
    commit: "SET_NEW_ITEM",
  },

  updated: {
    event: "updated",
    commit: "SET_CHANGE_ITEM",
  },

  removed: {
    event: "removed",
    commit: "REMOVE_ITEM",
  },

  patched: {
    event: "patched",
    commit: "SET_CHANGE_ITEM",
  },
};
