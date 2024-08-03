type Post = {
    title: string,
    description: string,
    pricebadge: string,
    price: number
}

const Post = ({ title, description, price, pricebadge }: Post) => {
    return (
        <div>
            {/* <!-- Card 1 --> */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src="./src/mansory-rolls-royce-cullinan-special-uae-front-corner.jpg" alt="Rolls-Royce Cullinan" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-bold">{price}{pricebadge}</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
