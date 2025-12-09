export default function MerchPage() {
    const products = [
        { id: 1, name: '"I Grokked It First" Tee', price: "$29.99", image: "https://placehold.co/400x500/0a0a0a/39FF14?text=T-Shirt+Front" },
        { id: 2, name: '"Waiting for 4.20" Hoodie', price: "$59.99", image: "https://placehold.co/400x500/0a0a0a/39FF14?text=Hoodie+Mockup" },
        { id: 3, name: '"Neural Link" Cap', price: "$24.99", image: "https://placehold.co/400x500/0a0a0a/39FF14?text=Cap+Mockup" },
        { id: 4, name: 'Grok Mug', price: "$14.99", image: "https://placehold.co/400x500/0a0a0a/39FF14?text=Mug+Mockup" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="mb-4 text-4xl font-black tracking-tighter text-white">
                OFFICIAL <span className="text-neon">UNOFFICIAL</span> MERCH
            </h1>
            <p className="mb-12 text-neutral-400">Rep the movement before it's cool.</p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <div key={product.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 transition-all hover:-translate-y-2 hover:border-neon/50">
                        <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-800">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        <div className="p-4 text-left">
                            <h3 className="font-bold text-white group-hover:text-neon transition-colors">{product.name}</h3>
                            <p className="text-neutral-400">{product.price}</p>
                            <button className="mt-4 w-full rounded bg-white/10 py-2 text-sm font-bold text-white transition-colors hover:bg-neon hover:text-black">
                                ADD TO CART
                            </button>
                        </div>

                        {/* Sale Badge */}
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                            PRE-ORDER
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
