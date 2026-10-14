
import { useState, type ChangeEvent, type FormEvent } from "react"
 function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        movingFrom: '',
        movingTo: '',
      propertyType: '',
        moving: '',
        movingDate: '',
        items: '',
    });
    const handleChange = (
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value,
        });
    };
    const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
    };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        {/*Header*/}
        <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-blue-950">Get a Moving  Quote</h2>
        
        <p className="mt-2 text-sm text-gray-500">
          Tell us about your move and we'll provide you with a free quote.
        </p>
      </div>
         <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className ="mb-1 block text-sm font-semibold text-gray-700">
            Full Name
          </label>
            <input
            type= "text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
            />
          </div>
                    {/* Phone */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>

        {/* Moving From */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Moving From
          </label>

          <input
            type="text"
            name="movingFrom"
            value={formData.movingFrom}
            onChange={handleChange}
            placeholder="Current location"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>

        {/* Moving To */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Moving To
          </label>

          <input
            type="text"
            name="movingTo"
            value={formData.movingTo}
            onChange={handleChange}
            placeholder="New location"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Property Type
          </label>

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          >
            <option value="">Choose property type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="office">Office</option>
            <option value="business">Business</option>
          </select>
        </div>

        {/* Moving Date */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Moving Date
          </label>

          <input
            type="date"
            name="movingDate"
            value={formData.movingDate}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
            required
          />
        </div>

        {/* Items */}
        <div>
          <label className="mb-1 block text-sm font-semibold text-gray-700">
            Items to Move
          </label>

          <textarea
            name="items"
            value={formData.items}
            onChange={handleChange}
            placeholder="Tell us what you are moving..."
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600"
        >
          GET MY FREE QUOTE
        </button>

        <p className="text-center text-xs text-gray-400">
          Your information is safe and will only be used to prepare your quote.
        </p>

      </form>
    </div>
  );
}

export default QuoteForm;
        
