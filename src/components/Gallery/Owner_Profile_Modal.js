function OwnerProfileModal({ owner, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
        <div className="relative bg-white text-black rounded-xl p-6 w-full max-w-md">
          <button onClick={onClose} className="absolute top-2 right-4 text-3xl hover:text-red-500">
            &times;
          </button>
  
          <div className="flex flex-col items-center text-center">
            <img
              src={owner.img}
              alt={owner.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 mb-4"
            />
            <h2 className="text-xl font-semibold">{owner.name}, {owner.num_of_pets} pets</h2>
            <h4 className="text-lg font-medium">{owner.job_title}</h4>
            <p className="text-sm text-gray-600 mt-1">{owner.rehome_reason}</p>
  
            <div className="mt-4 text-sm">
              <p><strong>Phone:</strong> {owner.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default OwnerProfileModal;
  