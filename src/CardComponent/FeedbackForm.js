import React from 'react'

export default function FeedbackForm() {
    const [formData, setFormData] = React.useState({
        firstname: '',
        lastname: '',
        address: '',
        country: '',
        emailid: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log(formData);
    };
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 py-6">
                <h2 className="text-2xl font-bold mb-4">Form</h2>
                <div className="mb-4">
                    <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">First Name</label>
                    <input type="text" id="firstname" name="firstname"
                        value={formData.firstname} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">Last Name</label>
                    <input type="text" id="lastname" name="lastname"
                        value={formData.lastname} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                    <textarea id="address" name="address"
                        value={formData.address} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
                    <input type="text" id="country" name="country"
                        value={formData.country} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="emailid" className="block text-gray-700 font-bold mb-2">Email ID</label>
                    <input type="email" id="emailid" name="emailid"
                        value={formData.emailid} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phoneNumber"
                        value={formData.phoneNumber} onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Submit</button>
            </form>
        </div>
    )
}
