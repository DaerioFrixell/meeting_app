import { useState } from 'react';

export default function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = (): void => {
        setIsOpen(!isOpen);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, toggle, closeModal };
}
