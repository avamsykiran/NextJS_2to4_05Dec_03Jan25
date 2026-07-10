import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
import { Contact } from '../models/Contact';

type FilterInputsType = { field: string, value: string } | null;

export interface ContactsState {
    contacts: Contact[],
    filterInputs: FilterInputsType,
    setContacts: (contacts: Contact[]) => void,
    setFilter: (inputs: FilterInputsType) => void,
    sort: (sortField: keyof Contact) => void,
}

export interface ContactsProps {
    contacts: Contact[];
}

// 1. Define a creator function that builds a completely isolated instance
export const createContactsStore = (initProps?: ContactsProps) => {
    return createStore<ContactsState>((set) => ({
        contacts: initProps?.contacts ?? [],
        filterInputs: null,
        setContacts: (contacts) => set({ contacts }),
        setFilter: (inputs) => set({ filterInputs: inputs }),
        sort: (sortField) => set((state) => ({
            contacts: state.contacts.toSorted(
                (a, b) => a[sortField] < b[sortField] ? -1 : 1
            )
        })),
    }));
};

// 2. Infer the precise TypeScript configuration types
export type ContactsStore = ReturnType<typeof createContactsStore>;
