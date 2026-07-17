"use client";

import { createContext, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { ContactsState, ContactsStore, createContactsStore } from './contactsStore';
import { Contact } from '../models/Contact';

// Initialize the context container bound to our specific store instance type
export const ContactsStoreContext = createContext<ContactsStore | null>(null);

interface ProviderProps {
    initialData: { contacts: Contact[] };
    children: React.ReactNode;
}

export function ContactsStoreProvider({ initialData, children }: ProviderProps) {
    // Use a mutable React ref to ensure this exact store instance is only created ONCE 
    // during the entire client-side layout mounting phase
    const storeRef = useRef<ContactsStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = createContactsStore({ contacts: initialData.contacts });
    }

    return (
        <ContactsStoreContext.Provider value={storeRef.current}>
            {children}
        </ContactsStoreContext.Provider>
    );
}

// Custom selector hook to safely interact with state values anywhere down the layout
export function useContactsStore<T>(selector: (state: ContactsState) => T): T {
    const storeContext = useContext(ContactsStoreContext);
    if (!storeContext) {
        throw new Error("useVehicleStore must be used within a VehicleStoreProvider wrapper.");
    }
    // Binds the native vanilla Zustand store cleanly back into React's reactive render cycle
    return useStore(storeContext, selector);
}