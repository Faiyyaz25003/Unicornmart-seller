import React, { useState } from "react";
import { X, Plus, Upload } from "lucide-react";

const ProduuctUpload = () => {
  const [formData, setFormData] = useState({
    scrapName: "",
    customScrapName: "",
    category: "",
    customCategory: "",
    type: "",
    customType: "",
    quantity: "",
    price: "",
    condition: "",
    pickupLocation: "",
    pickup: "free",
    customPickup: "",
    images: [],
  });

  const [showCustomScrapName, setShowCustomScrapName] = useState(false);
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [showCustomType, setShowCustomType] = useState(false);

  // Predefined scrap data
  const scrapData = {
    "Iron Scrap": { category: "Metal", type: "Iron" },
    "Copper Scrap": { category: "Metal", type: "Copper" },
    "Aluminum Scrap": { category: "Metal", type: "Aluminum" },
    "Steel Scrap": { category: "Metal", type: "Steel" },
    "Plastic Scrap": { category: "Plastic", type: "PET" },
    "Paper Scrap": { category: "Paper", type: "Cardboard" },
    "E-Waste": { category: "Electronic", type: "Mixed" },
  };

  const handleScrapNameChange = (value) => {
    if (value === "custom") {
      setShowCustomScrapName(true);
      setFormData({ ...formData, scrapName: "", category: "", type: "" });
    } else {
      setShowCustomScrapName(false);
      const data = scrapData[value] || { category: "", type: "" };
      setFormData({
        ...formData,
        scrapName: value,
        customScrapName: "",
        category: data.category,
        type: data.type,
        customCategory: "",
        customType: "",
      });
      setShowCustomCategory(false);
      setShowCustomType(false);
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 10 - formData.images.length;
    const filesToAdd = files.slice(0, remainingSlots);

    const newImages = filesToAdd.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData({
      ...formData,
      images: [...formData.images, ...newImages],
    });
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    URL.revokeObjectURL(formData.images[index].preview);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            Add Scrap Product
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Scrap Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Scrap Name *
              </label>
              {!showCustomScrapName ? (
                <div className="flex gap-2">
                  <select
                    value={formData.scrapName}
                    onChange={(e) => handleScrapNameChange(e.target.value)}
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Scrap Type</option>
                    {Object.keys(scrapData).map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                    <option value="custom">+ Add Custom</option>
                  </select>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.customScrapName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customScrapName: e.target.value,
                      })
                    }
                    placeholder="Enter custom scrap name"
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowCustomScrapName(false);
                      setFormData({ ...formData, customScrapName: "" });
                    }}
                    className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {/* Category & Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Category *
                </label>
                {!showCustomCategory ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Auto-filled"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCustomCategory(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.customCategory}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customCategory: e.target.value,
                          category: e.target.value,
                        })
                      }
                      placeholder="Enter custom category"
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowCustomCategory(false);
                        setFormData({ ...formData, customCategory: "" });
                      }}
                      className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Type *
                </label>
                {!showCustomType ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Auto-filled"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowCustomType(true)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.customType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          customType: e.target.value,
                          type: e.target.value,
                        })
                      }
                      placeholder="Enter custom type"
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowCustomType(false);
                        setFormData({ ...formData, customType: "" });
                      }}
                      className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Quantity (Kg) *
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Price (₹/Kg) *
                </label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="32"
                  required
                />
              </div>
            </div>

            {/* Condition */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Condition *
              </label>
              <input
                type="text"
                value={formData.condition}
                onChange={(e) =>
                  setFormData({ ...formData, condition: e.target.value })
                }
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Rusted"
                required
              />
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Pickup Location *
              </label>
              <input
                type="text"
                value={formData.pickupLocation}
                onChange={(e) =>
                  setFormData({ ...formData, pickupLocation: e.target.value })
                }
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Andheri, Mumbai"
                required
              />
            </div>

            {/* Pickup Type */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Pickup *
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      pickup: "free",
                      customPickup: "",
                    })
                  }
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    formData.pickup === "free"
                      ? "bg-green-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  Free
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      pickup: "paid",
                      customPickup: "",
                    })
                  }
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    formData.pickup === "paid"
                      ? "bg-orange-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  Paid
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, pickup: "custom" })}
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    formData.pickup === "custom"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  Custom
                </button>
              </div>
              {formData.pickup === "custom" && (
                <input
                  type="text"
                  value={formData.customPickup}
                  onChange={(e) =>
                    setFormData({ ...formData, customPickup: e.target.value })
                  }
                  className="mt-3 w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter custom pickup details"
                  required
                />
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Images ({formData.images.length}/10)
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="imageUpload"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={formData.images.length >= 10}
                />
                <label
                  htmlFor="imageUpload"
                  className={`cursor-pointer ${
                    formData.images.length >= 10
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <Upload className="mx-auto mb-2 text-slate-400" size={48} />
                  <p className="text-slate-600">
                    {formData.images.length >= 10
                      ? "Maximum 10 images reached"
                      : "Click to upload images (Max 10)"}
                  </p>
                </label>
              </div>

              {/* Image Preview */}
              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
            >
              Submit Scrap Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProduuctUpload;
