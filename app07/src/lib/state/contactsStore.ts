import { createStore } from 'zustand/vanilla';
import { Contact } from '../models/Contact';

export type ContactsFilterInputsType = { field: keyof Contact | "all", value: string };

export interface ContactForUI extends Contact {
    isVisible: boolean;
}

export interface ContactsState {
    contacts: ContactForUI[],
    setContacts: (contacts: Contact[]) => void,
    filter: (inputs: ContactsFilterInputsType) => void,
    sort: (sortField: keyof Contact) => void,
}

export interface ContactsProps {
    contacts: Contact[];
}

// 1. Define a creator function that builds a completely isolated instance
export const createContactsStore = (initProps?: ContactsProps) => {
    return createStore<ContactsState>((set) => ({
        contacts: initProps?.contacts.map(cx => ({ ...cx, isVisible: true })) ?? [],
        setContacts: (contacts) => set({ contacts }),
        filter: (inputs) => set((state) => {

            let filteredContacts = [];
            if (inputs.field === "all" || !inputs.value || inputs.value.trim().length === 0) {
                filteredContacts = state.contacts.map(cx => ({ ...cx, isVisible: true }));
            } else {
                const { field, value } = inputs;
                if (field === "id") {
                    filteredContacts = state.contacts.map(cx => ({ ...cx, isVisible: (cx[field] === Number(value)) }));
                } else {
                    filteredContacts = state.contacts.map(cx => ({ ...cx, isVisible: (cx[field].includes(value)) }));
                }
            }

            return { contacts: filteredContacts };
        }),
        sort: (sortField) => set((state) => ({
            contacts: state.contacts.toSorted(
                (a, b) => a[sortField] < b[sortField] ? -1 : 1
            )
        })),
    }));
};

// 2. Infer the precise TypeScript configuration types
export type ContactsStore = ReturnType<typeof createContactsStore>;
