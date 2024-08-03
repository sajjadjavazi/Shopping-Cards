type Post = {
    title: string,
    description: string,
    pricebadge: string,
    price: number,
    image: string
}

const Post = ({ title, description, price, pricebadge, image }: Post) => {
    return (
        <div className="max-w-sm mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-52 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-800">{price}{pricebadge}</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Post;
