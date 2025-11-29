import React from "react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

                <form className="space-y-5">

                    {/* Fixed Name */}
                    <div>
                        <label className="block mb-1 font-medium">Your Name</label>
                        <input
                            type="text"
                            value="Sajib Gazi"
                            className="w-full p-3 border rounded-lg outline-none bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Fixed Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email Address</label>
                        <input
                            type="email"
                            value="sajib@example.com"
                            className="w-full p-3 border rounded-lg outline-none bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Fixed Phone */}
                    <div>
                        <label className="block mb-1 font-medium">Phone Number</label>
                        <input
                            type="text"
                            value="+8801XXXXXXXXX"
                            className="w-full p-3 border rounded-lg outline-none bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Fixed Address */}
                    <div>
                        <label className="block mb-1 font-medium">Address</label>
                        <input
                            type="text"
                            value="Dhaka, Bangladesh"
                            className="w-full p-3 border rounded-lg outline-none bg-gray-100"
                            readOnly
                        />
                    </div>

                    {/* Message Box (editable) */}
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}