import React, { useEffect, useState } from 'react'
import Banner from './UI/Banner'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaGooglePlusG, FaRegStar, FaTwitter } from 'react-icons/fa6';
import Button from './UI/Button';
import { TiSocialInstagram } from 'react-icons/ti';
import { RiFacebookFill } from 'react-icons/ri';
import axios from 'axios';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const ProductDetails = () => {

    const params = useParams();
    let [up, setUp] = useState(1)
    const [productData, setProductData] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (params.id) {
            axios.get(`https://dummyjson.com/products/${params.id}`)
                .then((res) => {
                    setProductData(res.data);

                    const imgData = res.data.images.map((items) => {
                        return {
                            original: items,
                            thumbnail: items
                        }
                    });

                    setImages(imgData);
                })
                .catch(err => console.error("Error fetching product data:", err));
        }
    }, [params.id]);

    const handleAddTOCart = () => {
        axios.post("https://dummyjson.com/carts/add", {
            userId: 1,
            products: [
                {
                    id: params.id,
                    quantity: up,
                }
            ]
        })
            .then((res) => {
                console.log("Added:", res.data);
                toast.success("Product added to cart!");
            })
            .catch((err) => {
                console.error("Error adding to cart:", err);
                toast.error("Failed to add product to cart.");
            });
    };


    const handleDecrement = () => {
        setUp(prevUp => Math.max(1, prevUp - 1));
    };

    const handleIncrement = () => {
        setUp(prevUp => prevUp + 1);
    };

    return (
        <>
            <ToastContainer />
            <Banner title="Product Details" path="Home" />

            <section className='mt-[120px] mb-[100px]'>
                <div className="container">

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                        <div className='w-full'>
                            {images.length > 0 && (
                                <ImageGallery
                                    items={images}
                                    thumbnailPosition="left"
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                />
                            )}
                        </div>

                        <div className='w-full lg:w-[540px]'>
                            <h2 className='text-3xl font-medium'>{productData.title}</h2>
                            <p className='flex gap-2 text-amber-400'>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <p className='text-primary'>{(productData.rating)}</p>
                            </p>
                            <p className='pt-6 pb-10 text-secondary'>
                                {productData.description}
                            </p>
                            <div className='flex gap-3.5 pb-4'>
                                <h2 className='text-xl text-secondary'><del>${productData.price ? (productData.price + 50).toFixed(2) : ''}</del></h2>
                                <h2 className='text-3xl text-bagde'>${productData.price}</h2>
                            </div>
                            <div className='flex gap-2.5'>
                                <h2 className='pb-3'>Stock</h2>
                                <div>
                                    {productData?.stock}
                                </div>
                            </div>
                            <div>
                                <h2 className='pb-3 text-xl'>Size</h2>
                                <div className='flex gap-3'>
                                    <p className=''>XL</p>
                                    <p className=''>M</p>
                                    <p className=''>ML</p>
                                    <p className=''>LM</p>
                                    <p className=''>XXL</p>
                                </div>
                            </div>
                            <div className='py-8  flex gap-4 text-xl'>
                                <p>Quantity :</p>

                                <button onClick={handleDecrement} disabled={up <= 1}>-</button>
                                <p>{up}</p>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                            <div className='flex items-center gap-4 text-secondary'>
                                <div className='py-3 px-11 border text-secondary block w-fit'>
                                    <Button title="BUY NOW" />
                                </div>

                                <div onClick={handleAddTOCart} className='py-3 px-11 border text-secondary block w-fit'>
                                    <Button title="Add To Cart" />
                                </div>

                            </div>
                            <div className='pt-7 flex gap-3 items-center text-secondary'>
                                <p>shere:</p>
                                <FaTwitter />
                                <TiSocialInstagram />
                                <RiFacebookFill />
                                <FaGooglePlusG />
                            </div>


                        </div>
                    </div>

                    <div className='mt-20'>
                        <nav>

                            <ul className='flex justify-start lg:justify-center gap-4 lg:gap-14 pb-4 border-b text-sm sm:text-base lg:text-xl overflow-x-auto'>
                                <li><a href="/">Description</a></li>
                                <li><a href="/">Data sheet</a></li>
                                <li><a href="/">Reviews</a></li>
                            </ul>
                        </nav>
                        <div className='pt-14 text-secondary text-justify'>
                            <h2 className='text-2xl'>Details</h2>
                            <p className='text-base pt-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                            </p>
                            <h2 className='pt-14 pb-7 text-2xl text-secondary'>Features</h2>
                            <ul className='flex flex-col gap-3 mb-28'>
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                                <li>Irure dolor in reprehenderit in voluptate velit esse</li>
                                <li>Sed do eiusmod tempor incididunt ut labore et</li>
                                <li>Nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default ProductDetails