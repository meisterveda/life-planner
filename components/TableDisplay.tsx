interface ProductsProps {
    category: string
    name: string
    description: string
    quantity: number
    cost: number
    total: number
    link: string
}

interface TableProps {
    products: ProductsProps[]
}

function TableDisplay({ products }: TableProps) {
    return (
        <div className="container mx-auto mb-8 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between bg-gray-50">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cost
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr
                            key={product.name}
                            className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                                {product.category}
                            </th>
                            <td className="px-6 py-4">{product.name}</td>
                            <td className="px-6 py-4">{product.description}</td>
                            <td className="px-6 py-4">{product.quantity}</td>
                            <td className="px-6 py-4">{product.cost}</td>
                            <td className="px-6 py-4">
                                {product.quantity * product.cost}
                            </td>
                            <td className="px-6 py-4">{product.link}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDisplay
