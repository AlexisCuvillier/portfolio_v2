export const BurgerMenu = () => {
    return (
        <ul className="space-y-1 md:hidden">
            <li>
                <a
                    href="#"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                    General
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Teams
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Billing
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Invoices
                </a>
            </li>

            <li>
                <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                    Account
                </a>
            </li>
        </ul>
    );
};
